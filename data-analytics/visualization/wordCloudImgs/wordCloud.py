from collections import Counter
from wordcloud import WordCloud

# counter = Counter(lines)


# 워드 클라우드 이미지 만들기
def create_word_cloud(list):
    cloud = WordCloud(background_color="white")
    cloud.fit_words(counter)
    cloud.to_file("JimMoriarty.png")


# 단어 수 세기 
def count_words(list):
    return dict(counter)


# create_word_cloud(JimMoriarty.words)
# print(count_words(JimMoriarty.words))

def get_files():
    with open('data-analytics/preprocessing/data/Hans.txt') as lines:
        lines = list(lines)[0]
        lines = lines.split()
        print(list(lines))
get_files()