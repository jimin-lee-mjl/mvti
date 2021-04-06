from collections import Counter
from wordcloud import WordCloud
from preprocessing.data import JimMoriarty


def create_word_cloud(list):
    counter = Counter(list) 
    cloud = WordCloud(background_color="white")
    cloud.fit_words(counter)
    cloud.to_file("JimMoriarty.png")


create_word_cloud(JimMoriarty.words)