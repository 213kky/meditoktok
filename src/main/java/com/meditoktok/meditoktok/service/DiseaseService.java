package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.domain.Disease;
import com.meditoktok.meditoktok.repository.DiseaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiseaseService {
    @Autowired
    DiseaseRepository diseaseRepository;

    public List<Disease> getAllDisease(){
        return diseaseRepository.findAll();
    }
}
