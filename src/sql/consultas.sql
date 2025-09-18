-- CREATE DATABASE node_mvc;
USE node_mvc;
 CREATE TABLE usuarios(
    id INT AUTO_INCREMENT,
    nombre VARCHAR(200),
    email VARCHAR(100),
    telefono VARCHAR(50),
    PRIMARY KEY(id)
)Engine = InnoDB;

INSERT INTO usuarios (nombre, email, telefono) VALUES ('Juan Pérez', 'juan.perez@example.com', '555-1234'), ('María García', 'maria.garcia@example.com', '555-5678'), ('Carlos López', 'carlos.lopez@example.com', '555-9012'), ('Ana Martínez', 'ana.martinez@example.com', '555-3456'), ('José Rodríguez', 'jose.rodriguez@example.com', '555-7890');