from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/api")
def route():
    return {
        "name": [{"firstName": "Ruhan", "lastName": "Ahmad"}]
    }

if __name__ == '__main__':
    app.run()