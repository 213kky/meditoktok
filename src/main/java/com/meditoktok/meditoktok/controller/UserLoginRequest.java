package com.meditoktok.meditoktok.controller;

public class UserLoginRequest {
    private String account;
    private String pw;

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }
}
