import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';

// https://www.npmjs.com/package/@antv/g2
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const G2chart = () => {
  useEffect(() => {
    const chart = new Chart({
      container: 'container',
      width: 600,
      height: 300,
    });

    chart
      .interval()                   // Create an interval mark and add it to the chart.
      .data(data)                   // Bind data for this mark.
      .encode('x', 'genre')         // Assign genre column to x position channel.
      .encode('y', 'sold')          // Assign sold column to y position channel.
      .encode('color', 'genre');    // Assign genre column to color channel.

    chart.render();

    return () => {
      chart.destroy(); // Cleanup chart instance on component unmount
    };
  }, []);

  return (
    <div id="container" />
  );
}

export default G2chart;
