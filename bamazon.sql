DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
   item_id INT AUTO_INCREMENT NOT NULL,
   product_name VARCHAR(255) NOT NULL,
   department_name VARCHAR(255) NOT NULL,
   price DECIMAL(10,2) NOT NULL,
   stock_quantity INT NOT NULL,
   PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES 
("mustard", "condiments", 2.00, 27),
("roast beef", "meats", 6.49, 118),
("pickles", "vegetables", 0.70, 65),
("wheat", "breads", 3.00, 116),
("onions", "vegetables", 0.85, 137),
("mayonnaise", "condiments", 1.95, 31),
("turkey", "meats", 5.99, 124), 
("tomatoes", "vegetables", 0.90, 71),
("dutch crunch", "breads", 3.25, 101);