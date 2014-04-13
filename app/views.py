# coding: utf-8

from app import app
from flask import render_template, send_from_directory


@app.route('/')
def index():
    return render_template('index.html',
        web_title=app.config['WEB_TITLE'],
        content_title=u'IDC 概况',
        user_name=u'于旸',
        user_role=u'管理员'
                           )


@app.route('/customer/')
@app.route('/customer/<customer_id>')
def customer(customer_id=None):
    if customer_id:
        return render_template('pages/customer_detail.html',
            customer_name=customer_id,
            web_title=app.config['WEB_TITLE'],
            content_title=u'客户详情',
            user_name=u'于旸',
            user_role=u'管理员')

    return render_template('pages/customer.html',
            web_title=app.config['WEB_TITLE'],
            content_title=u'客户信息',
            user_name=u'于旸',
            user_role=u'管理员')


@app.route('/cabinet/')
@app.route('/cabinet/<cabinet_id>')
def cabinet(cabinet_id=None):
    if cabinet_id:
        return render_template('pages/cabinet_detail.html',
            cabinet_name=cabinet_id,
            web_title=app.config['WEB_TITLE'],
            content_title=u'机房资产',
            user_name=u'于旸',
            user_role=u'管理员')

    return render_template('pages/cabinet.html',
            web_title=app.config['WEB_TITLE'],
            content_title=u'机房资产',
            user_name=u'于旸',
            user_role=u'管理员')


@app.route('/bandres/')
@app.route('/bandres/<port_id>')
def bandres(port_id=None):
    if port_id:
        return render_template('pages/port.html',
            port_name=port_id,
            web_title=app.config['WEB_TITLE'],
            content_title=u'互联网资源',
            user_name=u'于旸',
            user_role=u'管理员')

    return render_template('pages/bandres.html',
            web_title=app.config['WEB_TITLE'],
            content_title=u'互联网资源',
            user_name=u'于旸',
            user_role=u'管理员')


@app.route('/power/')
@app.route('/power/<user_id>')
def power(user_id=None):
    if user_id:
        return render_template('pages/power_detail.html',
            username=user_id,
            web_title=app.config['WEB_TITLE'],
            content_title=u'电力统计',
            user_name=u'于旸',
            user_role=u'管理员')

    return render_template('pages/power.html',
            web_title=app.config['WEB_TITLE'],
            content_title=u'电力统计',
            user_name=u'于旸',
            user_role=u'管理员')


@app.route('/flow/')
def flow():
    return render_template('pages/flow.html',
            web_title=app.config['WEB_TITLE'],
            content_title=u'流量统计',
            user_name=u'于旸',
            user_role=u'管理员')


@app.route('/analyze/')
def analyze():
    return render_template('pages/analyze.html',
            web_title=app.config['WEB_TITLE'],
            content_title=u'深度分析',
            user_name=u'于旸',
            user_role=u'管理员')


@app.route('/business/')
def business():
    return render_template('pages/business.html',
            web_title=app.config['WEB_TITLE'],
            content_title=u'收入分析',
            user_name=u'于旸',
            user_role=u'管理员')


@app.route('/puewue/<path:filename>')
def download_file(filename):
    return send_from_directory(app.config['PUEWUE_ROOT'], filename)
