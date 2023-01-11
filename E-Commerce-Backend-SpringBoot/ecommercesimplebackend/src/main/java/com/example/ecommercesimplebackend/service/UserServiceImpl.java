package com.example.ecommercesimplebackend.service;

import com.example.ecommercesimplebackend.entity.Register;
import com.example.ecommercesimplebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserServiceImpl  implements  IuserService{

    @Autowired
     UserRepository userRepository;
    @Override
    public Register saveUser(Register register) {
        return userRepository.save(register);
    }

    @Override
    public boolean login(String email, String password) {
        Optional<Register>opt=userRepository.findByemailAndPassword(email,password);
        if(opt.isPresent()){
            return true;
        }
        return false;
    }

    @Override
    public Register updateRegister(Integer reg_id, Register register) {
        Register e1= userRepository.findById(reg_id).get();

        if(Objects.nonNull(register.getName())&& !"".equalsIgnoreCase(register.getName())){
            e1.setName(register.getName());
        }
//        if(Objects.nonNull(register.getEmail())&&!"".equalsIgnoreCase(register.getEmail())){
//            e1.setEmail(register.getEmail());
//        }
//        if(Objects.nonNull(register.getPassword())&&!"".equalsIgnoreCase(register.getPassword())){
//            e1.setPassword(register.getPassword());
//        }
//        if(Objects.nonNull(register.getEmail())&&!"".equalsIgnoreCase(register.getEmail())){
//            e1.setEmail(register.getEmail());
//        }
        if(Objects.nonNull(register.getGender())&&!"".equalsIgnoreCase(register.getGender())){
            e1.setGender(register.getGender());
        }
        if(Objects.nonNull(register.getDate())&&!"".equalsIgnoreCase(register.getDate())){
            e1.setDate(register.getDate());

        }    if(Objects.nonNull(register.getDescription())&&!"".equalsIgnoreCase(register.getDescription())){
            e1.setDescription(register.getDescription());
        }
        if(Objects.nonNull(register.getPhonenumber())&&!"".equalsIgnoreCase(register.getPhonenumber())){
            e1.setPhonenumber(register.getPhonenumber());
        }
        if(Objects.nonNull(register.getAreaofinterest())&&!"".equalsIgnoreCase(register.getAreaofinterest())){
            e1.setAreaofinterest(register.getAreaofinterest());
        }
//        if(Objects.nonNull(register.getFile())&&!"".equalsIgnoreCase(register.getFile())){
//            e1.setFile(register.getFile());
//
//        }

//        if(Objects.nonNull(register.getEducation12())&&!"".equalsIgnoreCase(register.getEducation12())){
//            e1.setEducation12(register.getEducation12());
//        }
//        if(Objects.nonNull(register.getEducationdegree())&&!"".equalsIgnoreCase(register.getEducationdegree())){
//            e1.setEducationdegree(register.getEducationdegree());
//        }


        return  userRepository.save(e1);

    }




    @Override
    public List<Register> showallregistration() {
        return userRepository.findAll();
    }

    @Override
    public Optional<Register> getregisterbyid(Integer reg_id) {
        return userRepository.findById(reg_id);
    }

//    @Override
//    public Register updatebyregid(Integer reg_id, Register register) {
//
//        Register  reg1=userRepository.findById(reg_id).get();
//
//        if(Objects.nonNull(register.getName())&& !"".equalsIgnoreCase(register.getName())){
//            reg1.setName(register.getName());
//        }
//        return userRepository.save(reg1);
//    }
}
