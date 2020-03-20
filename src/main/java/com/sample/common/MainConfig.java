package com.sample.common;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.context.request.RequestContextListener;

import com.sample.util.ExposedResourceBundleMessageSource;

@Configuration
public class MainConfig {

	@Bean
	public ExposedResourceBundleMessageSource messageSource() {
		ExposedResourceBundleMessageSource messageSource = new ExposedResourceBundleMessageSource();
		Locale.setDefault(Locale.ENGLISH);
		messageSource.setBasename("classpath:locales/messages");
		messageSource.setDefaultEncoding("UTF-8");
		return messageSource;
	}

	@Bean
	public LocalValidatorFactoryBean getValidator() {
		LocalValidatorFactoryBean bean = new LocalValidatorFactoryBean();
		bean.setValidationMessageSource(messageSource());
		return bean;
	}

	@Bean
	public RequestContextListener requestContextListener() {
		return new RequestContextListener();
	}
}
