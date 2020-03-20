package com.sample.util;

import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Component;

@Component
public class ExposedResourceBundleMessageSource extends ReloadableResourceBundleMessageSource {

	private String baseName;
	private String[] baseNames;

	@Override
	public void setBasename(String baseName) {
		this.baseName = baseName;
		super.setBasename(baseName);
	}

	@Override
	public void setBasenames(String... baseNames) {
		this.baseNames = baseNames;
		super.setBasenames(baseNames);
	}

	public String getBaseName() {
		return this.baseName;
	}

	public String[] getBaseNames() {
		return this.baseNames;
	}
}
