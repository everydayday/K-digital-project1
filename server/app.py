from flask import Flask, jsonify
from flask_cors import CORS
import sidocountData

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False # ascii 코드로 한글 깨지는 문제 해결

CORS(app)

# @app.route('/')
# def get_data():    
#     return "hi"

@app.route('/api/data')
def get_data():
    # data = {'message' : 'Hello from Flask!'}
    data = sidocountData.getData()
    return jsonify(data)
    

if __name__ == '__main__':
    app.run(debug=True)




