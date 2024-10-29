package com.punto_red.demo.services;

import com.punto_red.demo.models.PurchaseRequest;
import com.punto_red.demo.models.PurchaseResponse;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PurchaseService {
    private static final String URL = "https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api/buy";

    public PurchaseResponse buy(final PurchaseRequest purchaseRequest, final String token) {
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        headers.set("Content-Type", "application/json");

        final HttpEntity<PurchaseRequest> entity = new HttpEntity<>(purchaseRequest, headers);
        final ResponseEntity<PurchaseResponse> response = restTemplate.exchange(URL, HttpMethod.POST, entity, PurchaseResponse.class);

        return response.getBody();
    }
}