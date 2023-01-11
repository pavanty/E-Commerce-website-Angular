package com.example.ecommercesimplebackend.service;

import com.example.ecommercesimplebackend.entity.Register;

import java.util.List;
import java.util.Optional;

public interface IuserService {
    Register saveUser(Register register);
   public boolean login(String email, String password);

    Register updateRegister(Integer reg_id, Register register);

    List<Register> showallregistration();

    Optional<Register> getregisterbyid(Integer reg_id);

//    Register updatebyregid(Integer reg_id, Register register);
}
