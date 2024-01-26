from flask import Flask
app = Flask(__name__)
from flask_cors import CORS
from flask_migrate import Migrate
from models import db
from config import Config

app.config.from_object(Config)

# register blue prints here

db.init_app(app)
Migrate(app, db)



@app.route('/api/hello', methods=['GET'])
def hello_world():
    print('hello inside hello route  ==================>')
    return {"hello" : "Hello, World!"}


if __name__ == '__main__':
    app.run(port=5000)
