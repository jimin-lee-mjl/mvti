import pandas as pd
import numpy as np
from numpy import dot
from numpy.linalg import norm
from nrclex import NRCLex
from sklearn.preprocessing import MinMaxScaler
from nltk.sentiment.vader import SentimentIntensityAnalyzer 


def get_vader_score(words):
    word_dict = {}
    sid = SentimentIntensityAnalyzer()

    for word in words:
        ss = sid.polarity_scores(word)
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


def standardize_data(data):
    emotions = pd.DataFrame({
        'emotions': data
    })
    emo_values = emotions.to_numpy()
    scaler = MinMaxScaler().fit(emo_values)
    _data = scaler.transform(emo_values)
    emotions['emotions'] = _data

    return emotions


def format_data(dataset):
    vadered_words = get_vader_score(dataset)
    polared_words = get_polar(vadered_words)
    words = classify_emotion(polared_words)
    emotion_sum = sum_emotion(words)
    std_df = standardize_data(emotion_sum)

    return std_df


def calculate_cos_sim(a, b):
    return dot(a, b)/(norm(a)*norm(b))
