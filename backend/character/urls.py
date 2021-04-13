from django.urls import path
from . import views
from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('character', views.CharacterViewSet)
app_name = 'character'

urlpatterns = [
    path('', include(router.urls))
]
