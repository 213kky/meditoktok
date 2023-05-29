package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Symptom;
import com.meditoktok.meditoktok.service.SymptomService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/symptoms")
public class SymptomController {
    private final SymptomService symptomService;

    public SymptomController(SymptomService symptomService) {
        this.symptomService = symptomService;
    }

    @GetMapping
    public List<Symptom> getAllSymptoms() {
        return symptomService.getAllSymptoms();
//        return symptomService.getAllSymptoms();

    }
}
