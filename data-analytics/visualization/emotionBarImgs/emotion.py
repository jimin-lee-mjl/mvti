import nltk
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from nltk.sentiment.vader import SentimentIntensityAnalyzer 
from nrclex import NRCLex
from preprocessing.data import (
    Hans,
    HarleyQuinn,
    Jigsaw,
    Joker,
    Fletcher,
    Snowball,
    Plankton,
    Vader,
    Thanos,
    HannibalLecter,
    JimMoriarty,
    Scar
)

# nltk.download('vader_lexicon')
# nltk.download('punkt')
sid = SentimentIntensityAnalyzer()


def get_vader_score(words):
    word_dict = {}

    for word in words:
        ss = sid.polarity_scores(word)
        # for k in ss:
        #     print('{0}: {1}, '.format(k, ss[k]), end='')
        word_dict[word] = ss['compound']

    return word_dict


def get_polar(data):
    polar_list = []

    for word, score in data.items():
        if score != 0:
            polar_list.append(word)

    return polar_list


def classify_emotion(data):
    emotion_list = []

    for word in data:
        emotion = NRCLex(word)
        top_emo = emotion.top_emotions
        if top_emo[0][1] != 0.0:
            emotion_list.append(top_emo)

    return emotion_list


def sum_emotion(data):
    emotion_dict = {}

    for top_emo in data:
        for emo in top_emo:
            emotion = emotion_dict.get(emo[0])
            if not emotion:
                emotion_dict[emo[0]] = emo[1]
            else:
                emotion_dict[emo[0]] += emo[1]

    return emotion_dict


def get_emotion_dict():
    FILES = {
        "Hans": Hans.words,
        "Fletcher": Fletcher.words,
        "Plankton": Plankton.words,
        "Snowball": Snowball.words,
        "HarleyQuinn": HarleyQuinn.words,
        "Jigsaw": Jigsaw.words,
        "Joker": Joker.words,
        "Vader": Vader.words,
        "Thanos": Thanos.words,
        "HannibalLecter": HannibalLecter.words,
        "JimMoriarty": JimMoriarty.words,
        "Scar": Scar.words
    }
    emotion_dict = {}

    for fn, words in FILES.items():
        word_dict = get_vader_score(words)
        polar_list = get_polar(word_dict)
        emotion_list = []

        for word in polar_list:
            emotion = NRCLex(word)
            emo = emotion.affect_dict
            if emo:
                emotion_list.append(emo)
        
        emotion_dict[fn] = emotion_list

    return emotion_dict


def export_emotion_dict(data):
    output = open('characterEmotions.txt', 'a')
    output.write(str(data))
    output.close()
        

export_emotion_dict(get_emotion_dict())


def draw_graph(data, name):
    emotions = pd.DataFrame({
        'emotions': data
    })
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.bar(emotions.index, emotions['emotions'])
    plt.tight_layout()
    plt.title(name)
    fig.savefig(f'{name}_emotion.png',bbox_inches='tight')
    

def main():
    FILES = {
        "Hans": Hans.words,
        "Fletcher": Fletcher.words,
        "Plankton": Plankton.words,
        "Snowball": Snowball.words,
        "HarleyQuinn": HarleyQuinn.words,
        "Jigsaw": Jigsaw.words,
        "Joker": Joker.words,
        "Vader": Vader.words,
        "Thanos": Thanos.words,
        "HannibalLecter": HannibalLecter.words,
        "JimMoriarty": JimMoriarty.words
    }

    for fn, words in FILES.items():
        word_dict = get_vader_score(words)
        polar_list = get_polar(word_dict)
        emotion_list = classify_emotion(polar_list)
        emotion_dict = sum_emotion(emotion_list)
        draw_graph(emotion_dict, fn)


# main()
