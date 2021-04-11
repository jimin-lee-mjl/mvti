from rest_framework import serializers
from .models import Character


class CharacterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Character
        fields = ('url', 'name', 'mvti', 'wc_url', 'character_img_url')