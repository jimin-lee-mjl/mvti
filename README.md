# MVTI
## ABOUT MVTI
1. [프로젝트 소개](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%86%8C%EA%B0%9C-1)
    - [데이터 세트](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%84%B8%ED%8A%B8)
    - [기술 스택](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
    - [라이브러리](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC)
    - [서비스 개요](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EC%9A%94)
2. [프로젝트 목표](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#2-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%AA%A9%ED%91%9C)
    - [프로젝트 아이디어](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4)
    - [요구사항 도출](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%8F%84%EC%B6%9C)
3. [프로젝트 기능](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#3-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%EB%8A%A5)
    - [주요 기능](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5)
    - [기대 효과](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EA%B8%B0%EB%8C%80-%ED%9A%A8%EA%B3%BC)
4. [프로젝트 구성도](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%84%B1%EB%8F%84)
    - [스토리보드](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C)
    - [와이어 프레임](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84)
5. [프로젝트 권한 및 책임](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B6%8C%ED%95%9C-%EB%B0%8F-%EC%B1%85%EC%9E%84)
    - [권한](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EA%B6%8C%ED%95%9C)
    - [책임](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#%EC%B1%85%EC%9E%84)
6. [버전](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#6-%EB%B2%84%EC%A0%84)
7. [FAQ](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team5/project-MVTI/-/edit/master/README.md#7-faq)


## 1. 프로젝트 소개
### 데이터 세트
  - 다양한 작품의 대본 데이터
  - 작품 내 악역의 대사 데이터
### 기술 스택
  - React + TypeScript
  - Django
### 라이브러리
- 전처리(Preprocessing)
  - Numpy, Matplotlib, Wordcloud, Pandas

### 서비스 개요
  - 영화 작품 속 악역의 성향과 이용자의 성향을 분석하여 비교하고 성향이 일치하는 정도를 결과로 제공하는 서비스
  - [프로젝트 제안서](https://www.notion.so/75f92035db464471bd947cf7ef3abca0)

## 2. 프로젝트 목표
### 프로젝트 아이디어
  - 성격 분석 서비스에 대한 수요 증가
  - 성격 분석 서비스의 흥행 요인
    - **접근성** 웹을 통한 테스트 및 게임 형식의 좋은 서비스 접근성
    - **공유성** 결과 공유를 통해 타겟층에게 자아 표출과 네트워킹 경험을 제공
### 요구사항 도출
  - 캐릭터의 성향은 어떻게 파악할까?
    - 캐릭터별 대사 중 가장 많이 반복되는 단어를 통해 파악
  - 사용자의 성향은 어떻게 파악할까?
    - 사용자에게 키워드와 관련된 선택지 제시 후 각 선택의 집합을 분석

## 3. 프로젝트 기능
### 주요 기능
  - 영화 대본 분석을 통해 특정 캐릭터의 성향 파악
  - 키워드 양자택일 형식에서 사용자의 선택을 바탕으로 성향 분석
  - 사용자의 성향 분석을 통해 악역 캐릭터와의 매칭 수치를 시각화하여 제공
### 기대 효과
  - 정량적인 텍스트 분석을 통해 작품 내 캐릭터의 성격 분석
    - 단순히 스토리상에서 보여지는 캐릭터의 성격을 기반으로 결과가 제공되는 기존 성향 테스트와 차별화
    - 분석 결과를 제공함으로써 결과의 유효성을 제고하고 사용자의 흥미를 유발

## 4. 프로젝트 구성도
### 스토리보드
  ![mockup](/uploads/66f83e15aeafd152814c1e61fd47f843/mockup.png)
### 와이어프레임
  ![image](/uploads/ae2186b9feac771bdc252593f509d828/image.png)

## 5. 프로젝트 권한 및 책임

### 권한
| 이름 | 역할 | 담당 업무 |
| ------ | ------ | ------ |
| 정소원 | Product Owner + Developer | Front-End |
| 하성민 | Developer | Front-End |
| 이지민 | Developer | Back-End |
| 현암 | Developer | Back-End |
| 류은제 | Developer | Back-End |

### 책임
**Product Owner**
  - 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
  - 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
  - 수정 단계: 기획, 스크럼 진행, 발표 준비  

**Front-End**
  - 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
  - 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
  - 수정 단계: 피드백 반영해서 프론트 디자인 수정  

**Back-End**
  - 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
  - 개발 단계: 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
  - 수정 단계: 피드백 반영해서 분석 / 시각화 방식 수정  

## 6. 버전
  - 0.0

## 7. FAQ
  - 자주 받는 질문에 대해서는 추후에 정리하겠습니다.
  - 서비스에 대한 문의사항은 issue에 남겨주세요!