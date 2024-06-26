import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import G2chart_sido from '../kmap/G2chart_sido'
/*
// https://www.npmjs.com/package/@antv/g2
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];
*/
// genre 와 sold 말곤 label 값이 안 바뀌네



//const data = G2chart_sido
const G2chart = () => {
  const [g2data, setG2data] = useState([]);
  
  // KoreaMap 참조해서 getData 부분만 useEffect에 넣을려했으나 실패
  const getData = async () => {
    try{
      const response = await fetch('http://localhost:5000/api/g2data') ;
      const data = await response.json() ;
      console.log("g2data after response", data);
      setG2data(data);
    }
    catch(Exception ){
      
    }

  }

  useEffect(() => {
   
    //getData();
    // 되던 코드
    fetch('http://localhost:5000/api/g2data')
          .then(response =>  response.json())
          .then(data => { 
            
            console.log('fetched g2 data :',data)
            setG2data(data)
            console.log('g2data : ' , g2data)

          }) 
            
          .catch(error => {
            console.log('Error fetching data:', error)
          }) 
        


  }, []);


  // g2data 변경시 렌더링
  useEffect(() => {
    if (g2data !== null) {
        console.log('g2data has been updated:', g2data);

        const chart = new Chart({
          container: 'container',
          width: 600,
          height: 500,
        }); 

      chart
      .interval()                   // Create an interval mark and add it to the chart.
      .data(g2data)                   // Bind data for this mark.
      .encode('x', 'genre')         // Assign genre column to x position channel.
      .encode('y', 'sold')          // Assign sold column to y position channel.
      .encode('color', 'genre');    // Assign genre column to color channel.

      chart.render();

      return () => {
        chart.destroy(); // Cleanup chart instance on component unmount
      };

      }

    }, [g2data]);

  

 

  return (
    <div id="container" className="flex items-center justify-center mt-6 " />
  );
}

export default G2chart;
