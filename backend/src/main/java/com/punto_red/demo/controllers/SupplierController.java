package com.punto_red.demo.controllers;

import com.punto_red.demo.models.Supplier;
import com.punto_red.demo.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SupplierController {

    @Autowired
    private final SupplierService supplierService;

    public SupplierController(final SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @GetMapping("/api/suppliers")
    public Supplier[] getSuppliers(@RequestHeader("Authorization") String token) {
        return supplierService.getSuppliers(token.replace("Bearer ", ""));
    }
}