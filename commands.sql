create table blogs (
    id serial primary key,
    author varchar(255) not null,
    url varchar(512) not null,
    likes integer default 0
);

insert into blogs (author, url, likes) values ('Carlos Cintero', 'https://example.com', 12);

insert into blogs (author, url, likes) values ('Pedro Pérez', 'https://example2.com', 15);