package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

    public Hospital test(int id){
        Optional<Hospital> byHospName = hospitalRepository.findById(id);
        return byHospName.get();
    }
}
