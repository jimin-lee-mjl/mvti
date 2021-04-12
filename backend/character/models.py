from django.db import models

# Create your models here.


class Character(models.Model):
    name = models.CharField('character name', max_length=100)
    wc_url = models.URLField('wordcloud url')
    character_img_url = models.URLField('character img url', default='', null=True)


class Sentiment(models.Model):
    name = models.CharField('sentiment name', max_length=100, null=True)


class SentimentCharacter(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE, blank=True, null=True)
    sentiment = models.ForeignKey(Sentiment, on_delete=models.CASCADE, blank=True, null=True)
    rate = models.FloatField('rate', null=True)


class Question(models.Model):
    content = models.TextField('question_content', null=True)


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, blank=True, null=True)
    content = models.TextField('choice_content', null=True)


class SentimentChoice(models.Model):
    sentiment = models.ForeignKey(Sentiment, on_delete=models.CASCADE, blank=True, null=True)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE, blank=True, null=True)
