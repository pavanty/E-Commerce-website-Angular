package com.example.ecommercesimplebackend.service;


import com.example.ecommercesimplebackend.entity.Cart;
import com.example.ecommercesimplebackend.entity.Register;

import java.util.List;
import java.util.Optional;

public interface ICartService {


    Cart saveCart(int reg_id, Cart cart);


    List<Cart> showallcart();


    Optional<Cart> showallcartbyregid(int reg_id);


    Cart deletebyid(int id);


    Cart deleteallbyid(int reg_id);

}
