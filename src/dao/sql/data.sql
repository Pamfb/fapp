create table payment_methods
(
    id int unique auto_increment primary key not null,
    description varchar(50) not null,
    timestamp_created timestamp default current_timestamp,
    timestamp_updated timestamp default current_timestamp on update current_timestamp
);
create table customers
(
    id  int unique auto_increment primary key not null,
    id_payment_methods int not null,
    name varchar(30) not null,
    address varchar(100) not null,
    data_payment varchar(50),
    timestamp_created timestamp default current_timestamp,
    timestamp_updated timestamp default current_timestamp on update current_timestamp,
    constraint id_payment_methods foreign key (id_payment_methods) references payment_methods(id)
);