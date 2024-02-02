from flask import Flask
app = Flask(__name__)

@app.route('/api/hello', methods=['GET'])
def hello_world():
    print('hello inside hello route  ==================>')
    return {"hello" : "Hello, World!"}


if __name__ == '__main__':
    app.run(port=5000)
