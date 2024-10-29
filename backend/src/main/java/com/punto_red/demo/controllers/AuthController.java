package com.punto_red.demo.controllers;

import com.punto_red.demo.models.AuthRequest;
import com.punto_red.demo.models.AuthResponse;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AuthController {

    private final String AUTH_URL = "https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api/auth";
    private final String API_KEY = "mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1ifIyWDvwGApJ8WUM8nHVrdSkN";

    @PostMapping("/api/auth")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody final AuthRequest authRequest) {
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", API_KEY);
        headers.set("Content-Type", "application/json");

        final HttpEntity<AuthRequest> requestEntity = new HttpEntity<>(authRequest, headers);

        final ResponseEntity<AuthResponse> response = restTemplate.exchange(AUTH_URL, HttpMethod.POST, requestEntity, AuthResponse.class);

        return ResponseEntity.ok(response.getBody());
    }
}