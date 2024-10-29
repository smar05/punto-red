package com.punto_red.demo.controllers;

import com.punto_red.demo.models.PurchaseRequest;
import com.punto_red.demo.models.PurchaseResponse;
import com.punto_red.demo.services.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public PurchaseResponse buy(@RequestHeader("Authorization") String token, @RequestBody PurchaseRequest purchaseRequest) {
        return purchaseService.buy(purchaseRequest, token.replace("Bearer ", ""));
    }
}
