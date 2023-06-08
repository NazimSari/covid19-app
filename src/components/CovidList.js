import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCovidAsync } from "../redux/covid/services";
import Chart from "./Chart";

function CovidList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.covid.items);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState({});

  const colorPalette = ["#B4E4FF", "#CDE990", "#E97777", "#FFD495"];

  useEffect(() => {
    dispatch(getCovidAsync()); // getCovidAsync eylemini tetikle
  }, [dispatch]);

  useEffect(() => {
    if (selectedCountry) {
      const country = items.find((item) => item.country === selectedCountry);
      setCountryData(country);
    } else {
      setCountryData({});
    }
  }, [selectedCountry, items]);

  console.log(countryData);

  return (
    <div>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Tüm Ülkeler</option>
        {items.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>
      <div className="container">
        {countryData ? (
          <>
            <div className="cards" style={{ backgroundColor: colorPalette[2] }}>
              <h3>Ölüm</h3>
              <p>{countryData.deaths}</p>
              <p>
                Son Güncelleme Tarihi:{" "}
                {new Date(countryData.updated).toLocaleString()}
              </p>
              <p>Number of deaths cases of COVID-19</p>
              <p>{selectedCountry}</p>
            </div>
            <div className="cards" style={{ backgroundColor: colorPalette[1] }}>
              <h3>Enfekte Olan</h3>
              <p>{countryData.cases}</p>
              <p>
                Son Güncelleme Tarihi:{" "}
                {new Date(countryData.updated).toLocaleString()}
              </p>
              <p>Number of active cases of COVID-19</p>
              <p>{selectedCountry}</p>
            </div>
            <div className="cards" style={{ backgroundColor: colorPalette[0] }}>
              <h3>İyileşen</h3>
              <p>{countryData.recovered}</p>
              <p>
                Son Güncelleme Tarihi:{" "}
                {new Date(countryData.updated).toLocaleString()}
              </p>
              <p>Number of recoveries cases of COVID-19</p>
              <p>{selectedCountry}</p>
            </div>
            <div className="cards" style={{ backgroundColor: colorPalette[3] }}>
              <h3>Aktif Hasta</h3>
              <p>{countryData.active}</p>
              <p>
                Son Güncelleme Tarihi:{" "}
                {new Date(countryData.updated).toLocaleString()}
              </p>
              <p>
                <strong>Number of active cases of COVID-19</strong>
              </p>
              <p>{selectedCountry}</p>
            </div>
          </>
        ) : (
          <p>Ülke seçiniz.</p>
        )}
      </div>
      <div className="chart-container">
        <Chart countryData={countryData} />
      </div>
    </div>
  );
}

export default CovidList;
