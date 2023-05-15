package com.meditoktok.meditoktok.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Hospital {
    @Id
    private Long id;
    private Long adminId; // 관리자 pk값
//    id, 요양기관명, 종별코드명, 시도코드명, 시군구코드명, 읍면동, 우편번호, 주소, 전화번호, 병원홈페이지, 개설일자, 좌표(X), 좌표(Y)
    private String hospName;
    private String address;
    private String tell;
    private String department;
    private String medicalStaffName;
    private String operatingHours;
    private String url;
    private String notice;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }

    public String getHospName() {
        return hospName;
    }

    public void setHospName(String hospName) {
        this.hospName = hospName;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
    }
}
