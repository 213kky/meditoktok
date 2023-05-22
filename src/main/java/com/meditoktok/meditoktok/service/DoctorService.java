package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.controller.HospiDto;
import com.meditoktok.meditoktok.domain.Doctor;
import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {
    @Autowired
    DoctorRepository doctorRepository;

    public Doctor firstSave(Doctor temp) {
        // 병원 정보 저장

        Doctor doctor = new Doctor();
        doctor.setDoctorName(temp.getDoctorName());
        doctor.setDoctorDepartment(temp.getDoctorDepartment());
        doctor.setHospiId(temp.getHospiId());
        return doctorRepository.save(doctor);
    }
}
