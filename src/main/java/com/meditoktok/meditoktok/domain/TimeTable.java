package com.meditoktok.meditoktok.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "doctortimetable")
public class TimeTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long doctorId;
    private String date;
    private Long timeId;
    @JsonProperty("max")
    private Long max;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getTimeId() {
        return timeId;
    }

    public void setTimeId(Long timeId) {
        this.timeId = timeId;
    }

    public Long getCount() {
        return max;
    }

    public void setCount(Long count) {
        this.max = count;
    }

    public String  convert(Long a) {

        int hours = 9;
        String minutes;
        if (a % 2 == 1) {
            minutes = "00";
        } else {
            minutes = "30";
        }
        for(Long i = a; i > 2 ; i = i - 2){
            hours += 1;
        }
        String time = hours + ":" + minutes;
        return  time;
    }
}
