package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.repository.HospitalRepository;
import com.meditoktok.meditoktok.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class HospitalController {
    @Autowired
    HospitalService hospitalService;

    @PostMapping("/test11")
    public String test(@RequestBody HospitalTest hospitalTest) {

//        Optional<Hospital> byHospName = Optional.ofNullable(hospitalRepository.findByHospName(hospitalTest.getId()));
//        if(byHospName.isPresent()){
//            return byHospName.get().getHospName();
//        }
//        else {
//            throw new RuntimeException("정보에 해당하는 아이디가 없습니다.");
//        }
        Hospital test = hospitalService.test(hospitalTest.getId());
        return test.getHospName();
//        return hospitalTest.toString();
    }
}
