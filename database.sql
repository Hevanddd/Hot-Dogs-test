CREATE DATABASE testHotDogs;

CREATE TABLE hotDogs(
    hotDog_id SERIAL PRIMARY KEY,
    img VARCHAR(255),
    title VARCHAR(255),
    price VARCHAR(255),
    description VARCHAR(255)
);