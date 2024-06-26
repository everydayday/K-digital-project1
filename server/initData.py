import requests
import xml.etree.ElementTree as ET



def apidata():
    url = 'http://apis.data.go.kr/B552474/SenuriService/getJobList'
    # servicekey = 'nSsjmwW7P8v4/4snOCYe0og5/8LwRd7sZhBLYsnK559jxSdyQ1JpibKEmxMxEkSYvvju+HGCTch4vsNZVQY1Ng==' #디코딩 키
    servicekey = 'nSsjmwW7P8v4%2F4snOCYe0og5%2F8LwRd7sZhBLYsnK559jxSdyQ1JpibKEmxMxEkSYvvju%2BHGCTch4vsNZVQY1Ng%3D%3D' #인코딩 키 
    params ={'serviceKey' : servicekey, 'pageNo' : '1', 'numOfRows' : '1000' }
    response = requests.get(url, params=params)

    response_content = response.content
    root = ET.fromstring(response_content)
    # root 값 되었다고 출력하는 방법 없을까
    return root