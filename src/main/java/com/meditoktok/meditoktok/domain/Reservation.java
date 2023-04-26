package com.meditoktok.meditoktok.domain;

import java.time.ZonedDateTime;

public class Reservation {
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
    private ZonedDateTime reservationDate;
    private String patientName;
    private String department;
    private String medicalStaffName;
    private String phoneNumber;
    private String address;
    private String birth;
    private Gender gender;
    private String note;

    public String getHospiName() {
        return hospiName;
    }

    public void setHospiName(String hospiName) {
        this.hospiName = hospiName;
    }

    private String hospiName;

    public ZonedDateTime getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(ZonedDateTime reservationDate) {
        this.reservationDate = reservationDate;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getMedicalStaffName() {
        return medicalStaffName;
    }

    public void setMedicalStaffName(String medicalStaffName) {
        this.medicalStaffName = medicalStaffName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}


