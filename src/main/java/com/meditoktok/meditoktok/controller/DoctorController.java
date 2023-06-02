package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Doctor;
import com.meditoktok.meditoktok.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    DoctorService doctorService;

    @GetMapping("/find/doctor")
    public List<Doctor> findbyHospiId(@RequestParam long hosp) {
        return doctorService.getDoctorsByHospId(hosp);

    }

    @PostMapping("/api/saveDoctorData")
    public ResponseEntity<String> saveDoctorData(@RequestBody DoctorJoinDto doctorData) {
        // doctorData 객체를 사용하여 의사 정보를 저장하는 로직을 구현합니다.
        // hospiId와 doctors 배열을 따로 처리할 수 있습니다.

        Long hospiId = doctorData.getHospiId();
        System.out.println("hospiId" + hospiId);
//        doctorData.getDoctors();
        List<DoctorInfo> doctors = doctorData.getDoctors();

        System.out.println("Name" + doctors.get(0).getName());


//        doctors.setDepartment(doctorData.getDoctors().get(0).getDepartment());
//        System.out.println(doctors.getDepartment());
//        doctorData.getDoctors();
//        System.out.println("doctors" + doctorData.getDoctors().get(0).getDoctorDepartment());

        // 의사 정보 저장 로직 구현
        for (DoctorInfo doc : doctors) {
            Doctor tmp = new Doctor();
            tmp.setDoctorName(doc.getName());
            tmp.setDoctorDepartment(doc.getDepartment());
            tmp.setHospiId(hospiId);
            doctorService.firstSave(tmp);
        }
        return ResponseEntity.ok("의사 정보가 저장되었습니다.");
    }
}
