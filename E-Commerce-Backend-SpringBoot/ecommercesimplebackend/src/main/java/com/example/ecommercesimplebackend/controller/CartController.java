package com.example.ecommercesimplebackend.controller;

import com.example.ecommercesimplebackend.entity.Cart;
import com.example.ecommercesimplebackend.entity.Register;
import com.example.ecommercesimplebackend.repository.CartRepository;
import com.example.ecommercesimplebackend.service.ICartService;
import com.example.ecommercesimplebackend.service.IuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/cart")
@CrossOrigin(value = "*")
public class CartController {
    @Autowired
    private CartRepository cartRepository ;

    @Autowired
    private ICartService cartService ;


    @Autowired
    private IuserService iuserService;

    @PostMapping(value="/register/{reg_id}")
    public ResponseEntity<Cart> saveCart( @PathVariable int  reg_id, @RequestBody Cart cart){
        return new ResponseEntity<Cart>(cartService.saveCart(reg_id,cart), HttpStatus.CREATED);
    }
    @GetMapping(value="/showallcart")
    public ResponseEntity<List<Cart>> showallcart(){
        List<Cart> allCart=cartService.showallcart();
        return  new ResponseEntity<List<Cart>>(allCart,HttpStatus.OK);
    }
    @DeleteMapping(value="/deletebyallbyid/{reg_id}")
    public  Cart  deleteallbyid(@PathVariable int reg_id) {
        return  cartService.deleteallbyid(reg_id);
    }


    @DeleteMapping(value="/deletebyid/{id}")
    public ResponseEntity<String> deletebyid( @PathVariable int id) {
        cartService.deletebyid(id);
        String msg = " Cart with number: Deleted Successfully";
        return new ResponseEntity<String>(msg, HttpStatus.OK);


    }






    }
