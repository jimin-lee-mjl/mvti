import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer 
# from nltk.sentiment.sentiment_analyzer import SentimentAnalyzer
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


def get_pos(data):
    pos_list = []

    for word, score in data.items():
        if score > 0:
            pos_list.append(word)

    return pos_list


def classify_emotion(data):
    emotion_dict = {}
    for word in data:
        emotion = NRCLex(word)
        top_emo = emotion.top_emotions
        if top_emo[0][1] != 0.0:
            emotion_dict[word] = top_emo

    return emotion_dict


def main():
    WORDS = Scar.words
    word_dict = get_vader_score(WORDS)
    pos_list = get_pos(word_dict)
    emotions = classify_emotion(pos_list)

    return emotions


print(main())