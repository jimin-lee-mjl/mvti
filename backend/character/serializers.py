from rest_framework import serializers
from .models import Character


class UserSerializer(serializers.Serializer):
    words = serializers.JSONField()


class CharacterSerializer(serializers.ModelSerializer):
    user_mvti = serializers.CharField()
    user_graph = serializers.URLField()
    user_sentiment = serializers.JSONField()

    class Meta:
        model = Character
        fields = ['name', 'user_mvti', 'user_graph', 'user_sentiment', 'wc_url',
                  'bar_url', 'villain_mvti_type', 'rival', 'partner', 'count']
