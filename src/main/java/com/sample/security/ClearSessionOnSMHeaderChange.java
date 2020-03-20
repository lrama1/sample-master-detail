package com.sample.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

public class ClearSessionOnSMHeaderChange extends GenericFilterBean {

	private static final String SITEMINDER_USER_HEADER_NAME = "SM_USER";

	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
			throws IOException, ServletException {

		SecurityContext securityContext = SecurityContextHolder.getContext();
		HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;

		if (securityContext != null && securityContext.getAuthentication() != null
				&& isSiteminderHeaderPresent(httpServletRequest)) {
			String siteminderSMUserValue = httpServletRequest.getHeader(SITEMINDER_USER_HEADER_NAME);
			String currentPrincipalName = securityContext.getAuthentication().getName();
			if (currentPrincipalName != null && !currentPrincipalName.equals(siteminderSMUserValue)) {
				SecurityContextHolder.clearContext();
			}
		}
		filterChain.doFilter(servletRequest, servletResponse);

	}

	private boolean isSiteminderHeaderPresent(HttpServletRequest httpServletRequest) {
		return httpServletRequest.getHeaders(SITEMINDER_USER_HEADER_NAME).hasMoreElements();
	}

}
