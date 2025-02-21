# 완성 코드
import pandas as pd
import requests
import xml.etree.ElementTree as ET
import json
from dotenv import load_dotenv
import os

load_dotenv()


def getData():
    file_path = os.getenv('FILE_URL')
    rfile_path = r"{}".format(file_path)
    df = pd.read_excel(rfile_path)
    df = df[['법정동코드', '법정동명']]
    data_dict = {item : 0 for item in df['법정동명']}



    
    url = os.getenv('APP_URL')
    servicekey = os.getenv('DECODED_SERVICE_KEY')
    params ={'serviceKey' : servicekey, 'pageNo' : '1', 'numOfRows' : '1000' }
    response = requests.get(url, params=params)

    print("response in G2charData after response" , response) # 200번 시 성공
    #print("response_content in G2charData after response" , response.content)

    response_content = response.content
    root = ET.fromstring(response_content)
    


    sidoResult = {}
    for item in root.findall('.//item'):
        try:
            workPlcNm = item.find('workPlcNm').text
            workFirstPlc = workPlcNm.split(" ")
            workPlc = workFirstPlc[0]

            if workPlc not in sidoResult :
                sidoResult[workPlc] = 0
            
            sidoResult[workPlc] += 1
        except :
            pass 



    # print(sidoResult)

    formatted_data = [{"genre" : key, "sold" : value} for key, value in sidoResult.items()]
    return formatted_data
    # print(formatted_data)



# with open("G2chart_sido.json", "w", encoding='utf-8') as f:
#     json.dump(formatted_data, f, ensure_ascii=False, indent=4)
