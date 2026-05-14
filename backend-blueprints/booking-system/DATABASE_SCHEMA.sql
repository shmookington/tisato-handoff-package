-- Example Postgres schema for a production booking system.
-- Review with the client's backend provider before running in production.

create table bookings (
  id text primary key,
  status text not null default 'pending',
  source text not null default 'website',
  passenger_name text not null,
  passenger_phone text not null,
  passenger_email text not null,
  mobility_needs text,
  pickup_address text not null,
  destination_address text not null,
  ride_date date not null,
  ride_time time not null,
  trip_type text not null,
  insurance text,
  notes text,
  sms_consent boolean not null default false,
  email_consent boolean not null default true,
  consent_captured_at timestamptz,
  internal_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by text
);

create index bookings_status_idx on bookings(status);
create index bookings_ride_date_idx on bookings(ride_date);
create index bookings_created_at_idx on bookings(created_at desc);

