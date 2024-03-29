from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index() -> str:
    return render_template('index.html', siteName = "integr'INSA")

@app.route('/heroBanner')
def heroBanner() -> str:
    return render_template('heroBanner.html')

app.run(host="0.0.0.0", debug=False, port=2024)