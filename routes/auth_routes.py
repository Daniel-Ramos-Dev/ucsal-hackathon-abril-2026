from flask import Blueprint, render_template, request, redirect, session
from functools import wraps

auth_bp = Blueprint('auth', __name__)

USER = "admin"
PASSWORD = "123"

@auth_bp.route('/')
def index():
    return render_template('index.html')

@auth_bp.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if username == USER and password == PASSWORD:
        session['logged_in'] = True
        return redirect('/dashboard')

    return "Login inválido"

@auth_bp.route('/logout')
def logout():
    session.clear()
    return redirect('/')

def login_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not session.get('logged_in'):
            return redirect('/')
        return func(*args, **kwargs)
    return wrapper