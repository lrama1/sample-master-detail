package com.sample.web.domain;

import org.hibernate.validator.constraints.NotBlank;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "vehicle")
public class Vehicle {
	@Id
	@NotBlank(message = "id is mandatory")
	private String id;
	@NotBlank(message = "year is mandatory")
	private String year;
	@NotBlank(message = "make is mandatory")
	private String make;
	@NotBlank(message = "model is mandatory")
	private String model;

	public String getId() {
		return id;
	}

	public String getYear() {
		return year;
	}

	public String getMake() {
		return make;
	}

	public String getModel() {
		return model;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public void populateWithSample() {
		int appender = getNextNumber();
		id = "Sample Value id " + appender;
		year = "Sample Value year " + appender;
		make = "Sample Value make " + appender;
		model = "Sample Value model " + appender;
	}

	static int sampleCounter = 0;

	private static int getNextNumber() {
		sampleCounter++;
		return sampleCounter;
	}

	public String toString() {
		return "id = " + id + ", year = " + year + ", make = " + make + ", model = " + model;
	}
}
