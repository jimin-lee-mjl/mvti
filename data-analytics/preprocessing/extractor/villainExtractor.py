from htmlCrawler import exporter


# 캐릭터 대사 추출 파일 만들기 예시 코드
def create_file():
    LINK = "https://transcripts.fandom.com/wiki/The_Lion_King"
    NAME = "Scar"
    FILE_NAME = "lion.py"
    exporter(LINK, NAME, FILE_NAME)

create_file()