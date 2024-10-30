package com.punto_red.demo.repositories;

import com.punto_red.demo.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByCellPhone(String cellPhone);
}
