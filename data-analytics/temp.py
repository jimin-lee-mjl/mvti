import numpy as np
from temp22 import format_data, calculate_cos_sim


class SentimentAnalyzer():
    def get_sentiment_df(self, dataset):
        df = format_data(dataset)
        return df

    def get_mvti_type(self, dataset):
        df = self.get_sentiment_df(dataset)

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
        third_type = "T" if max(T, Ag) == T else "A"
        fourth_type = "A" if max(At, F) == At else "F"

        return f'{first_type}{second_type}{third_type}{fourth_type}'

    def get_cos_sim_rate(self, user_data, villain_data):
        user_df = self.get_sentiment_df(user_data)
        villain_df = self.get_sentiment_df(villain_data)

        user = np.squeeze(user_df.to_numpy())
        villain = np.squeeze(villain_df.to_numpy())
        cos_sim_rate = calculate_cos_sim(user, villain)
        return round(cos_sim_rate, 2)

    def get_partner_and_rival_villains(self, name, dataset, info_dict):
        cos_sim_rate_dict = {}
        count = 1

        for char, info_set in info_dict.items():
            villain_data = info_set['sentiment']
            print(villain_data)
            print(count)
            cos_sim_rate = self.get_cos_sim_rate(dataset, villain_data)
            print(cos_sim_rate)
            cos_sim_rate_dict[char] = cos_sim_rate
            count += 1

        sorted_dict = sorted(cos_sim_rate_dict.items(),
                             key=lambda x: x[1], reverse=True)
        # return sorted_dict[0][0], sorted_dict[-1][0]
        return sorted_dict


sentiment_analyzer = SentimentAnalyzer()
