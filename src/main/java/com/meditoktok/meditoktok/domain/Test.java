package com.meditoktok.meditoktok.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Test {
    @Id
    private Long id;
    private String mediTest;
}
