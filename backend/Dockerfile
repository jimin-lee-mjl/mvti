FROM python:3.6.5

ENV PYTHONBUFFERED 1

RUN apt-get update && \
    apt-get -y install gcc mono-mcs && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir /django
WORKDIR /django

ADD requirements.txt /django/

RUN pip install --upgrade pip
RUN pip install numpy
RUN pip install -r requirements.txt


ADD . /django/

RUN python manage.py collectstatic --noinput