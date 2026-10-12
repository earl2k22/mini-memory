
from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route("/")
def home():
    return send_from_directory(app.root_path, "index.html")


@app.route("/index.html")
def home_file():
    return send_from_directory(app.root_path, "index.html")


@app.route("/roadmap.html")
def roadmap():
    return send_from_directory(app.root_path, "roadmap.html")


@app.route("/health")
def health():
    return {"status": "ok", "app": "Mini Memory"}


if __name__ == "__main__":
    app.run(debug=True)
