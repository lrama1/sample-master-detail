package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.Vehicle;
import com.sample.common.ListWrapper;
import com.sample.dao.VehicleRepository;
import com.sample.common.SortedIndicator;

@Service
public class VehicleService {

	@Autowired
	VehicleRepository vehicleRepository;

	public ListWrapper<Vehicle> getVehicles(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		//return vehicleDAO.getVehicles(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<Vehicle> vehiclePage = vehicleRepository.findAll(request);
		ListWrapper<Vehicle> results = new ListWrapper<>();
		results.setRows(vehiclePage.getContent());
		results.setTotalRecords(new Long(vehiclePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public Vehicle getVehicle(String id) {
		return vehicleRepository.findOne(id);
	}

	public void saveNewVehicle(Vehicle vehicle) {
		vehicleRepository.saveAndFlush(vehicle);
	}

	public void saveVehicle(Vehicle vehicle) {
		vehicleRepository.saveAndFlush(vehicle);
	}
}
