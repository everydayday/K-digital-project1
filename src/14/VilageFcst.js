
import { useState, useEffect,useRef } from "react"
import TailSelect from "../ui/TailSelect";
import { useParams } from "react-router-dom";
import getcode from './getcode.json'


export default function VilageFcst() {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const [tag,setTag] = useState([])
  const [tdata,setTdata] = useState()

  const gubun = '단기예보'
  const itemRef = useRef()

  const ops = getcode
  .filter((item) => item["예보구분"] == gubun)
  .map((item) => `${item["항목명"]}(${item["항목값"]})`);

  // url 던지고 받기
  useEffect(() => {
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url +
      `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;

    fetch(url) // url 던져넣고 값이 올 때까지 다른 거 함 : 비동기
      .then((resp) => resp.json())
      .then((data) => setTdata(data.response.body.items.item))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("hereererererereeeee")
    console.log(tdata);
    let tags = tdata.map((item) => (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {item.category}
        </td>
        <td className="px-6 py-4">
          {`${item.fcstDate.substr(0, 4)}-${item.fcstDate.substr(
            4,
            2
          )}-${item.fcstDate.substr(6, 2)}`}
        </td>
        <td className="px-6 py-4">
          {`${item.fcstTime.substr(0, 2)}:${item.fcstTime.substr(2, 2)}`}
        </td>
        <td className="px-6 py-4">{item.fcstValue}</td>
      </tr>
    ));

    setTag(tags);
  }, [tdata]); // 공백일 때도 한번(usestate로 바뀌어서 한 번). 저장될 때도 한 번

   // select 박스 선택값
   const [selitem, setSelitem] = useState();
   const [selitemName, setSelitemName] = useState();

   const handleItem = () => {
    if (itemRef.current.value == "") {
      alert("항목을 선택하세요.");
      itemRef.current.focus();
      setTag([])
      return;
    }
    setSelitemName(itemRef.current.value.split("(")[0]);
    setSelitem(itemRef.current.value.split("(")[1].replace(")", ""));
    
  };

  useEffect(() => {
    console.log("selitem : " + selitem)
    let tm = tdata
      .filter((item) => item["category"] === selitem)
      .map((item) => 
        <tr
          key={item.fcstDate + item.fcstTime}
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {selitemName}
          </td>
          <td className="px-6 py-4">
            {`${item.fcstDate.substr(0, 4)}-${item.fcstDate.substr(4,2)}-${item.fcstDate.substr(6, 2)}`}
          </td>
          <td className="px-6 py-4">
            {`${item.fcstTime.substr(0, 2)}:${item.fcstTime.substr(2, 2)}`}
          </td>
          <td className="px-6 py-4">{item.fcstValue}</td>
        </tr>
      );

      setTag(tm);
  }, [selitem]);

  return (
    <div className="w-full">
        <TailSelect
        ops={ops}
        opDefault={"---항목선택---"}
        selRef={itemRef}
        handleSelGu={handleItem}
      />
      <div className="w-11/12 overflow-x-auto flex flex-col justify-start h-full mt-2">
        <div className="">{`${area}${gubun}`}</div>
        <div></div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                항목명
              </th>
              <th scope="col" className="px-6 py-3">
                예측일자
              </th>
              <th scope="col" className="px-6 py-3">
                예측시간
              </th>
              <th scope="col" className="px-6 py-3">
                예측값
              </th>
            </tr>
          </thead>
          <tbody>{tag}</tbody>
        </table>
      </div>
    </div>
  )
}
