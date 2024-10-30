package com.punto_red.demo.services;

import com.punto_red.demo.models.Supplier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SupplierService {
    @Value("${spring.apiUrl}")
    private String apiUrl;

    public Supplier[] getSuppliers(final String token) {
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);

        final HttpEntity<String> entity = new HttpEntity<>(headers);
        final ResponseEntity<Supplier[]> response = restTemplate.exchange(apiUrl + "getSuppliers ", HttpMethod.GET, entity, Supplier[].class);

        return response.getBody();
    }
}
