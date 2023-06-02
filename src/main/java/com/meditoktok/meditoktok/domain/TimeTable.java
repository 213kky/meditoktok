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

    @JsonProperty("doctorId")
    private Long doctorId;
    @JsonProperty("reservationDate")
    private String reservationDate;
    private String timeId;
    @JsonProperty("max")
    private Long max;
    public TimeTable() {
        // 기본 생성자 구현
    }
    public TimeTable(String timeId, Long max) {
        this.timeId = timeId;
        this.max = max;
    }

    public String getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(String reservationDate) {
        this.reservationDate = reservationDate;
    }

    public Long getMax() {
        return max;
    }

    public void setMax(Long max) {
        this.max = max;
    }

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
        return reservationDate;
    }

    public void setDate(String date) {
        this.reservationDate = date;
    }

    public String getTimeId() {
        return timeId;
    }

    public void setTimeId(String timeId) {
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
