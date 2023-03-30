package com.meditoktok.meditoktok.domain;

import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Member {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serial_number;
    private String id;
    private String pw;

    public Long getSerial_number() {
        return serial_number;
    }

    public void setSerial_number(Long serial_number) {
        this.serial_number = serial_number;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Boolean getMailAgree() {
        return mailAgree;
    }

    public void setMailAgree(Boolean mailAgree) {
        this.mailAgree = mailAgree;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    private String eMail;
    private String phoneNumber;
    private String name;
    private String birth;
    private Boolean isAdmin;
    private Gender gender; //MALE, FEMALE
    private Boolean mailAgree;


}