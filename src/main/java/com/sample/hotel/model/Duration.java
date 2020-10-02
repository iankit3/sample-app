package com.sample.hotel.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class Duration implements Serializable {
    private int days;
    private int nights;

    public Duration(int days, int nights){
        this.days = days;
        this.nights = nights;
    }
}
