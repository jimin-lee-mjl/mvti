from rest_framework.response import Response
from rest_framework import status
# from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import Character
from .serializers import UserSerializer, CharacterSerializer
from .sentimentAnalyzer import sentiment_analyzer


class SentimentAnalyzeView(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)

        if serializers.is_valid():
            user_data = serializers.validated_data['words']

            matched = sentiment_analyzer.get_matched_villain(user_data)
            matched_villain = Character.objects.filter(
                name__exact=matched).get()
            mvti_type = sentiment_analyzer.get_mvti_type(user_data)
            user_graph = sentiment_analyzer.get_sentiment_graph(user_data)
            user_sentiment_df = sentiment_analyzer.get_sentiment_df(user_data)
            user_sentiment = user_sentiment_df.to_dict()['emotions']

            character_serializer = CharacterSerializer({
                'name': matched_villain.name,
                'user_mvti': mvti_type,
                'user_graph': user_graph,
                'user_sentiment': user_sentiment,
                'wc_url': matched_villain.wc_url,
                'bar_url': matched_villain.bar_url,
                'villain_mvti_type': matched_villain.mvti_type,
                'rival': matched_villain.rival,
                'partner': matched_villain.partner,
                'count': matched_villain.count
            })

            return Response(character_serializer.data, status=status.HTTP_200_OK)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['POST'])
# def villain_matching(request):
#     if request.method == 'POST':
#         serializer = UserSerializer(data=request.data)

#         if serializers.is_valid():
#             user_data = serializers.validated_data['words']

#             matched = sentiment_analyzer.get_matched_villain(user_data)
#             matched_villain = Character.objects.filter(
#                 name__exact=matched).get()
#             mvti_type = sentiment_analyzer.get_mvti_type(user_data)
#             user_graph = sentiment_analyzer.get_sentiment_graph(user_data)
#             user_sentiment_df = sentiment_analyzer.get_sentiment_df(user_data)
#             user_sentiment = user_sentiment_df.to_dict()['emotions']

#             character_serializer = CharacterSerializer({
#                 'name': matched_villain.name,
#                 'user_mvti': mvti_type,
#                 'user_graph': user_graph,
#                 'user_sentiment': user_sentiment,
#                 'wc_url': matched_villain.wc_url,
#                 'bar_url': matched_villain.bar_url,
#                 'villain_mvti_type': matched_villain.mvti_type,
#                 'rival': matched_villain.rival,
#                 'partner': matched_villain.partner,
#                 'count': matched_villain.count
#             })

#             return Response(character_serializer.data, status=status.HTTP_200_OK)
#         return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
#     return Response(status=status.HTTP_400_BAD_REQUEST)
