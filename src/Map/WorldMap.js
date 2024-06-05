import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// 한반도 GeoJSON 데이터
const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

const KoreaMap = () => {
  return (
    <ComposableMap projection="geoMercator" width={800} height={600}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none",
                },
                hover: {
                  fill: "#F53",
                  outline: "none",
                },
                pressed: {
                  fill: "#E42",
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default KoreaMap;