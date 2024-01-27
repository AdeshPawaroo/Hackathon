from flask import Flask
app = Flask(__name__)
from flask_cors import CORS
from flask_migrate import Migrate
from models import db
from config import Config
from routes import bookings_routes, testimonials_routes
from seeds import seed_commands

app.cli.add_command(seed_commands)

app.config.from_object(Config)

# register blue prints here
app.register_blueprint(bookings_routes, url_prefix='/api/bookings')
app.register_blueprint(testimonials_routes, url_prefix='/api/testimonials')


db.init_app(app)
Migrate(app, db)



@app.route('/api/hello', methods=['GET'])
def hello_world():
    print('hello inside hello route  ==================>')
    return {"hello" : "Hello, World!"}


if __name__ == '__main__':
    app.run(port=5000)
