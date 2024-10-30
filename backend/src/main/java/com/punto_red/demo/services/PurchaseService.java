package com.punto_red.demo.services;

import com.punto_red.demo.entities.Transaction;
import com.punto_red.demo.models.PurchaseRequest;
import com.punto_red.demo.models.PurchaseResponse;
import com.punto_red.demo.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Service
public class PurchaseService {
    @Autowired
    private final TransactionRepository transactionRepository;

    private static final String URL = "https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api/buy";

    public PurchaseService(final TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public PurchaseResponse buy(final PurchaseRequest purchaseRequest, final String token) {
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        headers.set("Content-Type", "application/json");

        final HttpEntity<PurchaseRequest> entity = new HttpEntity<>(purchaseRequest, headers);
        final ResponseEntity<PurchaseResponse> response = restTemplate.exchange(URL, HttpMethod.POST, entity, PurchaseResponse.class);
        final PurchaseResponse purchaseResponse = response.getBody();

        if (purchaseResponse == null) {return null;}

        // Guardar la transacción en la base de datos
        final Transaction transaction = Transaction.builder()
                .cellPhone(purchaseResponse.getCellPhone())
                .value(purchaseResponse.getValue())
                .supplierId(purchaseRequest.getSupplierId())
                .transactionalId(purchaseResponse.getTransactionalID())
                .createdAt(new java.sql.Timestamp(System.currentTimeMillis()))
                .build();

        transactionRepository.save(transaction);

        return purchaseResponse;
    }
}