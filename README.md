# punto-red

Este proyecto es una integración con el API de Puntored para ofrecer servicios de recargas de operadores móviles. A continuación se detallan las instrucciones para clonar, ejecutar y utilizar el backend del proyecto.

## Clonación del Repositorio

Para descargar el repositorio, utiliza el siguiente comando:

```bash
git clone https://github.com/smar05/punto-red.git
```

# Documentación del Proyecto

## Base de Datos

Este proyecto utiliza PostgreSQL como sistema de gestión de bases de datos. A continuación se detallan los pasos para acceder y utilizar la base de datos.

### Conexión a la Base de Datos

La base de datos se ha desplegado para acceso público y se puede conectar utilizando la siguiente URL:

jdbc:postgresql://dpg-csglpibqf0us739n91n0-a.oregon-postgres.render.com:5432/punto_red?user=punto_red_user&password=GFTmXoBLSGiM1uEu0CQgmKj0u77ugaqz


### Script de Creación de la Base de Datos

El script para crear la base de datos y la tabla necesaria se encuentra en el repositorio en la ruta `db/create.sql`. A continuación se muestra el contenido del script:

```sql
CREATE DATABASE puntored;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    cell_phone VARCHAR(10) NOT NULL,
    value INT NOT NULL,
    supplier_id VARCHAR(10) NOT NULL,
    transactional_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Descripción de la Tabla transactions
La tabla transactions almacena la información de las transacciones realizadas. A continuación se describen los campos de la tabla:

id: Identificador único de la transacción (tipo: SERIAL).
cell_phone: Número de teléfono asociado a la transacción (tipo: VARCHAR(10), no nulo).
value: Valor de la recarga realizada (tipo: INT, no nulo).
supplier_id: Identificador del proveedor de recarga (tipo: VARCHAR(10), no nulo).
transactional_id: Identificador de la transacción proporcionado por el servicio de recarga (tipo: VARCHAR(50), no nulo).
created_at: Fecha y hora en que se creó la transacción (tipo: TIMESTAMP, valor por defecto: hora actual).
Notas
Asegúrate de tener los permisos necesarios para acceder a la base de datos.
Puedes utilizar herramientas como DBeaver o cualquier cliente de PostgreSQL para conectarte y gestionar la base de datos.

## Backend

### Entorno de desarrollo

Requisitos
- Java: 17
- Maven: 3.8.1 o superior
- Spring Boot: 3.3.5

#### Ejecución del Backend
1. Accede a la carpeta del backend:

```bash
cd backend
```

2. Ejecuta los siguientes comandos para compilar y empaquetar el proyecto:

```bash
mvn install
mvn package
```

3. Para ejecutar el proyecto, puedes usar uno de los siguientes métodos:
- Ejecutar el archivo JAR directamente:
```bash
java -jar demo-0.0.1-SNAPSHOT.jar
```

- O ejecutar el proyecto con Maven:
  
```bash
mvn spring-boot:run
```
- También puedes utilizar un entorno de desarrollo como IntelliJ IDEA para ejecutar el proyecto.

El proyecto se despliega localmente en el puerto 8080.

#### Endpoints Disponibles

A continuación se detallan los endpoints disponibles en el API:

1. Autenticación
Endpoint: /api/auth
Método: POST

```bash
curl --location 'https://<url>/api/auth' \
--header 'x-api-key: mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1ifIyWDvwGApJ8WUM8nHVrdSkN' \
--header 'Content-Type: application/json' \
--data '{
"user": "user0147",
"password": "#3Q34Sh0NlDS"
}'
```

2. Obtener Proveedores
Endpoint: /api/suppliers
Método: GET

```bash
curl --location 'https://<url>/api/suppliers' \
--header 'authorization: Bearer {token}'
```

3. Comprar Recarga
Endpoint: /api/buy
Método: POST

```bash
curl --location 'https://<url>/api/buy' \
--header 'authorization: Bearer {token}' \
--header 'Content-Type: application/json' \
--data '{
"cellPhone": "3210338900",
"value": 1000,
"supplierId": "8753"
}'
```

4. Consultar Transacciones
Endpoint: /api/transactions
Método: GET

```bash
curl --location --request GET 'https://<url>/api/transactions?cellPhone=3210338900' \
--header 'Content-Type: text/plain'
```

#### Despliegue en Docker
Se ha creado una imagen Docker y se ha desplegado en un servidor público. Puedes acceder al API en la siguiente URL:

https://puntored-latest.onrender.com

# Frontend del Proyecto Puntored

Este proyecto es la interfaz de usuario desarrollada en Angular para interactuar con el API de Puntored. A continuación se detallan las instrucciones para ejecutar y compilar el frontend.

## Requisitos

- **Node.js**: v20.0.0
- **Angular**: v16

## Ejecución del Frontend
1. Accede a la carpeta del frontend:

```bash
cd frontend
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Para ejecutar el proyecto en modo desarrollo, utiliza el siguiente comando:

```bash
npm run start
```

El aplicativo se ejecutará en el puerto 4200. Puedes acceder a él en tu navegador en la siguiente URL:

http://localhost:4200

## Compilación para Producción
Si deseas compilar el proyecto para llevarlo a producción, utiliza el siguiente comando:

```bash
npm run build
```

Esto creará una carpeta dist con los archivos necesarios para el despliegue del aplicativo.

El aplicativo se desplego en un servicio de hosting en la siguiente url:

https://punto-red.netlify.app/login

## Rutas del Aplicativo
El aplicativo tiene las siguientes rutas configuradas:

- Loguearse en el sistema: /login
- Obtener los proveedores de telefonía: /suppliers
- Realizar una transacción de recarga: /buy
- Consultar las transacciones realizadas: /transactions

# Contacto

Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarme:

**Correo Electrónico:** [mantillasanchezr@gmail.com](mailto:mantillasanchezr@gmail.com)
