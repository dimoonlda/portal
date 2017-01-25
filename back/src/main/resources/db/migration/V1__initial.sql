CREATE TABLE public.users (
  id bigserial,
  login varchar(20) NOT NULL,
  password VARCHAR DEFAULT NULL::character varying,
  firstName varchar(100),
  lastName varchar(100),
  dateOfBirth DATE,
  email varchar(255) NOT NULL,
  CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE UNIQUE INDEX idx_users_email ON public.users (email);

CREATE UNIQUE INDEX idx_users_login ON public.users (login);

CREATE INDEX idx_users_id ON public.users (id);