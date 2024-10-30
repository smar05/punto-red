package com.punto_red.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "transactions")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cell_phone")
    private String cellPhone;

    @Column(name = "value")
    private int value;

    @Column(name = "supplier_id")
    private String supplierId;

    @Column(name = "transactional_id")
    private String transactionalId;

    @Column(name = "created_at")
    private java.sql.Timestamp createdAt;
}
