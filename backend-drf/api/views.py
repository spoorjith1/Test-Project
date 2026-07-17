from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import TestMessageSErializer
from .models import TestMessage


class TestMessageView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        test_message = TestMessage.objects.first()
        serializer = TestMessageSErializer(test_message)
        return Response(serializer.data)