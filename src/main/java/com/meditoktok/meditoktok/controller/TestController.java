package com.meditoktok.meditoktok.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@RestController
public class TestController {

    /**
     * DB연결 테스트
     */
    @Autowired
    private DataSource dataSource;

    @GetMapping("/test")
    public String test() throws SQLException {
        try (Connection connection = dataSource.getConnection()) {
            return "Database connected successfully!";
        }
    }

    @GetMapping("/test/fe")
    public String testFe() {
        return "localhost:3000으로 보낸 요청";
    }

    @PostMapping("/send/date")
    public String asdD(@RequestBody ResDto dto) {
        return "asd";
    }
}
