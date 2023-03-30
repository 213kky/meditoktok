package com.meditoktok.meditoktok.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Member {
    @Id
    private String id;
    private String pw;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    String eMail;
    String phoneNumber;
    String name;
    String birth;
    Boolean isAdmin;
    Gender gender; //MALE, FEMALE
    Boolean mailAgree;


}
