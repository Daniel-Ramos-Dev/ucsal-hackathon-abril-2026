from flask import Blueprint, render_template, session, redirect, jsonify
import csv
import os
from config import CSV_FILE
from routes.auth_routes import login_required

main_bp = Blueprint('main', __name__)

@main_bp.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@main_bp.route('/dados')
@login_required
def dados():
    data = []

    try:
        os.stat(CSV_FILE)  # força atualização do arquivo

        with open(CSV_FILE, 'r') as file:
            reader = csv.reader(file)
            data = list(reader)

    except Exception as e:
        print("ERRO AO LER CSV:", e)

    return jsonify(data)