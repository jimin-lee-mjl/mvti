import re
from string import punctuation
from nltk.corpus import stopwords
# data 폴더에서 대사를 가져와서 words를 정의해줘야 합니다.
# from ..data import Scar


# 소문자로 만들기
def lower_words(list):
    new_words = []

    for word in list:
        if len(word) > 2:
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


def remove_punc(word):
    for p in punctuation:
        word = word.replace(p,"")
    return word


# 특수문자 및 구두점 삭제 
def remove_extra(list):
    new_list = []

    for word in list:
        new_word = remove_punc(word)
        new_list.append(new_word)
    
    return new_list


# 대명사+조동사 삭제 
def remove_auxiliary(list):
    filtered_words = [word for word in list if "’" not in word or "'" not in word]
    return filtered_words


# 축약어의 앞부분(명사)만 가져오기
def split_aux(list):
    new_list = []

    for word in list:
        if "'" in word:
            set = word.split("'")
            if len(set[0]) > 2:
                new_list.append(set[0])
        else:
            new_list.append(word)

    return new_list


# file로 export하기
def exporter(filename):
    words_wo_aux_verbs = split_aux(words)
    extra_removed_list = remove_extra(words_wo_aux_verbs)
    lowered_words = lower_words(extra_removed_list)
    words_wo_stopwords = remove_stopwords(lowered_words)
    
    output = open(filename, 'a')
    output.write(str(words_wo_stopwords))
    output.close()
