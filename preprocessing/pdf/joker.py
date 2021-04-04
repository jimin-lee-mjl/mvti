jk_text = []
text = []
# charater = []
character = []
with open('thedarkknight-screenplay.txt') as f:
    for line in f:
        text.append(line.replace('\n', '').replace('.', ''))
# test_text = text[:13]
talk = []
character = []
# print(test_text)
for i in text:
    # print(f'####{i}일때 답은####')
    if i.isupper():
        name = i
        if len(talk) > 1:
            new_list = [name, talk]
            # print(new_list)
            character.append(new_list)
            talk = []
    elif i == '' or (i.isupper() and i != name):
        new_list = [name, talk]
        # print(new_list)
        character.append(new_list)
        talk = []
    else:
        # print(talk)
        talk.append(i)

joker_text = [i[1] for i in character if i[0] == "THE JOKER"]
print(joker_text)
