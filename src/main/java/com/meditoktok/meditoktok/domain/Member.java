package com.meditoktok.meditoktok.domain;

import com.fasterxml.jackson.annotation.JsonTypeId;

public class Member {
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
