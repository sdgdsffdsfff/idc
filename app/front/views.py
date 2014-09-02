# coding: utf-8
from flask import render_template,  Blueprint
from app import app

frontView = Blueprint('front', __name__, template_folder='./templates',
    static_folder='./static')

@frontView.route('/')
def index():
    return render_template('pages/main.html',
    web_3d_url=app.config['WEB_3D_URL'])


@frontView.route('/service')
def service():
    return render_template('pages/service.html')


@frontView.route('/room')
@frontView.route('/room/<room_name>')
def room(room_name=None):
    if room_name is None:
        return render_template('pages/room.html',
               web_3d_url=app.config['WEB_3D_URL'])

    return render_template('pages/room_detail.html',
           web_3d_url=app.config['WEB_3D_URL'])

@frontView.route('/ddos')
def ddos():
    return render_template('pages/ddos.html')

@frontView.route('/contact')
def contact():
    return render_template('pages/contact.html')