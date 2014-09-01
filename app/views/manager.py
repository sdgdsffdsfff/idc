# coding: utf-8
from flask import render_template,  Blueprint
from flask.ext.login import login_required

managerView = Blueprint('manager', __name__)

@managerView.route('/')
@login_required
def index():
    return render_template('manager/pages/main.html',
        content_title='IDC 概况')

@managerView.route('/customer/')
@managerView.route('/customer/<customer_id>')
@login_required
def customer(customer_id=None):
    if customer_id:
        return render_template('manager/pages/customer_detail.html',
            customer_name=customer_id,
            content_title='客户详情')

    return render_template('manager/pages/customer.html',
            content_title='客户信息')


@managerView.route('/cabinet/')
@login_required
def cabinet():
    return render_template('manager/pages/cabinet.html',
            content_title='机房资产')


@managerView.route('/bandres/')
@managerView.route('/bandres/<port_id>')
@login_required
def bandres(port_id=None):
    if port_id:
        return render_template('manager/pages/port.html',
            port_name=port_id,
            content_title='带宽资源')

    return render_template('manager/pages/bandres.html',
            content_title='带宽资源')


@managerView.route('/flow/')
@login_required
def flow():
    return render_template('manager/pages/flow.html',
            content_title='流量统计')


@managerView.route('/analyze/')
@login_required
def analyze():
    return render_template('manager/pages/analyze.html',
            content_title='异常流量分析')


@managerView.route('/business/')
@login_required
def business():
    return render_template('manager/pages/business.html',
            content_title='运营分析')

@managerView.route('/power/')
@login_required
def power():
    return render_template('manager/pages/power.html',
            content_title='电力统计')
