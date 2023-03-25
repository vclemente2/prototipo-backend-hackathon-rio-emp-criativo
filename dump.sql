drop table if exists companies;
drop table if exists events;

create table companies (
  id serial primary key,
  nome text not null,
  cnpj text not null unique,
  segmento text not null,
  senha text not null
 );
 
 create table events (
   id serial primary key,
   company_id integer references companies(id) not null,
   nome text not null,
   preco integer not null,
   data date not null,
   hora timetz not null,
   publico text not null,
   cep text not null,
   logradouro text not null,
   numero text not null,
   complemento text,
   bairro text not null,
   cidade text not null,
   estado text not null
);   