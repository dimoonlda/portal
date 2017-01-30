CREATE TABLE public.device_types (
  title CHARACTER VARYING(255) NOT NULL,
  id SERIAL PRIMARY KEY
);

CREATE TABLE public.device_brands (
  title CHARACTER VARYING(255) NOT NULL,
  id SERIAL PRIMARY KEY
);

CREATE TABLE public.devices (
  type_id int4 NOT NULL,
  model varchar(255) NOT NULL,
  brand_id int4 NOT NULL,
  dateofmanufacturing date,
  url varchar(1024),
  id bigserial PRIMARY KEY,
  CONSTRAINT devices_device_brands_id_fk FOREIGN KEY (brand_id) REFERENCES public.device_brands(id) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT devices_device_types_id_fk FOREIGN KEY (type_id) REFERENCES public.device_types(id) ON DELETE SET NULL ON UPDATE CASCADE
);
