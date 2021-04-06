#1 베이스 이미지
FROM ubuntu:18.04

#2 환경변수 설정
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND noninteractive

#3 필요한 프로그램 설치

#3-1 apt 패키지 업데이트
RUN apt-get update
RUN apt-get -y upgrade

#3-2 기본 프로그램 설치
RUN apt-get install -y sudo
RUN apt-get install -y net-tools
RUN apt-get install -y wget
RUN apt-get install -y nano
RUN apt-get install -y lsof
RUN apt-get install -y curl
RUN apt-get install -y gnupg gnupg2 gnupg1

#3-3 Git 설치
RUN apt-get install -y git

#3-4 Python3 및 관련 프로그램 설치
RUN apt-get install -y python3 python3-pip python3-dev
RUN apt-get install -y python3-pandas

#3-5 Node.js 버전 세팅 및 설치
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install build-essential

#3-6 PostgreSQL 버전 세팅 및 설치
RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_relea$
RUN apt install wget ca-certificates
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc$RUN apt-get update
RUN apt -y install postgresql postgresql-contrib

# 3-7 Python3 패키지 설치
RUN pip3 install django