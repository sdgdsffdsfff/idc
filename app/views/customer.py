# coding: utf-8

from flask import render_template,  Blueprint
from flask.ext.login import login_required
from app import app

customerView = Blueprint('customer', __name__)


@customerView.route('/')
@login_required
def index():
    return render_template('customer/pages/main.html',
        content_title='我的资产',
        web_3d_url=app.config['WEB_3D_URL'])


@customerView.route('/maintain')
def maintain():
    return render_template('customer/pages/maintain.html',
        content_title='设备维护')

@customerView.route('/order/<int:order_name>')
@customerView.route('/order')
def order(order_name=None):
    if order_name == 1 or order_name == 2:
        return render_template('customer/pages/order_detail_' + str(order_name) + '.html',
        content_title='订单管理')

    return render_template('customer/pages/order.html',
        content_title='业务管理')

@customerView.route('/safe')
@customerView.route('/safe/<int:safe_type>')
def safe(safe_type=None):
    if(safe_type):
        return render_template('customer/pages/safe_detect.html',
        content_title='安全检测')

    return render_template('customer/pages/safe.html',
        content_title='安全服务')


@customerView.route('/seo')
def seo():
    return render_template('customer/pages/seo.html',
        content_title='SEO服务')


@customerView.route('/data')
def data():
    return render_template('customer/pages/data.html',
        content_title='数据服务')


@customerView.route('/buy')
def buy():
    return render_template('customer/pages/buy.html',
        content_title='企业套餐')


@customerView.route('/device')
def device():
    return render_template('customer/pages/device.html',
        content_title='机房资产',
        web_3d_url = app.config['WEB_3D_URL'])


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
