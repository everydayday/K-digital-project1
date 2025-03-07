# 완성 코드
import pandas as pd
import requests
import xml.etree.ElementTree as ET
import json
from dotenv import load_dotenv
import os

load_dotenv()

def getdata():
    file_path = os.getenv('FILE_URL')
    rfile_path = r"{}".format(file_path)
    df = pd.read_excel(file_path)
    df = df[['법정동코드', '법정동명']]
    data_dict = {item : 0 for item in df['법정동명']}
    #data_dict = dict(zip(df['법정동명'], [0] * len(df)))

    
    url = os.getenv('APP_URL')
    servicekey = os.getenv('DECODED_SERVICE_KEY')

    params ={'serviceKey' : servicekey, 'pageNo' : '1', 'numOfRows' : '1000' }
    response = requests.get(url, params=params)


    response_content = response.content
    root = ET.fromstring(response_content)
    #root_items = root.findall('.//item')
    #items = [ {'workPlcNm' : item } for item in root_items]
    
    items = []
    cnt = 0
    for item in root.findall('.//item'):
        # 추후 필요 없는 속성 제거
        try:
            workPlcNm = item.find('workPlcNm').text
            job = {
                'workPlcNm': workPlcNm,
            }
            items.append(job)
            cnt += 1
        except :
            pass 

    data_list = []
    for item in items:
        work_item = item['workPlcNm']
        if(work_item in data_dict):
            data_dict[work_item] = data_dict[work_item] + 1


    return data_dict

    
