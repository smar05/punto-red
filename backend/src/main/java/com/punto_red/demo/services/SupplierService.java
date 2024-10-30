package com.punto_red.demo.services;

import com.punto_red.demo.models.Supplier;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SupplierService {
    private static final String URL = "https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api/getSuppliers";

    public Supplier[] getSuppliers(final String token) {
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);

        final HttpEntity<String> entity = new HttpEntity<>(headers);
        final ResponseEntity<Supplier[]> response = restTemplate.exchange(URL, HttpMethod.GET, entity, Supplier[].class);

        return response.getBody();
    }
}
