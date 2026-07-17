# Test Project made for deployment testing
My Deployment Journey (Learning and Deploying)

## L1 : Development Vs Production
### Development :
-> http://127.0.0.1:8000 or htpp://localhost:5173.... (communicating with our own computer [offline])

### Production :
-> also a computer thats always online, 24/7, has a public IP, build to serve many users simultaneously


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