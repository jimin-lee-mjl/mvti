file_list = [
    'infinityWar.txt'
]

total_words = []

for file in file_list:
    f = open(file, 'r', encoding="utf-8")
    lines = []
    role_line = []
    while True:
        line = f.readline()
        if not line: 
            break
        if ":" in line:
            temp = line.split(":")
            role_line.append(temp)
    f.close()

    say = []
    for rl in role_line:
        if rl[0].startswith("Thanos"):
            say.append(rl[1].replace("\n","").replace(".","").replace("!","").replace("?","").strip())
    string = " ".join(say)
    words = string.split(" ")
    processed_words = []
    for word in words:
        if word.isalpha() and word!="":
            word = word.lower()
            processed_words.append(word)

    total_words = total_words + processed_words


def exporter(filename):
    output = open(filename, 'x')
    output.write(str(total_words))
    output.close()


exporter('thanos3.py')