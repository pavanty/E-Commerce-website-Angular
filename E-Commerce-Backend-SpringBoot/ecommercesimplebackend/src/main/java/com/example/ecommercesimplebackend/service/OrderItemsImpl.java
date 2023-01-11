package com.example.ecommercesimplebackend.service;


import com.example.ecommercesimplebackend.entity.OrderItems;
import com.example.ecommercesimplebackend.repository.OrderItemsRepository;
import com.example.ecommercesimplebackend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemsImpl implements IOrderItemsService {
    @Autowired
    private OrderItemsRepository orderItemsRepository;
//    @Autowired
//    UserRepository userRepository;

    @Override
    public OrderItems saveOrderItems(OrderItems orderItems) {
        return orderItemsRepository.save(orderItems);
    }

    @Override
    public List<OrderItems> getallorderitemsCart() {
        return orderItemsRepository.findAll();
    }


}