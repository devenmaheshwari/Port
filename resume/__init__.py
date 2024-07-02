from os import urandom

from flask import Flask, render_template


app = Flask(__name__)
app.secret_key = urandom(32)

@app.route('/')
def index():
	return render_template('index.html')


if __name__ == '__main__':
        app.debug = False
        app.run(host='0.0.0.0', port=8000, debug=True)