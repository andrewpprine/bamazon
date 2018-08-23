DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
   id INT NOT NULL AUTO_INCREMENT,
   item_id INT NOT NULL,
   product_name VARCHAR(255) NOT NULL,
   department_name VARCHAR(255) NOT NULL,
   price DECIMAL(10,2) NOT NULL,
   stock_quantity INT NOT NULL,
   PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES 
(11111, "mustard", "condiments", 2.00, 27),
(22222, "roast beef", "meats", 6.49, 118),
(33333, "pickles", "vegetables", 0.70, 65),
(44444, "wheat", "breads", 3.00, 116),
(55555, "onions", "vegetables", 0.85, 137),
(66666, "mayonnaise", "condiments", 1.95, 31),
(77777, "turkey", "meats", 5.99, 124), 
(88888, "tomatoes", "vegetables", 0.90, 71),
(99999, "dutch crunch", "breads", 3.25, 101);