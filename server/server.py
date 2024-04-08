from flask import Flask,jsonify,request
from flask_cors import CORS
import pred as p

app=Flask(__name__)
CORS(app)

@app.route("/api/helo",methods=["GET","POST"])
def hello():
    if(request.method=="POST"):
        print(request.get_json())
        input_data=request.get_json()
        prediction=p.predictresult(input_data)
        print("prediction is-",prediction)
        return jsonify({
            'result':str(prediction[0]),
        })
    # return jsonify({
    #     'message':'hello bro'
    # })


if __name__=="__main__":
    app.run(debug=True)