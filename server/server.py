from flask import Flask, jsonify, request
from flask_cors import CORS
import pred as p

app = Flask(__name__)
CORS(app)


@app.route("/api/helo", methods=["GET", "POST"])
def hello():
    if request.method == "POST":
        print(request.get_json())
        input_data = request.get_json()
        # print(input_data)
        prediction = p.predictresult(input_data)
        print("prediction is-", prediction)
        return jsonify(
            {
                "logistic": str(prediction[0]),
                "svm": str(prediction[1]),
                "knn": str(prediction[2]),
                "dt": str(prediction[3]),
                "rf": str(prediction[4]),
                "nb": str(prediction[5]),
            }
        )


if __name__ == "__main__":
    app.run(debug=True)
