import re
from nltk.corpus import stopwords
from sw6 import words


# 소문자로 만들기
def lower_words(list):
    new_words = []

    for word in list:
        if word:
            new_words.append(word.lower())

    return new_words


# 불용어 삭제
def remove_stopwords(list):
    stop_words = stopwords.words("english")
    stop_words.remove('not')
    new_list = [word for word in list if word not in stop_words]
    return new_list


# 태그 비롯해서 행동 지문 삭제
def remove_tags(list):
    pattern = "<.*>"
    new_list = []

    for word in list:
        new_word = re.sub(pattern, "", word)
        new_list.append(new_word)

    return new_list


# 기타 이상한 거 제거
def remove_extra(list):
    new_list = []

    for word in list:
        new_word = word.replace("–","").replace("!","").replace(":","").replace("-","")
        new_word = new_word.replace(".","").replace("?","")
        new_list.append(new_word)
    
    return new_list


# file로 export하기
def exporter(filename):
    tag_removed_list = remove_tags(words)
    extra_removed_list = remove_extra(tag_removed_list)
    lowered_words = lower_words(extra_removed_list)
    words_wo_stopwords = remove_stopwords(lowered_words)
    
    output = open(filename, 'a')
    output.write(str(words_wo_stopwords))
    output.close()
