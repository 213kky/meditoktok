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

//    @PostMapping("/test11")
//    public String test(@RequestBody HospitalTest hospitalTest) {

//        Optional<Hospital> byHospName = Optional.ofNullable(hospitalRepository.findByHospName(hospitalTest.getId()));
//        if(byHospName.isPresent()){
//            return byHospName.get().getHospName();
//        }
//        else {
//            throw new RuntimeException("정보에 해당하는 아이디가 없습니다.");
//        }
//        Hospital test = hospitalService.test(hospitalTest.getId());
//        return test.getHospName();
//        return hospitalTest.toString();
//    }
    @PostMapping("/test/hospiinfo/save")
    public String firstSave(@RequestBody HospiDto dto){
//
        hospitalService.firstSave(dto);
        return "첫 병원정보 저장";
    }


    @PostMapping("/test/hospiinfo/change")
    public String change(@RequestBody HospiDto dto) throws Exception{
        hospitalService.updateHospital(dto);
        return "병원 정보가 수정되었습니다.";
    }


    @GetMapping("/test/hospiinfo/del")
    public String del(@RequestParam long id) throws Exception{
        hospitalService.deleteHospitalById(id);
        return "병원 정보가 삭제되었습니다.";
    }


}
