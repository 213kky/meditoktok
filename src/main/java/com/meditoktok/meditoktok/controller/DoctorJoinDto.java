package com.meditoktok.meditoktok.controller;


import java.util.List;


public class DoctorJoinDto {
    private Long hospiId;
    private List<DoctorInfo> doctors;

    public Long getHospiId() {
        return hospiId;
    }

    public void setHospiId(Long hospiId) {
        this.hospiId = hospiId;
    }

    public List<DoctorInfo> getDoctors() {
        return doctors;
    }

    public void setDoctors(List<DoctorInfo> doctors) {
        this.doctors = doctors;
    }
}
