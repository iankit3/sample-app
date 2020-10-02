package com.sample.hotel.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Getter @Setter @NoArgsConstructor
public class HotelPackage implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    private String name;
    private int age;
    private Duration duration;
    private int validity;
    private String description;

    public HotelPackage(String name, int age, Duration duration, int validity, String description) {
        this.name = name;
        this.age = age;
        this.duration = duration;
        this.validity = validity;
        this.description = description;
    }
}
