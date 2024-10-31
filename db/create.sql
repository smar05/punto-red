CREATE DATABASE puntored;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    cell_phone VARCHAR(10) NOT NULL,
    value INT NOT NULL,
    supplier_id VARCHAR(10) NOT NULL,
    transactional_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);