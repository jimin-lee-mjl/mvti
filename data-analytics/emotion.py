import nltk
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from nltk.sentiment.vader import SentimentIntensityAnalyzer 
from nrclex import NRCLex
from preprocessing.data import Scar

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
    

def main():
    WORDS = Scar.words
    word_dict = get_vader_score(WORDS)
    polar_list = get_polar(word_dict)
    emotion_list = classify_emotion(polar_list)
    emotion_dict = sum_emotion(emotion_list)

    emotions = pd.DataFrame({
        'emotions': emotion_dict
    })
    fig, ax = plt.subplots(figsize=(8, 6))
    # plt.figure(figsize=(8,6))
    # sns.barplot(data=emotions, x='emotions')
    ax.bar(emotions.index, emotions['emotions'])
    plt.tight_layout()
    plt.title('Scar')
    # plt.show
    fig.savefig('Scar_emotion.png',bbox_inches='tight')
    # return emotions
    # return emotions['emotions']


print(main())
