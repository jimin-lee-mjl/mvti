from django.test import TestCase
from .sentimentAnalyzer import sentiment_analyzer


class UserDataTestCase(TestCase):
    def setUp(self):
        self.user_data = []

    def test_get_matched_villain(self):
        snowball = {'name': 'Snowball', 'words': []}
        jigsaw = {'name': 'Jigsaw', 'words': []}
        villains = [snowball, jigsaw]
        matched = sentiment_analyzer.get_matched_villain_test(
            self.user_data, villains)
        # Snowball : 0.91
        # Jigsaw : 0.89
        self.assertEqual(matched, 'Snowball')

    def test_get_mvti_type(self):
        mvti_type = sentiment_analyzer.get_mvti_type(self.user_data)
        self.assertEqual(mvti_type, 'PJTF')
