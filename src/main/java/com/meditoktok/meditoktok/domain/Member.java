package com.meditoktok.meditoktok.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Member {
    @Id
    String id;
    String pw;
    String eMail;
    String phoneNumber;
    String name;
    String birth;
    Boolean isAdmin;
    Gender gender; //MALE, FEMALE
    Boolean mailAgree;


}
