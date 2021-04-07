from string import punctuation
from ..extractor import preprocessor


def test_remove_punctuation():
    list = ['hi"', ':', ',ss', 'dkso']
    pre_list = preprocessor.remove_extra(list)

    assert pre_list == ['hi', '', 'ss', 'dkso']


def find_start(line):
    for word in line:
        if word.startswith("("):
            start = line.index(word)
            break
    
    return start


def find_end(line, start):
    for word in line:
        if ")" in word:
            end = start + line.index(word)
            break
    
    return end


def get_index_set(line):
    start = find_start(line)
    end = find_end(line[start:], start)
    set = (start, end)
    return set


def slice_line(line, set):
    line = line[:set[0]] + line[set[1]+1:]
    return line


def test_remove_action():
    line = "(Shot the phone at Tapp) Listen carefully, if you will There are rules (Lawrence on the floor e rules)"
    line = line.split()
    
    while "(" in line:
        index_set = get_index_set(line)
        line = slice_line(line, index)

    assert line == "Listen carefully, if you will There are rules".split()
