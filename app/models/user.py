# coding: utf-8
from app import app

class User():
    def __init__(self, username):
        self.init_user(username)

    @staticmethod
    def query(username, password):
        for item in app.config['USER']:
            if username == item['username'] and password == item['password']:
                return User(username)

        return None

    def init_user(self, username):
        for item in app.config['USER']:
            if username == item['username']:
                self.username = username
                self.print_name = item['print_name']
                self.print_role = item['print_role']
                self.role = item['role']
                self.index = self.role + '.index'

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return str(self.username)
