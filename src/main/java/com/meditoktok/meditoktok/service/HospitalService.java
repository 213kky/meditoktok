package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.controller.HospiDto;
import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

//    public Hospital test(Long id){
//        Optional<Hospital> byHospName = hospitalRepository.findById(id);
//        return byHospName.get();
//    }

    public Hospital firstSave(HospiDto dto) throws IllegalArgumentException {
        // 병원 정보 저장

        Hospital hospital = new Hospital();
        hospital.setHospName(dto.getHospName());
        hospital.setDepartment(dto.getDepartment());
        hospital.setMedicalStaffName(dto.getMedicalStaffName());
        hospital.setOperatingHours(dto.getOperatingHours());
        hospital.setAddress(dto.getAddress());
        hospital.setTell(dto.getTell());
        hospital.setUrl(dto.getUrl());
        hospital.setYkiho(dto.getYkiho());

        return hospitalRepository.save(hospital);
    }
    public Hospital getHospitalByYkiho(String ykiho) throws  Exception {
        Optional<Hospital> optionalHospital = Optional.ofNullable(hospitalRepository.findByYkiho(ykiho));
        if (optionalHospital.isPresent()) {
            return optionalHospital.get();
        } else {
            throw new Exception("병원을 찾을 수 없습니다");
        }
    }
    public Hospital getHospitalById(Long id) throws Exception {
        // ID로 병원 정보 조회
        Optional<Hospital> optionalHospital = hospitalRepository.findById(id);
        if (optionalHospital.isPresent()) {
            return optionalHospital.get();
        } else {
            throw new Exception("병원을 찾을 수 없습니다");
        }
    }

    public Hospital updateHospital(HospiDto dto) throws Exception {
        // 병원 정보 수정
//        if (hospital.getId() == null) {
//            throw new IllegalArgumentException("Hospital ID cannot be null");
//        }
//        Optional<Hospital> optionalHospital = hospitalRepository.findById(hospital.getId());
//        if (optionalHospital.isPresent()) {
//            return hospitalRepository.save(hospital);
//        } else {
//            throw new Exception("병원을 찾을 수 없습니다");
//        }

        if (dto.getId() == null) {
            throw new IllegalArgumentException("병원 고유값을 입력하지 않아 병원을 찾을 수 없습니다");
        }
        Optional<Hospital> optionalHospital = hospitalRepository.findById(dto.getId());
        if (optionalHospital.isPresent()) {
            Hospital hospital = optionalHospital.get();
            hospital.setHospName(dto.getHospName());
            hospital.setDepartment(dto.getDepartment());
            hospital.setMedicalStaffName(dto.getMedicalStaffName());
            hospital.setOperatingHours(dto.getOperatingHours());
            hospital.setAddress(dto.getAddress());
            hospital.setTell(dto.getTell());
            hospital.setUrl(dto.getUrl());
            hospital.setNotes(dto.getNotes());
            return hospitalRepository.save(hospital);
        } else {
            throw new Exception("병원을 찾을 수 없습니다");
        }
    }

    public void deleteHospitalById(Long id) throws Exception {
        // ID로 병원 정보 삭제
        Optional<Hospital> optionalHospital = hospitalRepository.findById(id);
        if (optionalHospital.isPresent()) {
            hospitalRepository.deleteById(id);
        } else {
            throw new Exception("병원을 찾을 수 없습니다");
        }
    }

//    public Optional<Hospital> getHospitalByHospNameAndAddressAndTellAndUrl(String a, String b,String c,String d)throws Exception{
//        Optional<Hospital> optionalHospital = Optional.ofNullable(hospitalRepository.findByHospNameAndAddressAndTellAndUrl(a, b, c, d));
//        if (optionalHospital.isPresent()) {
//            return optionalHospital;
//        } else {
//            throw new Exception("병원을 찾을 수 없습니다");
//        }
//    }

}
