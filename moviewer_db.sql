PGDMP  0                    |            Moviewer_db    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16422    Moviewer_db    DATABASE     �   CREATE DATABASE "Moviewer_db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "Moviewer_db";
                postgres    false            �            1259    16424    pelicula    TABLE     �   CREATE TABLE public.pelicula (
    nombre text,
    costo_de_creacion money,
    genero text,
    fecha_de_lanzamiento date,
    id integer NOT NULL
);
    DROP TABLE public.pelicula;
       public         heap    postgres    false            �            1259    16456    pelicula_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pelicula_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.pelicula_id_seq;
       public          postgres    false    215            �           0    0    pelicula_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.pelicula_id_seq OWNED BY public.pelicula.id;
          public          postgres    false    216            P           2604    16457    pelicula id    DEFAULT     j   ALTER TABLE ONLY public.pelicula ALTER COLUMN id SET DEFAULT nextval('public.pelicula_id_seq'::regclass);
 :   ALTER TABLE public.pelicula ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �          0    16424    pelicula 
   TABLE DATA           _   COPY public.pelicula (nombre, costo_de_creacion, genero, fecha_de_lanzamiento, id) FROM stdin;
    public          postgres    false    215   �
       �           0    0    pelicula_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.pelicula_id_seq', 23, true);
          public          postgres    false    216            R           2606    16459    pelicula pelicula_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.pelicula
    ADD CONSTRAINT pelicula_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.pelicula DROP CONSTRAINT pelicula_pkey;
       public            postgres    false    215            �   �   x�]�1N1E��)| ��ML�tQV�@JAI32��h��1+�rN�I�ґ�w�������}��2���!����|}Cҙ߅  F�[���/ԨBx����%	���$Z�Y�|p!��N<ky��#ۣ�K�/�C���/\�G����L��~���6f�R��@uR�t���t�L�f=K�|Uə���.<B4o�1���G�     