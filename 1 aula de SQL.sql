create database Consultorio; /* criando banco de dados */
use Consultorio; /* acessando o banco de dados */

drop database Consultorio; /* apagar banco de dados */

create table Paciente(
	pk_id_paciente int auto_increment primary key,
    nome_paciente varchar(100) not null,
    data_nasc_paciente date not null,
    cpf_paciente char(11) not null,
    genero_paciente enum('f','m','o'),
    endereco_paciente varchar(100),
    email_paciente varchar(50),
    telefone_paciente char(13)
);


insert into Paciente (nome_paciente,data_nasc_paciente,cpf_paciente,genero_paciente,endereco_paciente,email_paciente,telefone_paciente) values
 ('Weslley Becker','19891008','86767534009','m','rua azusa, 20','weslleybecker@gmail.com','5511965453423'),
 ('Will Smith','19890806','86767534009','m','rua Bel Air, 189','willsmith@gmail.com','5511965453423'),
 ('Zendaya','19890806','86767534009','m','rua Bel Air, 189','willsmith@gmail.com','5511965453423'),
 ('The Rock','19890806','86767534009','m','rua Bel Air, 189','willsmith@gmail.com','5511965453423'),
 ('Eddie Morph','19890806','86767534009','m','rua Bel Air, 189','willsmith@gmail.com','5511965453423'),
 ('The Rock','19890806','86767534009','m','rua Bel Air, 189','willsmith@gmail.com','5511965453423'),
 ('Eddie Morph','19890806','86767534009','m','rua Bel Air, 189','willsmith@gmail.com','5511965453423'),
 ('Vini Jr','19890806','86767534009','m','rua Bel Air, 189','willsmith@gmail.com','5511965453423');

describe Paciente;
select * from Paciente;

create table Dentista(
	pk_id_dentista int auto_increment primary key,
    nome_dentista varchar(100) not null,
    data_nasc_dentista date not null,
    cro_dentista char(7) not null,
    genero_dentista enum('f','m','o'),
    endereco_dentista varchar(100),
    telefone_dentista char(13)
);

insert into Dentista (nome_dentista,data_nasc_dentista,cro_dentista,genero_dentista,endereco_dentista,telefone_dentista) values 
('Paulo Ferreira','19780320','4028922','m','Rua mario costa, 71','5511945342789'),
('Fernanda Barros','19780320','4028922','m','Rua bras correa, 81','5511945342789'),
('João Paulo','19780320','4028922','m','Rua tito, 21','5511945342789');

select * from Dentista;



create table Consulta(
	pk_id_consulta int auto_increment primary key,
    local_consulta varchar(50),
    data_consulta datetime,
    descricao_consulta varchar(100)
);

insert into Consulta (local_consulta,data_consulta,descricao_consulta) values
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia'),
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia'),
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia'),
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia'),
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia'),
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia'),
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia'),
('xiquexiquebahia','2024-10-29 12:26:00','cirurgia');

select * from Consulta;





