package com.meditoktok.meditoktok.controller;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResDto {

    private String reservationDate;
    private String department;
    private String medicalStaffName;
    private String notes;
    private String hospName;
    private Long userId;



    @JsonProperty("reservationDate")
    public String getReservationDate() {
        return reservationDate;
    }
    @JsonProperty("reservationDate")
    public void setReservationDate(String reservationDate) {
        this.reservationDate = reservationDate;
    }

    @JsonProperty("userId")
    public Long getUserId() {
        return userId;
    }
    @JsonProperty("userId")
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @JsonProperty("department")
    public String getDepartment() {
        return department;
    }
    @JsonProperty("department")
    public void setDepartment(String department) {
        this.department = department;
    }
    @JsonProperty("medicalStaffName")
    public String getMedicalStaffName() {
        return medicalStaffName;
    }
    @JsonProperty("medicalStaffName")
    public void setMedicalStaffName(String medicalStaffName) {
        this.medicalStaffName = medicalStaffName;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
    @JsonProperty("hospName")
    public String getHospName() {
        return hospName;
    }
    @JsonProperty("hospName")
    public void setHospName(String hospName) {
        this.hospName = hospName;
    }
}


    //    예약 날짜와 시간 프론트엔드 reservation_date
//    환자이름 디비 patient_name
//    진료과 프론트엔드 department
//    의료진이름 프론트엔드 medical_staff_name
//    연락처 디비 phone_number
//    주소 디비또는 없음 address
//    생년월일 디비 birth
//    성별 디비 gender
//    특이사항 프론트엔드 notes
//    병원이름
