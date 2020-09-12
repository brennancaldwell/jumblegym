DROP TABLE IF EXISTS legs;

DROP TABLE IF EXISTS upper;

DROP TABLE IF EXISTS biceps;

DROP TABLE IF EXISTS triceps;

DROP TABLE IF EXISTS shoulders;

DROP TABLE IF EXISTS abs;

CREATE TABLE legs (
  l_id SERIAL,
  name varchar(100),
  chain varchar(20),
  side varchar(10),
  PRIMARY KEY (l_id)
);

CREATE TABLE upper (
  u_id SERIAL,
  name varchar(100),
  chain varchar(20),
  side varchar(10),
  PRIMARY KEY (u_id)
);

CREATE TABLE biceps (
  b_id SERIAL,
  name varchar(100),
  side varchar(10),
  PRIMARY KEY (b_id)
);

CREATE TABLE triceps (
  t_id SERIAL,
  name varchar(100),
  side varchar(10),
  PRIMARY KEY (t_id)
);

CREATE TABLE shoulders (
  s_id SERIAL,
  name varchar(100),
  side varchar(10),
  PRIMARY KEY (s_id)
);

CREATE TABLE abs (
  a_id SERIAL,
  name varchar(100),
  chain varchar(20),
  PRIMARY KEY (a_id)
);
