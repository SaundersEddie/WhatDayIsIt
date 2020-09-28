-- Scheme for dates

DROP DATABASE IF EXISTS NationalDay_db;
CREATE DATABASE NationalDay_db;
USE NationalDay_db;

CREATE TABLE ourDays
(
    id INT NOT NULL AUTO_INCREMENT,
    day_name VARCHAR(50) NOT NULL,
    day_date DATE,
    PRIMARY KEY (id)
)