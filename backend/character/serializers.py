from rest_framework import serializers
from .models import Character


class UserSerializer(serializers.Serializer):
    words = serializers.ListField()


class CharacterSerializer(serializers.ModelSerializer):
    user_mvti = serializers.CharField()
    user_sentiment = serializers.JSONField()

    class Meta:
        model = Character
        fields = ['name', 'user_mvti', 'user_sentiment', 'wc_url', 'sentiment',
                  'bar_url', 'villain_mvti_type', 'rival', 'partner', 'count']
