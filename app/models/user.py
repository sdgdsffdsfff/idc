# coding: utf-8

class User():
    def __init__(self, username):
        self.username = username

    @staticmethod
    def query(username, password):
        if username == 'js' and password == '123':
            return User(username)
        else:
            return None

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return str(self.username)
