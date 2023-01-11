package com.example.ecommercesimplebackend.service;

import com.example.ecommercesimplebackend.entity.OrderItems;

import java.util.List;

public interface IOrderItemsService {
    OrderItems saveOrderItems(OrderItems orderItems);


    List<OrderItems> getallorderitemsCart();
}
