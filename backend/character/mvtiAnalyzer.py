import pandas as pd
from nrclex import NRCLex
from sklearn.preprocessing import MinMaxScaler

WORDS = ['sorry', 'hurt', 'sure', 'thank', 'goodness', 'prince', 'hans', 'southern', 'isles', 'princess', 'lady', 'boy', 'like', 'formally', 'apologize', 'hitting', 'princess', 'arendelle', 'horseand', 'every', 'moment', 'glad', 'caught', 'white', 'like', 'twelve', 'older', 'brothers', 'three', 'pretended', 'invisible', 'literallyfor', 'two', 'years', 'brothers', 'would', 'never', 'shut', 'love', 'crazy', 'thinking', 'thing', 'like', 'gonna', 'say', 'say', 'something', 'crazy', 'marry', 'majesty', 'blessing', 'absolutely', 'majesty', 'may', 'ease', 'anna', 'look', 'fjord', 'right', 'know', 'right', 'best', 'way', 'slipped', 'ice', 'anna', 'dangerous', 'coming', 'honor', 'letting', 'sure', 'trust', 'want', 'getting', 'hurt', 'cloak', 'anyone', 'need', 'cloak', 'castle', 'open', 'soup', 'hot', 'gl�gg', 'great', 'hall', 'pass', 'princess', 'anna', 'given', 'orders', 'not', 'question', 'princess', 'left', 'charge', 'not', 'hesitate', 'protect', 'arendelle', 'treason', 'whoa', 'whoa', 'whoa', 'boy', 'easy', 'easy', 'princess', 'anna', 'trouble', 'need', 'volunteers', 'find', 'find', 'princess', 'anna', 'guard', 'harm', 'come', 'queen', 'understand', 'queen', 'elsa', 'monster', 'fear', 'let', 'kill', 'anna', 'not', 'returned', 'would', 'stop', 'winter', 'bring', 'back', 'summerplease', 'going', 'back', 'look', 'princess', 'anna', 'anything', 'happens', 'anna', 'cold', 'happened', 'said', 'never', 'hurt', 'anna', 'true', 'love', 'kiss', 'anna', 'someone', 'loved', 'thirteenth', 'line', 'kingdom', 'stand', 'chance', 'knew', 'marry', 'throne', 'somewhere', 'heir', 'elsa', 'preferable', 'course', 'one', 'getting', 'anywhere', 'desperate', 'love', 'willing', 'marry', 'like', 'figured', 'married', 'stage', 'little', 'accident', 'elsa', 'doomed', 'dumb', 'enough', 'left', 'kill', 'elsa', 'bring', 'back', 'summer', 'match', 'elsa', 'hand', 'hero', 'going', 'save', 'arendelle', 'destruction', 'already', 'princess', 'anna', 'isdead', 'killed', 'queen', 'elsa', 'putting', 'least', 'got', 'say', 'marriage', 'vowsbefore', 'died', 'arms', 'heavy', 'heart', 'charge', 'queen', 'elsa', 'arendelle', 'treason', 'sentence', 'death', 'elsa', 'run', 'sister', 'returned', 'mountain', 'weak', 'cold', 'said', 'froze', 'heart', 'tried', 'save', 'late', 'skin', 'ice', 'hair', 'turned', 'white', 'sister', 'dead', 'anna', 'froze', 'heart', 'whoa', 'whoa', 'whoa']


# 단어의 구체적(라벨링된) 감정을 추출해서 리스트에 저장 
def classify_emotion(data):
    emotion_list = []

    for word in data:
        emotion = NRCLex(word)
        top_emo = emotion.top_emotions
        if top_emo[0][1] != 0.0:
            emotion_list.append(top_emo)

    return emotion_list


# 감정 별 수치를 모두 합산 
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
    # 0~1 사이의 값으로 정규화 
    # 방법 1. fit(data) -> transform(data)
    # 방법 2. fit_transform(data)
    scaler = MinMaxScaler().fit(emo_values)
    _data = scaler.transform(emo_values)
    emotions['emotions'] = _data

    return emotions

def get_mvti_type(df):
    P = float(df.loc['positive'].values)
    N = float(df.loc['negative'].values)
    J = float(df.loc['joy'].values)
    S = float(df.loc['sadness'].values)
    Ag = float(df.loc['anger'].values)
    T = float(df.loc['trust'].values)
    At = float(df.loc['anticipation'].values)
    F = float(df.loc['fear'].values)

    first_type = "P" if max(P, N) == P else "N"
    second_type = "J" if max(J, S) == J else "S" 
    third_type = "T" if max(T, Ag) == S else "A"
    fourth_type = "A" if max(At, F) == At else "F"

    return first_type, second_type, third_type, fourth_type


def analyze_user_mvti():
    words = classify_emotion(WORDS)
    emotion_sum = sum_emotion(words)
    std = standardize_data(emotion_sum)
    mvti_type = get_mvti_type(std)

    return mvti_type

print(analyze_user_mvti())