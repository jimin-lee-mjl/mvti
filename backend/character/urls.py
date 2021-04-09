from django.urls import path
from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
app_name = 'character'

urlpatterns = [
    path('', include(router.urls))
]
