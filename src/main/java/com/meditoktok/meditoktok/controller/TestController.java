package com.meditoktok.meditoktok.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@RestController
public class TestController {

    @Autowired
    private DataSource dataSource;

    @GetMapping("/test")
    public String test() throws SQLException {
        try (Connection connection = dataSource.getConnection()) {
            return "Database connected successfully!";
        }
    }
}
