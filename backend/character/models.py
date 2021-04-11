from django.db import models

# Create your models here.


class Character(models.Model):
    name = models.CharField('character name', max_length=100)
    wc_url = models.URLField('wordcloud url')
    character_img_url = models.URLField('character img url', default='')
    mvti = models.CharField('mvti type', max_length=4, default='')

    # def get_matched_character(self):
    #     return villain


class Sentiment(models.Model):
    name = models.CharField('sentiment name', max_length=100)


class SentimentCharacter(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE, blank=True)
    sentiment = models.ForeignKey(Sentiment, on_delete=models.CASCADE, blank=True)
    rate = models.FloatField('rate')


class Question(models.Model):
    content = models.TextField('question_content')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, blank=True)
    content = models.TextField('choice_content')


class SentimentChoice(models.Model):
    sentiment = models.ForeignKey(Sentiment, on_delete=models.CASCADE, blank=True)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE, blank=True)
