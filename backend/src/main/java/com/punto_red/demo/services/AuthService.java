package com.punto_red.demo.services;

import com.punto_red.demo.models.AuthRequest;
import com.punto_red.demo.models.AuthResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AuthService {
    @Value("${spring.apiUrl}")
    private String apiUrl;
    private final String API_KEY = "mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1ifIyWDvwGApJ8WUM8nHVrdSkN";

    public AuthService() {
    }

    public AuthResponse authenticate(final AuthRequest authRequest){
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", API_KEY);
        headers.set("Content-Type", "application/json");

        final HttpEntity<AuthRequest> requestEntity = new HttpEntity<>(authRequest, headers);

        final ResponseEntity<AuthResponse> response = restTemplate.exchange(apiUrl + "auth", HttpMethod.POST, requestEntity, AuthResponse.class);

        return response.getBody();
    }

}
