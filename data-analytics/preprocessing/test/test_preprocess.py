from string import punctuation
from ..extractor import preprocessor


def test_remove_punctuation():
    list = ['hi"', ':', ',ss', 'dkso']
    pre_list = preprocessor.remove_extra(list)

    assert pre_list == ['hi', '', 'ss', 'dkso']
