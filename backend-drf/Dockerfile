FROM python:3.13

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chmod +x entrypoint.sh

EXPOSE 8000

CMD ["./entrypoint.sh"]