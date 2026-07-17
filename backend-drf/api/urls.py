from django.urls import path
from .views import TestMessageView

urlpatterns = [
    path('testMessageView/', TestMessageView.as_view(), name='test_message'),
]