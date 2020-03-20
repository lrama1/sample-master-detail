package com.sample.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.preauth.RequestHeaderAuthenticationFilter;
import org.springframework.security.web.context.SecurityContextPersistenceFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	private static final String[] IGNORE_URLS = { "/logout", "**/logout**" };

	@Value("${csrfEnabled:true}")
	private boolean csrfEnabled;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		if (csrfEnabled) {
			http.csrf().csrfTokenRepository(csrfTokenRepo()).ignoringAntMatchers(IGNORE_URLS).and()
					.addFilterAfter(siteminderFilter(), RequestHeaderAuthenticationFilter.class)
					.addFilterAfter(new ClearSessionOnSMHeaderChange(), SecurityContextPersistenceFilter.class)
					.authorizeRequests().antMatchers("/**").hasRole("USER").and().httpBasic().and().logout()
					.invalidateHttpSession(true).deleteCookies("JSESSIONID")
					.logoutSuccessHandler(new CustomLogoutSuccessHandler());
		} else {
			http.csrf().disable().addFilterAfter(siteminderFilter(), RequestHeaderAuthenticationFilter.class)
					.addFilterAfter(new ClearSessionOnSMHeaderChange(), SecurityContextPersistenceFilter.class)
					.authorizeRequests().antMatchers("/**").hasRole("USER").and().httpBasic().and().logout()
					.invalidateHttpSession(true).deleteCookies("JSESSIONID")
					.logoutSuccessHandler(new CustomLogoutSuccessHandler());
		}
	}

	private CsrfTokenRepository csrfTokenRepo() {
		HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
		repository.setHeaderName("x-csrf-token");
		return repository;
	}

	@Bean(name = "siteminderFilter")
	public RequestHeaderAuthenticationFilter siteminderFilter() throws Exception {
		RequestHeaderAuthenticationFilter siteminderFilter = new RequestHeaderAuthenticationFilter();
		siteminderFilter.setPrincipalRequestHeader("SM_USER");
		siteminderFilter.setExceptionIfHeaderMissing(false);
		siteminderFilter.setAuthenticationManager(authenticationManagerBean());
		return siteminderFilter;
	}

	@Bean
	public SpringAuthenticationProvider springAuthenticationProvider() {
		return new SpringAuthenticationProvider();
	}

	@Bean
	public ClearSessionOnSMHeaderChange clearSessionOnSMHeaderChange() {
		return new ClearSessionOnSMHeaderChange();
	}

}
