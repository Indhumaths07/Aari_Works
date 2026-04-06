package com.aariworks.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aariworks.backend.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}