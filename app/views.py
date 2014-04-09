# coding: utf-8

from app import app
from flask import render_template, request


@app.route('/')
def index():
    return render_template('index.html',
                           web_title=app.config['WEB_TITLE'],
                           user_name=u'于旸')
