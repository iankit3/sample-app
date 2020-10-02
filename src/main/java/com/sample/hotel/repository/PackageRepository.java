package com.sample.hotel.repository;

import com.sample.hotel.model.HotelPackage;
import org.springframework.data.repository.CrudRepository;

public interface PackageRepository extends CrudRepository<HotelPackage, Long> {
}
