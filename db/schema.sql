drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers(
    id int auto_increment not null primary key,
    burger_name varchar(100) not null,
    devoured BOOLEAN
);