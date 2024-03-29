package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.repository.HospitalRepository;
import com.meditoktok.meditoktok.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class HospitalController {
    @Autowired
    HospitalService hospitalService;


    //병원 저장하면서 병원 Id값 반환 do
    @PostMapping("/api/saveData")
    public Long firstSave(@RequestBody Hospital dto){
//
        Long id = hospitalService.firstSave(dto).getId();
        return id;
    }

    @GetMapping("/join")
    public Hospital getHospitalByYkiho(@RequestParam String ykiho) throws Exception {
        System.out.println(ykiho);
        Hospital hospital = hospitalService.getHospitalByYkiho(ykiho);
        return hospital;
    }
    @GetMapping("/manager1")
    public Hospital getHospitalById(@RequestParam long hospiId) throws Exception {
        Hospital hospital = hospitalService.getHospitalById(hospiId);
        return hospital;
    }

//    @PostMapping("/manager1")
//    public Hospital getHospitalById(@RequestBody long hospiId) throws Exception {
//        Hospital hospital = hospitalService.getHospitalById(hospiId);
//        return hospital;
//    }

    @PostMapping("/manager12")
    public String change(@RequestBody Hospital dto) throws Exception{
        hospitalService.updateHospital(dto);
        return "병원 정보가 수정되었습니다.";
    }


    @GetMapping("/test/hospiinfo/del")
    public String del(@RequestParam long id) throws Exception{
        hospitalService.deleteHospitalById(id);
        return "병원 정보가 삭제되었습니다.";
    }


}
