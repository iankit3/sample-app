package com.sample.hotel.service;

import com.sample.hotel.model.HotelPackage;
import com.sample.hotel.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    public HotelPackage get(long id){
        try{
            return packageRepository.findById(id).get();
        }catch (NoSuchElementException e){
            return null;
        }
    }

    public List<HotelPackage> getAll(){
        List<HotelPackage> packages = new ArrayList<>();
        packageRepository.findAll().forEach(p -> {
            packages.add(p);
        });

        return packages;
    }

    public HotelPackage addPackage(HotelPackage p){
        return packageRepository.save(p);
    }

    public void deletePackage(long id){
        packageRepository.deleteById(id);
    }
}
