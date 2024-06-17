# 완성 코드
import pandas as pd
import requests
import xml.etree.ElementTree as ET
import json




def getData():
    file_path = r'C:\Users\user\dev\소스파일\FE\gongmo2\src\kmap\datalist.xlsx'
    df = pd.read_excel(file_path)
    df = df[['법정동코드', '법정동명']]
    data_dict = {item : 0 for item in df['법정동명']}



    url = 'http://apis.data.go.kr/B552474/SenuriService/getJobList'
    servicekey = 'nSsjmwW7P8v4/4snOCYe0og5/8LwRd7sZhBLYsnK559jxSdyQ1JpibKEmxMxEkSYvvju+HGCTch4vsNZVQY1Ng=='
    params ={'serviceKey' : servicekey, 'pageNo' : '1', 'numOfRows' : '10000' }
    response = requests.get(url, params=params)



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
