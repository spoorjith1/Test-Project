from django.db import models


class TestMessage(models.Model):
    message = models.CharField(max_length=255)
    image = models.ImageField(upload_to='test_images/')