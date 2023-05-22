package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Admin;
import com.meditoktok.meditoktok.domain.Doctor;
import com.meditoktok.meditoktok.domain.Hospital;
import com.meditoktok.meditoktok.service.AdminService;
import com.meditoktok.meditoktok.service.DoctorService;
import com.meditoktok.meditoktok.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class AdminController {

    @Autowired
    AdminService adminService;
    @Autowired
    HospitalService hospitalService;
@Autowired
DoctorService doctorService;
    /**
     * 회원가입
     */

    @PostMapping("/signup/admain")
    public String signup(@RequestBody AdminJoinDto adminJoinDto) {
        try {


            HospiDto hospiDto = new HospiDto();
//            hospiDto.set(admin.getId());
            hospiDto.setHospName(adminJoinDto.getHospName());
            hospiDto.setDepartment(adminJoinDto.getDepartment());
            hospiDto.setMedicalStaffName(adminJoinDto.getMedicalStaffName());
            hospiDto.setOperatingHours(adminJoinDto.getOperatingHours());
            hospiDto.setAddress(adminJoinDto.getAddress());
            hospiDto.setTell(adminJoinDto.getTell());
            hospiDto.setUrl(adminJoinDto.getUrl());


            Long h = hospitalService.firstSave(hospiDto).getId();


            Admin admin = new Admin();
            admin.setAccount(adminJoinDto.getAccount());
            admin.setPw(adminJoinDto.getPw());
            admin.setEmail(adminJoinDto.getEmail());
            admin.setPhoneNumber(adminJoinDto.getPhoneNumber());
            admin.setName(adminJoinDto.getName());
            admin.setBirth(adminJoinDto.getBirth());
            admin.setIsAdmin(adminJoinDto.getAdmin());
            admin.setMailAgree(adminJoinDto.getMailAgree());
            admin.setHospiId(h);
             adminService.signup(admin);



            List<Doctor> doctors = adminJoinDto.getDoctorList();
            for (Doctor temp : doctors) {
                Doctor doctor = new Doctor();
                doctor.setDoctorName(temp.getDoctorName());
                doctor.setDoctorDepartment(temp.getDoctorDepartment());
                doctor.setHospiId(h);
                doctorService.firstSave(doctor);
            }


            // 테이블생성 쿼리 병원정보 불러와서 DB에 저장하는 -> 바로 api로 요청

            return "회원가입이 완료되었습니다.";
        } catch (Exception e) {
            return e.getMessage();
        }
    }


    /**
     * 로그인
     */
    @PostMapping("/login/admin")
    public String login(@RequestBody UserLoginRequest loginRequest) {
        try {
            Admin admin = adminService.login(loginRequest.getAccount(), loginRequest.getPw());
            return admin.getName() + "님 환영합니다.";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    /**
     * 계정찾기
     */
    @PostMapping("/findAccount/admin")
    public String findAccount(@RequestBody UserFindAccount userFindAccount) {
        try {
            Admin admin = adminService.findAccount(userFindAccount.getName(), userFindAccount.getBirth(), userFindAccount.getEmail());
            return admin.getAccount() + "입니다.";
        } catch (Exception e) {
            return e.getMessage();
        }
    }


}
