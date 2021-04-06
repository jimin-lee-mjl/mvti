# 스타워즈 크롤러입니다 
def handle_file(file):
    lines = []

    with open(file, 'r', encoding='utf-8') as script:
        for line in script:
            line = line.split('" ')
            lines.append(line)
    
    return lines[1:]


def remove_double_quotes(list):
    clean_lines = []

    for line in list:
        character = line[1].replace('"', '')
        dialog = line[2].replace('"', '').replace('\n', '')
        clean_lines.append((character, dialog))
    
    return clean_lines


def get_vader_lines(list):
    vader_lines = [line for line in list if line[0].startswith('VADER')]
    return vader_lines


def split_sentence(list):
    words_list = []

    for line in list:
        words = line[1].split()
        for word in words:
            words_list.append(word)

    return words_list


def get_result(file_name):
    raw_data = handle_file(file_name)
    clean_data = remove_double_quotes(raw_data)
    vader_lines = get_vader_lines(clean_data)
    result = split_sentence(vader_lines)

    return result


def exporter(filename):
    file_name = './SW6.txt'
    lines = get_result(file_name)

    output = open(filename, 'w')
    output.write(str(lines))
    output.close()
