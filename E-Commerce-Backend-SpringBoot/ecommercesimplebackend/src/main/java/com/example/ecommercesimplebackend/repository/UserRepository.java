package com.example.ecommercesimplebackend.repository;

import com.example.ecommercesimplebackend.entity.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<Register,Integer> {
    public Optional<Register> findByemailAndPassword(String email, String password);
    Register findByemail(String email);
    Optional<Register> findById(Integer reg_id);

}
