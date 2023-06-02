package com.meditoktok.meditoktok.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
@Entity(name = "reservations")
public class Reservation {
    //    예약 날짜와 시간 프론트엔드 reservation_date
//    환자이름 디비 patient_name   로그인 상태를 알면 누군지 알수있나?     복잡하게 하지말고 User pk 값하나 받자 받아서 pk값조회해서 빈칸채우기
//    진료과 프론트엔드 department
//    의료진이름 프론트엔드 medical_staff_name
//    연락처 디비 phone_number
//    주소 디비또는 없음 address
//    생년월일 디비 birth
//    성별 디비 gender
//    특이사항 프론트엔드 notes
//    병원이름   프론트엔드에서 받아서 ㄷㅂ저장
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private Long doctorId;
    private String reservationDate;
    private String patientName;
    private String department;
    private String medicalStaffName;
    private String phoneNumber;
    private String address;
    private String birth;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String notes;
    private String hospiName;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getHospiName() {
        return hospiName;
    }

    public void setHospiName(String hospiName) {
        this.hospiName = hospiName;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(String reservationDate) {
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


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}


