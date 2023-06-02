package com.meditoktok.meditoktok.controller;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TimeTableDto {
    private String timeId;
    @JsonProperty("doctorId")
    private Long doctorId;
    @JsonProperty("reservationDate")
    private String reservationDate;

    public String getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(String date) {
        this.reservationDate = date;
    }

    public String getTimeId() {
        return timeId;
    }

    public void setTimeId(String timeId) {
        this.timeId = timeId;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }
}
