package com.punto_red.demo.controllers;

import com.punto_red.demo.entities.Transaction;
import com.punto_red.demo.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TransactionsController {
    @Autowired
    private final TransactionRepository transactionRepository;

    public TransactionsController(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @GetMapping("/api/transactions")
    public ResponseEntity<List<Transaction>> getTransactions(@RequestParam String cellPhone) {
        List<Transaction> transactions = transactionRepository.findByCellPhone(cellPhone);
        return ResponseEntity.ok(transactions);
    }
}
