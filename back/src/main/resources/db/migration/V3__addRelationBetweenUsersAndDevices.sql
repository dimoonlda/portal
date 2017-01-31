ALTER TABLE public.devices ADD user_id BIGINT;

ALTER TABLE public.devices
ADD CONSTRAINT devices_users_id_fk
FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE;