package com.meditoktok.meditoktok.service;


import com.meditoktok.meditoktok.domain.Doctor;
import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.domain.Reservation;
import com.meditoktok.meditoktok.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    // user pk값으로 예약 조회
    public List<Doctor> getDoctorsByHospId(Long hospId) {
        List<Doctor> doctor = doctorRepository.findByHospiId(hospId);
        if (doctor == null || doctor.isEmpty()) {
            throw new RuntimeException("입력한 user id의 결과값이 없습니다: " + hospId);
        }
        return doctor;
    }
}
