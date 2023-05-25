package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.domain.Symptom;
import com.meditoktok.meditoktok.repository.SymptomRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SymptomService {
    private final SymptomRepository symptomRepository;

    public SymptomService(SymptomRepository symptomRepository) {
        this.symptomRepository = symptomRepository;
    }

    public List<Symptom> getAllSymptoms() {
        return symptomRepository.findAll();
    }

    public List<Symptom> getPartSymptoms(String test) {return symptomRepository.findByBodyPart(test);}
}