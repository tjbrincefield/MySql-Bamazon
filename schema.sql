DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR (100) NULL,
  price DECIMAL (4,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ping Pong Table", "Toys", 10.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bucket", "Cleaning Supplies", 2.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dodge Ball", "Toys", 5.25, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dart Board", "Toys", 15.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hammock", "Home Goods", 25.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rain Boots", "Shoes", 29.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kite", "Toys", 10.00, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fuzzy Dice", "Toys", 3.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yo-Yo", "Toys", 1.39, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Slinky", "Toys", 7.69, 23);

