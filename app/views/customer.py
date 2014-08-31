# coding: utf-8

from flask import render_template,  Blueprint
from flask.ext.login import login_required

customerView = Blueprint('customer', __name__)


@customerView.route('/')
@login_required
def index():
    return render_template('customer/pages/main.html',
        content_title='我的资产',
        web_3d_url='http://3d.uunus.com/uinv_demo/index.html?user=admin&pwd=123&type=3d')


@customerView.route('/safe')
def safe():
    return render_template('customer/pages/safe.html',
        content_title='安全服务')


@customerView.route('/seo')
def seo():
    return render_template('customer/pages/iframe.html',
        content_title='SEO服务',
        web_url="http://cn.majesticseo.com/")


@customerView.route('/data')
def data():
    return render_template('customer/pages/data.html',
        content_title='数据服务')


@customerView.route('/maintain')
def maintain():
    return render_template('customer/pages/maintain.html',
        content_title='设备维护')


@customerView.route('/buy')
def buy():
    return render_template('customer/pages/buy.html',
        content_title='企业套餐')


@customerView.route('/device')
def device():
    return render_template('customer/pages/device.html',
        content_title='机房资产')


@customerView.route('/flow')
def flow():
    return render_template('customer/pages/flow.html',
        content_title='流量统计')


@customerView.route('/billing')
def billing():
    return render_template('customer/pages/billing.html',
        content_title='费用查询')


@customerView.route('/report')
def report():
    return render_template('customer/pages/report.html',
        content_title='月度报表')
