#!/bin/sh

echo "waiting for MySQL..."

while ! nc -z db 5432; do
    sleep 1
done

echo "MySQL is ready."

python manage.py migrate  --noinput
python manage.py collectstatic --noinput

exec gunicorn config.wsgi:application --bind 0.0.0.0:8000