from flask import Flask, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import generate_csrf
from models import db
from config import Config
from routes import bookings_routes, testimonials_routes
from seeds import seed_commands
 
app = Flask(__name__)
app.cli.add_command(seed_commands)

app.config.from_object(Config)

# register blue prints here
app.register_blueprint(bookings_routes, url_prefix='/api/bookings')
app.register_blueprint(testimonials_routes, url_prefix='/api/testimonials')


db.init_app(app)
Migrate(app, db)
CORS(app)

@app.route('/api/get_csrf_token', methods=['GET'])
def get_csrf_token():
    csrf_token = generate_csrf()
    response = make_response(jsonify({'csrf_token': csrf_token}))
    response.headers['Set-Cookie'] = f'csrf_token={csrf_token}; Secure; HttpOnly; SameSite=Strict'
    return response

@app.route('/api/hello', methods=['GET'])
def hello_world():
    print('hello inside hello route  ==================>')
    return {"hello" : "Hello, World!"}


if __name__ == '__main__':
    app.run(port=5000)
