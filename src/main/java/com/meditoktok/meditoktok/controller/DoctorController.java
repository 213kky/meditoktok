package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Doctor;
import com.meditoktok.meditoktok.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    DoctorService doctorService;

    @GetMapping("/find/doctor")
    public List<Doctor> findbyHospiId(@RequestParam long hosp) {
        return doctorService.getDoctorsByHospId(hosp);

    }
}
