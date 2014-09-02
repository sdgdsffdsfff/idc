# coding: utf-8
from flask import render_template,  Blueprint
from flask.ext.login import login_required
from app import app

adminView = Blueprint('admin', __name__)

@adminView.route('/')
@login_required
def index():
    return render_template('admin/pages/main.html',
        content_title='IDC 概况',
        web_3d_url=app.config['WEB_3D_URL'])

@adminView.route('/customer/')
@adminView.route('/customer/<customer_id>')
@login_required
def customer(customer_id=None):
    if customer_id:
        return render_template('admin/pages/customer_detail.html',
            customer_name=customer_id,
            content_title='客户详情')

    return render_template('admin/pages/customer.html',
            content_title='客户信息')


@adminView.route('/cabinet/')
@login_required
def cabinet():
    return render_template('admin/pages/cabinet.html',
            content_title='机房资产')


@adminView.route('/bandres/')
@adminView.route('/bandres/<port_id>')
@login_required
def bandres(port_id=None):
    if port_id:
        return render_template('admin/pages/port.html',
            port_name=port_id,
            content_title='带宽资源')

    return render_template('admin/pages/bandres.html',
            content_title='带宽资源')


@adminView.route('/flow/')
@login_required
def flow():
    return render_template('admin/pages/flow.html',
            content_title='流量统计')


@adminView.route('/analyze/')
@login_required
def analyze():
    return render_template('admin/pages/analyze.html',
            content_title='异常流量分析')


@adminView.route('/business/')
@login_required
def business():
    return render_template('admin/pages/business.html',
            content_title='运营分析')

@adminView.route('/power/')
@login_required
def power():
    return render_template('admin/pages/power.html',
            content_title='电力统计')
