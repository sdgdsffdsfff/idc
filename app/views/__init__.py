# coding: utf-8
from app import app
from app.models import User
from flask import render_template, redirect, url_for, request, g
from flask.ext.login import LoginManager, login_user, logout_user, current_user
from .admin import adminView

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
login_manager.login_message = '请登陆'

app.register_blueprint(adminView, url_prefix='/admin')


@app.before_request
def before_request():
    g.user = current_user
    g.web_title = app.config['WEB_TITLE']


@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')

    username = request.form['username']
    password = request.form['password']

    user = User.query(username, password)

    if user is None:
        return redirect(url_for('login'))

    login_user(user)
    return redirect(request.args.get('next') or url_for(user.index))


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))


@login_manager.user_loader
def load_user(username):
    return  User(username)
