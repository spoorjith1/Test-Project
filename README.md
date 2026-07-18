# Test Project made for deployment testing
My Deployment Journey (Learning and Deploying)

## L1 : Development Vs Production
### Development :
-> http://127.0.0.1:8000 or htpp://localhost:5173.... (communicating with our own computer [offline])

### Production :
-> also a computer thats always online, 24/7, has a public IP, build to serve many users simultaneously

<hr />

## L2 : environment variables
use python-decouple or python-environ  
create .env in main directory  

#### <u>inside .env add</u>  
SECRET_KEY=  
DEBUG=  

DB_NAME=  
DB_USER=  
DB_PASSWORD=  
DB_HOST=  
DB_PORT=  

ALLOWED_HOSTS=  
CORS_ALLOWED_ORIGINS=  

#### <u>in settings.py</u>
import os  
from pathlib import Path  
import environ  

env = environ.Env(DEBUG=(bool, False))  
env.read_env(os.path.join(BASE_DIR, '.env'))  

SECRET_KEY = env('SECRET_KEY')  
DEBUG = env.bool('DEBUG')  
ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=[])  

DATABASES = {  
    'default': {  
        'ENGINE': 'django.db.backends.mysql',  
        'NAME': env('DB_NAME'),  
        'USER': env('DB_USER'),  
        'PASSWORD': env('DB_PASSWORD'),  
        'HOST': env('DB_HOST'),  
        'PORT': env('DB_PORT'),  
    }
} 

CORS_ALLOWED_ORIGINS = env.list('CORS_ALLOWED_ORIGINS')

<hr />
<!--
## L3 : Docker
- Docker packages an application together with everything it needs to run, so it behaves consistently across different computers and servers.  
- Docker helps the project run on every device.  
- Docker creates an isolated environment with all the requirements for the project which includes(python , mysql, OS, React, env, ....)  
-->
<!--
#### Dokcer Terminology :
<u>Docker File</u>  
A text file that tells docker what to do (Ex : use python, install requirements, copy my code, run django, ...)  
Docker reads this file and creates the image  
*An text file with instructions  
-->
<!--
<u>Docker Image</u>  
A Template or Blueprint, that contains everything to run an application  
-->
<!--
<u>Docker Container</u>  
Running the instance of the image (live application)  
-->
<!--
<u>Docker Hub</u>  
Download pre-made images created by others  
-->
<!--
<u>Docker Compose</u>  
instead of running multiple containers manually start all of them together  
#### Create Dockerfile in backend main directory and add :  
FROM python:3.13  
WORKDIR /app  
COPY requirements.txt  
RUN pip install --no-cache-dir -r requirements.txt .  
COPY . .  
EXPOSE 8000  
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]  
-->
<!--
in backend terminal :  
```docker build -t test-backend .```   
-->
<!--
#### Create docker-compose.yml in main project dir and add :
-->