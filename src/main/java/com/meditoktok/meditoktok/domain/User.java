package com.meditoktok.meditoktok.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.PrimaryKeyJoinColumn;

//@Entity
//@PrimaryKeyJoinColumn(name = "user_id")
//public class User extends Member {
//    private int gender;
//
//    public int getGender() {
//        return gender;
//    }
//
//    public void setGender(int gender) {
//        this.gender = gender;
//    }
//}


@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class User extends Member {
    @Enumerated(EnumType.STRING)
    private Gender gender;

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }
}

enum Gender {
    Male,
    Female
}
