package com.punto_red.demo.controllers;

import com.punto_red.demo.models.AuthRequest;
import com.punto_red.demo.models.AuthResponse;
import com.punto_red.demo.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private final AuthService authService;

    private final String AUTH_URL = "https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api/auth";
    private final String API_KEY = "mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1ifIyWDvwGApJ8WUM8nHVrdSkN";

    public AuthController(final AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/api/auth")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody final AuthRequest authRequest) {
        final AuthResponse authResponse = authService.authenticate(authRequest);
        return ResponseEntity.ok(authResponse);
    }
}