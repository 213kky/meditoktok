package com.meditoktok.meditoktok.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Hospital {
    @Id
    private int id;

//    id, 요양기관명, 종별코드명, 시도코드명, 시군구코드명, 읍면동, 우편번호, 주소, 전화번호, 병원홈페이지, 개설일자, 좌표(X), 좌표(Y)
    String hospName;
    String address;
    String tell;

    double x;
    double y;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }


}
