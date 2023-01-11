package com.example.ecommercesimplebackend.controller;


import com.example.ecommercesimplebackend.entity.OrderItems;
import com.example.ecommercesimplebackend.repository.OrderItemsRepository;
import com.example.ecommercesimplebackend.service.IOrderItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(value = "/orderitems")
@CrossOrigin(value = "*")
public class OrderItemsController {
    @Autowired
    private IOrderItemsService iOrderItemsService;
    @Autowired
    private OrderItemsRepository orderItemsRepository;

    @PostMapping(value="/orderitems")
    public ResponseEntity<OrderItems> saveallorderitems( @RequestBody OrderItems orderItems){
        return new ResponseEntity<OrderItems>(iOrderItemsService.saveOrderItems(orderItems), HttpStatus.CREATED);
    }

    @GetMapping(value = "/orderitems")
    public ResponseEntity<List<OrderItems>> getallorderitemsCart(){
        return new ResponseEntity<List<OrderItems>> (iOrderItemsService.getallorderitemsCart(), HttpStatus.OK);
    }
}
