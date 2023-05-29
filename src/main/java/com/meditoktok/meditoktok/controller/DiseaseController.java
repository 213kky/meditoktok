package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Disease;
import com.meditoktok.meditoktok.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DiseaseController {
    @Autowired
    DiseaseService diseaseService;

    @GetMapping("/diseaseList")
    public List<Disease> getAllDisease(){
        return diseaseService.getAllDisease();
    }
}
