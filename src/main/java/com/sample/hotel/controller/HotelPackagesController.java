package com.sample.hotel.controller;

import com.sample.hotel.model.HotelPackage;
import com.sample.hotel.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/packages")
public class HotelPackagesController {

    @Autowired
    private PackageService packageService;

    @GetMapping("/")
    public ResponseEntity<List<HotelPackage>> get(){
        return new ResponseEntity<>(packageService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HotelPackage> getById(@PathVariable long id){
        return new ResponseEntity<>(packageService.get(id), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<HotelPackage> addPackage(@RequestBody HotelPackage hotelPackage){
        try {
            HotelPackage hp = packageService.addPackage(hotelPackage);
            return new ResponseEntity<>(hp, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<HotelPackage> updatePackage(@PathVariable("id") long id, @RequestBody HotelPackage hotelPackage){
        try {
            if(packageService.get(id) != null){
                hotelPackage.setId(id);
                HotelPackage hp = packageService.addPackage(hotelPackage);
                return new ResponseEntity<>(hp, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HotelPackage> updatePackage(@PathVariable("id") long id){
        try {
            HotelPackage hp = packageService.get(id);
            if(hp != null){
                packageService.deletePackage(id);
                return new ResponseEntity<>(hp, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
