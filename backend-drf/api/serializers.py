from rest_framework import serializers
from .models import TestMessage

class TestMessageSErializer(serializers.ModelSerializer):
    class Meta:
        model = TestMessage
        fields = '__all__'