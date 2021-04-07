import requests
import re
import json
import os
from bs4 import BeautifulSoup
from nltk.tokenize import TreebankWordTokenizer

tokenizer = TreebankWordTokenizer()


def get_text(link):
    PATTERN = "{.*}|\[.*\]|\(.*\)"
    req = requests.get(link)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')
    script = soup.select_one('#mw-content-text > div')
    script = str(script)
    script = re.sub(PATTERN, "", script)

    return script 


def split_lines(text):
    raw_lines = text.split("<b>")
    strip_line = []

    for rl in raw_lines:
        strip_line.append(rl.strip())

    return strip_line


def split_lines_by_role(list):
    role_line_list = []

    for sl in list:
        temp = sl.split("</b>")
        role_line_list.append(temp)

    return role_line_list


def extract_villain_lines(list, name):
    lines = []

    for l in list:
        if l[0].startswith(name):
            line = l[1].split('\r\n\r\n')
            lines.append(line[0].replace("\n","").replace("\r","").strip())

    return lines


def split_lines_by_words(list):
    TAG_PATTERN = "</.><.>"
    lines = []

    string = ' '.join(list)
    string = string.replace(":","")
    string = re.sub(TAG_PATTERN, "", string)

    return tokenizer.tokenize(string)


def exporter(link, name, filename):
    script = get_text(link)
    each_line = split_lines(script)
    lines_by_role = split_lines_by_role(each_line)
    villain_lines = extract_villain_lines(lines_by_role, name)
    villain_words = split_lines_by_words(villain_lines)

    output = open(filename, 'w')
    output.write(str(villain_words))
    output.close()
