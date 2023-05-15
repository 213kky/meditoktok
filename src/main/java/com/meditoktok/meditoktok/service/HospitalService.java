package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.controller.HosDto;
import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.domain.Reservation;
import com.meditoktok.meditoktok.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class HospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

//    public Hospital test(Long id){
//        Optional<Hospital> byHospName = hospitalRepository.findById(id);
//        return byHospName.get();
//    }

    /**
     * 임시로 병원이름 주소 전화번호로
     * 병원 테이블생성  관리는 FE에서  true false 정보를 기반으로 false일때 테이블생성 true 일때 업데이트
     */
    public String createHospital(HosDto dto) {
//        hospitalRepository.findByTell()
//        // 본격적인 데이터저장 전, validation 과정 필요   입력하지 않은 데이터 체크
//        if (hospital.getHospName() == null || hospital.getAddress() == null || hospital.getTell() == null) {
//            throw new IllegalArgumentException("예약 정보가 올바르지 않습니다.");
//        }
//        return hospitalRepository.save(hospital);
        Hospital hos = new Hospital();
        hos.setHospName(dto.getHospName());
        hos.setDepartment(dto.getDepartment());
        hos.setTell(dto.getTell());
        hos.setAddress(dto.getAddress());
        hos.setMedicalStaffName(dto.getMedicalStaffName());
        hos.setNotice(dto.getNotice());
        hos.setOperatingHours(dto.getOperatingHours());
        hos.setUrl(dto.getUrl());
        return "병원정보 생성";

    }

//    public Hospital


    // DB에서 전화번호로 찾아서 객체 반환
    public Optional<Hospital> findHospital(String tell) {
        Optional<Hospital> hos = hospitalRepository.findByTell(tell);
        if (hos.isPresent()) {
            return hos;
        }
        throw new IllegalArgumentException("해당 전화번호로 등록된 병원이 없습니다.");
    }


    /**
     * 임시로 병원이름 주소 전화번호로
     * 병원 테이블생성후    관리는 FE에서  true false 정보를 기반으로
     */
    public Hospital updateHospital(Long id, Hospital hospital) {
        Hospital updatedHospital = hospitalRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("저장된 병원 정보가 존재하지 않습니다."));
        // 변경된 내용들
        if (hospital.getHospName() != updatedHospital.getHospName()) {
            updatedHospital.setHospName(hospital.getHospName());
        }
        if (hospital.getAddress() != updatedHospital.getAddress()) {
            updatedHospital.setAddress(hospital.getAddress());
        }
        if (hospital.getTell() != updatedHospital.getTell()) {
            updatedHospital.setTell(hospital.getTell());
        }


        return hospitalRepository.save(updatedHospital);
    }


}

