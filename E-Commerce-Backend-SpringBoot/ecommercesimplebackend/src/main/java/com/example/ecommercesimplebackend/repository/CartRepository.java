package com.example.ecommercesimplebackend.repository;

import com.example.ecommercesimplebackend.entity.Cart;
import com.example.ecommercesimplebackend.entity.Register;
import com.example.ecommercesimplebackend.exception.CartNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {


    List<Cart> findAllById(int reg_id);
}
