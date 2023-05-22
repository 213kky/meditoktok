package com.meditoktok.meditoktok.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "admin_id")
public class Admin extends Member {
    private Long hospiId;


    public Long getHospiId() {
        return hospiId;
    }

    public void setHospiId(Long hospiId) {
        this.hospiId = hospiId;
    }
}
