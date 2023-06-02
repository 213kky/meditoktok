package com.meditoktok.meditoktok.domain;

import jakarta.persistence.*;

@Entity
public class Hospital {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String hospName;
    private String department;
    private String medicalStaffName;
    private String operatingHours;
    private String address;
    private String tell;
    private String url;
    private String notes;
    private String ykiho;

    public String getYkiho() {
        return ykiho;
    }

    public void setYkiho(String ykiho) {
        this.ykiho = ykiho;
    }
    //    private Long adminId;     관리자 삭제시 병원도 삭제를 위해?? DB에만 fk로
//
//    public Long getAdminId() {
//        return adminId;
//    }
//
//    public void setAdminId(Long adminId) {
//        this.adminId = adminId;
//    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getOperatingHours() {
        return operatingHours;
    }

    public void setOperatingHours(String operatingHours) {
        this.operatingHours = operatingHours;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTell() {
        return tell;
    }

    public void setTell(String tell) {
        this.tell = tell;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getHospName() {
        return hospName;
    }

    public void setHospName(String hospName) {
        this.hospName = hospName;
    }
}
//진료과목
//의료진
//운영시간
//주소
//전화번호
//병원URL
//공지사항