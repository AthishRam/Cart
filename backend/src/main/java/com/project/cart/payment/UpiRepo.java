package com.project.cart.payment;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UpiRepo extends JpaRepository<Upi, String> {
}