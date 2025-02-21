import requests
import xml.etree.ElementTree as ET
from dotenv import load_dotenv
import os

load_dotenv()


def apidata():
    url = os.getenv('FILE_URL')
    servicekey = os.getenv('ENCODED_SERVICE_KE')
    params ={'serviceKey' : servicekey, 'pageNo' : '1', 'numOfRows' : '1000' }
    response = requests.get(url, params=params)

    response_content = response.content
    root = ET.fromstring(response_content)
    # root 값 되었다고 출력하는 방법 없을까
    return root