from flask import Flask, jsonify
from flask_cors import CORS
import  G2chartData
import koreamapData
import initData

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False # ascii 코드로 한글 깨지는 문제 해결

CORS(app)



# @app.route('/')
# def init_data():
#     global root 
#     root = initData.apidata() # api 호출해서 전역변수에 값 넣기
#     print("root : " ,root)
#     return jsonify(root)


@app.route('/api/g2data')
def get_g2_data():
    # data = {'message' : 'Hello from Flask!'}
    data = G2chartData.getData()
    return jsonify(data)

@app.route('/api/mapdata')
def get_data():
    # data = {'message' : 'Hello from Flask!'}
    data = koreamapData.getdata()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)


