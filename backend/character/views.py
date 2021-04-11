from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Character
from .serializers import CharacterSerializer

# Create your views here.
# @api_view(['GET', 'POST'])
# def mvti(request):
    