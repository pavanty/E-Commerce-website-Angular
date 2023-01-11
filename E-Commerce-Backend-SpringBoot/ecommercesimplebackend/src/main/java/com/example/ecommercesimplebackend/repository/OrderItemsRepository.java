package com.example.ecommercesimplebackend.repository;

import com.example.ecommercesimplebackend.entity.OrderItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemsRepository extends JpaRepository<OrderItems,Integer> {
}
