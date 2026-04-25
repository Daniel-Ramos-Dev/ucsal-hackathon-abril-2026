from flask import Flask
import threading

from serial_reader import start_serial
from routes.auth_routes import auth_bp
from routes.main_routes import main_bp

app = Flask(__name__)
app.secret_key = 'hackathon-secret-key'

app.register_blueprint(auth_bp)
app.register_blueprint(main_bp)

thread = threading.Thread(target=start_serial)
thread.daemon = True
thread.start()

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)