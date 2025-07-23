CREATE DATABASE IF NOT EXISTS test_ecommercedb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE test_ecommercedb;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  price DECIMAL(10,2),
  discount DECIMAL(10,2),
  review_count INT,
  image_url TEXT
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO products (name, price, discount, review_count, image_url) VALUES
('White round neck t-shirt', 299.00, 50.00, 125, 'https://example.com/images/shirt-white.jpg'),
('Men jeans', 899.00, 100.00, 88, 'https://example.com/images/jeans-men.jpg'),
('fashion sneakers', 1290.00, 200.00, 240, 'https://example.com/images/sneakers.jpg'),
('Graphic cap', 199.00, 20.00, 32, 'https://example.com/images/cap.jpg'),
('Shoulder bag', 599.00, 150.00, 59, 'https://example.com/images/bag.jpg');