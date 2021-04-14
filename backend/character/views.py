from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import Character
from .serializers import CharacterSerializer
from django.shortcuts import get_object_or_404


# Create your views here.

class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    lookup_field = "name"
    serializer_class = CharacterSerializer
