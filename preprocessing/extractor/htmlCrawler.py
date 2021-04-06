import requests
import re
import json
import os
from bs4 import BeautifulSoup


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

    for sl in strip_line:
        temp = sl.split("</b>")
        role_line_list.append(temp)

    return role_line_list


def extract_villain_lines(list, name):
    lines = []

    for l in role_line_list:
        if l[0].startswith(name):
            line = l[1].split('\r\n\r\n')
            lines.append(line[0].replace("\n","").replace("\r","").strip())

    return lines


def split_lines_by_words(list):
    remove_blank = []

    string = ' '.join(lines)
    string = string.split(' ')

    for s in string:
        if s != '' and s[0]!="(" and s[-1]!=")":
            remove_blank.append(s)

    return remove_blank


def exporter(filename):
    LINK = "https://transcripts.fandom.com/wiki/The_Lion_King"
    NAME = "Scar"
    script = get_text(LINK)
    each_line = split_lines(script)
    lines_by_role = split_lines_by_role(each_line)
    villain_lines = extract_villain_lines(lines_by_role, NAME)
    villain_words = split_lines_by_words(villain_lines)

    output = open(filename, 'w')
    output.write(str(villain_words))
    output.close()
