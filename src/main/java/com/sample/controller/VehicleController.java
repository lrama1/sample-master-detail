package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.security.Principal;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import javax.validation.Valid;

//import the domain
import com.sample.web.domain.Vehicle;
import com.sample.service.VehicleService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class VehicleController extends BaseController {

	@Autowired
	VehicleService vehicleService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/vehicle/{id}", method = RequestMethod.GET)
	public Vehicle getVehicle(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		Vehicle vehicle = vehicleService.getVehicle(id);
		if (vehicle == null)
			return new Vehicle();
		else
			return vehicle;
	}

	@RequestMapping(value = "/vehicle", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public Vehicle saveNewVehicle(@Valid @RequestBody Vehicle vehicle) {
		vehicleService.saveNewVehicle(vehicle);
		return vehicle;
	}

	@RequestMapping(value = "/vehicle/{id}", headers = { "accept=application/json" }, method = RequestMethod.PUT)
	public Vehicle updateVehicle(@Valid @RequestBody Vehicle vehicle) {
		vehicleService.saveVehicle(vehicle);
		return vehicle;
	}

	@RequestMapping("/vehicles")
	public ListWrapper<Vehicle> getAllVehicles(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return vehicleService.getVehicles(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
