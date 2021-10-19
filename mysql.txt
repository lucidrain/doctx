/** COMMAND **/
SELECT user,authentication_string,plugin,host FROM mysql.user; || Display mysql user list
create user 'name'@'localhost' identified by 'password'; || Create user & password
grant all privileges on *.* to 'name@localhost'; || Cấp tất cả quyền cho user
grant select, update, insert on databse.* to name@localhost; || Cấp quyền select, update, insert cho user
show privileges; || Hiển thị danh sách quyền
show grants for 'name'@'localhost'; || Hiển thị quyền cho user
revoke insert on database.* from name@localhost; || Tước quyền user 
revoke all privileges on *.* to 'name@localhost';  || Tước tất cả quyền user
drop user 'name'@'localhost';  || Xóa user

/** CONFIG **/
Change memory size import database:
/etc/php/7.4/apache2 
sudo chmod -R 777 php.ini
search upload_max_filesize = 2M
max_file_uploads = 20

/** ERROR_SOLVE **/
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)  // không thể kết nối tới local MySQL
solution 1:
sudo apt-get remove --purge mysql\*   // Xóa sql
sudo apt-get install mysql-server mysql-client // cài đặt sql
sudo mysql -u root -p  // đặt password cho tài khoản root
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password'; // tạo user với username và password
GRANT ALL PRIVILEGES ON * . * TO 'username'@'localhost'; // cấp quyền cho user
FLUSH PRIVILEGES; // lưu thay đổi
//source: 
solution 2: khi quên mật khẩu mysql
sudo mysql
SELECT user,authentication_string,plugin,host FROM mysql.user;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
// source: 
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements // Mật khẩu không phù hợp {
SHOW VARIABLES LIKE 'validate_password%'; // kiểm tra trạng thái chính sách (policy)
// gõ password theo policy
SET GLOBAL validate_password_policy=LOW; // đặt trạng thái bảo mật mật khẩu là LOW (thấp)
ERROR: #1824 - Failed to open the referenced table 'employees' {
uncheck Enable foreign key checks  // Bỏ chọn foreign key khi import database

/** SQL **/
select from where
left join, right join, join
left(city,1) // 1 first character
right(city,2) // 2 last character
distinct // unique
order by ...  ASC (DESC) // sort