fl_text = []
text = []
# charater = []
character = []
with open('Whiplash.txt') as f:
    for line in f:
        text.append(line.replace('\n', '').replace('.', ''))
# print(text)
talk = []
character = []


for i in text:
    if i.isupper():
        name = i
        if len(talk) > 1:
            new_list = [name, talk]
            character.append(new_list)
            talk = []
    elif i == '' or (i.isupper() and i != name):
        new_list = [name, talk]
        character.append(new_list)
        talk = []
    else:
        talk.append(i)
fl_text = [i[1] for i in character if i[0] == "FLETCHER"]
print(fl_text)
