create database solctext
go
use solctext
go ----------------------------------------------
create table user_types(
id int identity(1,1),
user_type varchar (30) primary key
)
go ----------------------------------------------
insert into user_types (user_type) values ('empresa'), ('taller'), ('administrador')
go ----------------------------------------------
create table users(
id int primary key identity(1,1),
company_name varchar(30),
rut varchar (9),
u_address  varchar(30),
email varchar(30),
phone_number varchar(15),
user_type varchar (30) foreign key references user_types
)
go ----------------------------------------------
create table managers(
id_user int foreign key references users,
manager_name varchar (50)
)
go ----------------------------------------------
create table machine_types(
id_type int identity(1,1) primary key,
machine_type varchar(30)
)
go ----------------------------------------------
insert into machine_types (machine_type) values ('medias'),('zapatos'),('jeans'),('camisas'),('busos')
go ----------------------------------------------
create table machines(
id_machine int primary key identity(1,1),
id_type int foreign key references machine_types
)
go ----------------------------------------------
create table d_users_machines(
id_user int foreign key references users,
id_machine int foreign key references machines,
amount int null
)
go ----------------------------------------------
create table requests(
id_request int primary key identity(1,1),
request_type varchar (30) null
)
go ----------------------------------------------
create table d_requests_users(
id int identity (1,1) primary key,
id_request int foreign key references requests,
id_user int foreign key references users,
record_date date not null,
advancement_date date null,
delivery_date date not null,
size varchar(5),
amount int,
color varchar(10)
)
go ----------------------------------------------
create table ratings(
id_rating int primary key identity(1,1),
service_status varchar(30),
recommendations nvarchar(500)
)
go ----------------------------------------------
create table tbl_d_(
id int identity (1,1) primary key,
id_rating int foreign key references ratings,
id_user int foreign key references users,
id_request int foreign key references requests,
)

