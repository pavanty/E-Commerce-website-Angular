package com.example.ecommercesimplebackend.service;

import com.example.ecommercesimplebackend.entity.Cart;
import com.example.ecommercesimplebackend.exception.CartNotFoundException;
import com.example.ecommercesimplebackend.repository.CartRepository;
import com.example.ecommercesimplebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements  ICartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    UserRepository userRepository;

    @Override

    public Cart saveCart(int reg_id, Cart cart) {
        Optional<Cart> cart1 = cartRepository.findById(cart.getId());
        cart.setRegister(userRepository.getById(reg_id));
        return cartRepository.save(cart);
    }
    @Override
    public Optional<Cart> showallcartbyregid(int reg_id) {

        return  cartRepository.findById(reg_id);
//        if (opt1.isPresent()) {
//            return opt1.get();
//        } else {
//            throw new CartNotFoundException("No cart Found");
//        }
    }

    @Override
    public Cart deletebyid(int id) {
        Optional<Cart> cart2=cartRepository.findById(id);
        if(cart2.isPresent()){
            cartRepository.deleteById(id);
        }
        else{
            throw new CartNotFoundException("vehivle is not existing");
        }
        return cart2.get();
    }

    @Override
    public Cart deleteallbyid(int reg_id) {
        List<Cart> cart1=cartRepository.findAllById(reg_id);
    if(cart1==null){
        throw new CartNotFoundException("vehivle is not existing");
    }
  cartRepository.deleteAll(cart1);
        return null;
    }




    @Override
    public List<Cart> showallcart() {
        return cartRepository.findAll();
    }




}
