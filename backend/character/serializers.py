from rest_framework import serializers
from .models import Character


class UserSerializer(serializers.Serializer):
    words = serializers.ListField()


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'
