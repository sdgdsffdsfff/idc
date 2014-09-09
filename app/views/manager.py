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
@managerView.route('/room/<room_name>')
@login_required
def room(room_name=None):
    if room_name:
        return render_template('manager/pages/room_detail.html',
            room_name=room_name,
            content_title=room_name)

    return render_template('manager/pages/room.html',
            content_title='全省机房概况')


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
