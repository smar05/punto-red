package com.punto_red.demo.controllers;

import com.punto_red.demo.models.PurchaseRequest;
import com.punto_red.demo.models.PurchaseResponse;
import com.punto_red.demo.services.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PurchaseController {

    @Autowired
    private final PurchaseService purchaseService;

    public PurchaseController(final PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @PostMapping("/api/buy")
    public ResponseEntity<PurchaseResponse> buy(@RequestHeader("Authorization") final String token,
                                                @RequestBody final PurchaseRequest purchaseRequest) {
        final String validationError = validatePurchaseRequest(purchaseRequest);
        if (validationError != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new PurchaseResponse(validationError, null, null, 0));
        }

        PurchaseResponse response = purchaseService.buy(purchaseRequest, token.replace("Bearer ", ""));
        return ResponseEntity.ok(response);
    }

    private String validatePurchaseRequest(final PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getCellPhone() == null || !purchaseRequest.getCellPhone().matches("3\\d{9}")) {
            return "El número de teléfono debe iniciar en '3' y tener una longitud de 10 caracteres.";
        }

        if (purchaseRequest.getValue() < 1000 || purchaseRequest.getValue() > 100000) {
            return "El valor de la transacción debe estar entre 1000 y 100000.";
        }

        if (!purchaseRequest.getCellPhone().matches("\\d{10}")) {
            return "El número de teléfono solo debe contener caracteres numéricos.";
        }

        return null;
    }
}
