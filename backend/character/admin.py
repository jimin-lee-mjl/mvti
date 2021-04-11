from django.contrib import admin
from .models import Question, Sentiment, SentimentCharacter, SentimentChoice, Character, Choice
# Register your models here.
admin.site.register(Question)
admin.site.register(Sentiment)
admin.site.register(SentimentCharacter)
admin.site.register(SentimentChoice)
admin.site.register(Character)
admin.site.register(Choice)
