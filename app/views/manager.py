# coding: utf-8
from flask import render_template,  Blueprint
from flask.ext.login import login_required

managerView = Blueprint('manager', __name__)

@managerView.route('/')
@login_required
def index():
    return render_template('manager/pages/main.html',
        content_title='全省 IDC 概况')


@managerView.route('/room/')
@managerView.route('/room/<int:room_name>')
@login_required
def room(room_name=None):
    if room_name == 1:
        return render_template('manager/pages/room_detail.html',
            content_title='石家庄金石机房')

    return render_template('manager/pages/room.html',
            content_title='机房资源统计')

@managerView.route('/port_account/')
@login_required
def port_account():
    return render_template('manager/pages/port_account.html',
            content_title='带宽核算')


@managerView.route('/business/')
@login_required
def business():
    return render_template('manager/pages/business.html',
            content_title='业务评估')


@managerView.route('/customer/')
@login_required
def customer():
    return render_template('manager/pages/customer.html',
            content_title='客户评估')

@managerView.route('/analyze-room/')
@login_required
def analyze_room():
    return render_template('manager/pages/analyze_room.html',
            content_title='机房投资分析')

@managerView.route('/analyze-business/')
@login_required
def analyze_business():
    return render_template('manager/pages/analyze_business.html',
            content_title='业务投资分析')
