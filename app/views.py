# coding: utf-8

from app import app
from app.models import User
from flask import render_template, redirect, url_for, request, g
from flask.ext.login import LoginManager, login_user, logout_user, current_user, login_required


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
login_manager.login_message = '请登陆'


@app.before_request
def before_request():
    g.user = current_user
    g.web_title = app.config['WEB_TITLE']


@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('pages/login.html')

    username = request.form['username']
    password = request.form['password']

    user = User.query(username, password)

    if user is None:
        return redirect(url_for('login'))

    login_user(user)
    return redirect(request.args.get('next') or url_for('index'))


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))


@app.route('/')
@login_required
def index():
    return render_template('index.html',
        content_title='IDC 概况')

@app.route('/customer/')
@app.route('/customer/<customer_id>')
@login_required
def customer(customer_id=None):
    if customer_id:
        return render_template('pages/customer_detail.html',
            customer_name=customer_id,
            content_title='客户详情')

    return render_template('pages/customer.html',
            content_title='客户信息')


@app.route('/cabinet/')
@app.route('/cabinet/<cabinet_id>')
@login_required
def cabinet(cabinet_id=None):
    if cabinet_id:
        return render_template('pages/cabinet_detail.html',
            cabinet_name=cabinet_id,
            content_title='机房资产')

    return render_template('pages/cabinet.html',
            content_title='机房资产')


@app.route('/bandres/')
@app.route('/bandres/<port_id>')
@login_required
def bandres(port_id=None):
    if port_id:
        return render_template('pages/port.html',
            port_name=port_id,
            content_title='带宽资源')

    return render_template('pages/bandres.html',
            content_title='带宽资源')


@app.route('/power/')
@app.route('/power/<user_id>')
@login_required
def power(user_id=None):
    if user_id:
        return render_template('pages/power_detail.html',
            username=user_id,
            content_title='电力统计')

    return render_template('pages/power.html',
            content_title='电力统计')


@app.route('/flow/')
@login_required
def flow():
    return render_template('pages/flow.html',
            content_title='流量统计')


@app.route('/analyze/')
@login_required
def analyze():
    return render_template('pages/analyze.html',
            content_title='流量监测')


@app.route('/business/')
@login_required
def business():
    return render_template('pages/business.html',
            content_title='运营分析')

@login_manager.user_loader
def load_user(username):
    user_instance = User(username)
    user_instance.name = '金石'
    user_instance.role = '管理员'
    return user_instance
