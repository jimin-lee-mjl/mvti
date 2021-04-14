from django.urls import path
from . import views
from rest_framework import routers
from django.conf.urls import include

app_name = 'character'

urlpatterns = [
    path('api/', views.SentimentAnalyzeView.as_view())
]
