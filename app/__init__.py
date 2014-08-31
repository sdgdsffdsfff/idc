#coding: utf-8

from flask import Flask

app = Flask(__name__)
app.config.from_object('config')

from .views import adminView, customerView
from .front.views import frontView

app.register_blueprint(adminView, url_prefix='/admin')
app.register_blueprint(customerView, url_prefix='/customer')
app.register_blueprint(frontView, url_prefix='/main')