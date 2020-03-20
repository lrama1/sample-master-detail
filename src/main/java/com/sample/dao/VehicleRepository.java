package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, String> {

}
