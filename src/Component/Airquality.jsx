import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AirQuality = () => {
  const [airQualityData, setAirQualityData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Lucknow');

  const cityCoordinates = {
    "Lucknow": { "lat": 26.8467, "lon": 80.9462 },
    "Delhi": { "lat": 28.7041, "lon": 77.1025 },
    "Mumbai": { "lat": 19.0760, "lon": 72.8777 },
    "Bangalore": { "lat": 12.9716, "lon": 77.5946 },
    "Chennai": { "lat": 13.0827, "lon": 80.2707 },
    "Kolkata": { "lat": 22.5726, "lon": 88.3639 },
    "Hyderabad": { "lat": 17.3850, "lon": 78.4867 },
    "Pune": { "lat": 18.5204, "lon": 73.8567 },
    "Ahmedabad": { "lat": 23.0225, "lon": 72.5714 },
    "Jaipur": { "lat": 26.9124, "lon": 75.7873 },
    "Kanpur": { "lat": 26.4499, "lon": 80.3319 },
    "Nagpur": { "lat": 21.1458, "lon": 79.0882 },
    "Visakhapatnam": { "lat": 17.6868, "lon": 83.2185 },
    "Indore": { "lat": 22.7196, "lon": 75.8577 },
    "Thane": { "lat": 19.2183, "lon": 72.9781 },
    "Bhopal": { "lat": 23.2599, "lon": 77.4126 },
    "Patna": { "lat": 25.5941, "lon": 85.1376 },
    "Vadodara": { "lat": 22.3072, "lon": 73.1812 },
    "Ludhiana": { "lat": 30.9010, "lon": 75.8573 },
    "Agra": { "lat": 27.1767, "lon": 78.0081 },
    "Nashik": { "lat": 20.0059, "lon": 73.7910 },
    "Faridabad": { "lat": 28.4089, "lon": 77.3178 },
    "Meerut": { "lat": 28.9845, "lon": 77.7064 },
    "Rajkot": { "lat": 22.3039, "lon": 70.8022 },
    "Kalyan-Dombivali": { "lat": 19.2356, "lon": 73.1305 },
    "Vasai-Virar": { "lat": 19.3919, "lon": 72.8397 },
    "Varanasi": { "lat": 25.3176, "lon": 82.9739 },
    "Srinagar": { "lat": 34.0837, "lon": 74.7973 },
    "Aurangabad": { "lat": 19.8762, "lon": 75.3433 },
    "Dhanbad": { "lat": 23.7957, "lon": 86.4304 },
    "Amritsar": { "lat": 31.6340, "lon": 74.8723 },
    "Navi Mumbai": { "lat": 19.0330, "lon": 73.0297 },
    "Allahabad": { "lat": 25.4358, "lon": 81.8463 },
    "Howrah": { "lat": 22.5958, "lon": 88.2636 },
    "Ranchi": { "lat": 23.3441, "lon": 85.3096 },
    "Gwalior": { "lat": 26.2183, "lon": 78.1828 },
    "Jabalpur": { "lat": 23.1815, "lon": 79.9864 },
    "Coimbatore": { "lat": 11.0168, "lon": 76.9558 },
    "Madurai": { "lat": 9.9252, "lon": 78.1198 },
    "Guwahati": { "lat": 26.1445, "lon": 91.7362 },
    "Chandigarh": { "lat": 30.7333, "lon": 76.7794 },
    "Gurgaon": { "lat": 28.4595, "lon": 77.0266 },
    "Aurangabad": { "lat": 19.8762, "lon": 75.3433 },
    "Shimla": { "lat": 31.1048, "lon": 77.1734 },
    "Jodhpur": { "lat": 26.2389, "lon": 73.0243 },
    "Raipur": { "lat": 21.2514, "lon": 81.6296 },
    "Kota": { "lat": 25.2138, "lon": 75.8648 }   
    // Add more cities and their corresponding latitude and longitude here
    // Example: Mumbai: { lat: 19.0760, lon: 72.8777 }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { lat, lon } = cityCoordinates[selectedCity];

      const options = {
        method: 'GET',
        url: 'https://air-quality.p.rapidapi.com/current/airquality',
        params: {
          lon: lon.toString(),
          lat: lat.toString()
        },
        headers: {
          'X-RapidAPI-Key': 'a82b56ebedmshec5822189a7102ep1ae79ajsne51ce078b3a5',
          'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setAirQualityData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCity]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <h2>Air Quality Information</h2>
      <label>Select City: </label>
      <select value={selectedCity} onChange={handleCityChange}>
        {Object.keys(cityCoordinates).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {airQualityData ? (
        <div>
        
          <p>AQI: {airQualityData.data[0].aqi}</p>
          <p>CO: {airQualityData.data[0].co}</p>
          <p>NO2: {airQualityData.data[0].no2}</p>
          <p>O3: {airQualityData.data[0].o3}</p>
          <p>PM10: {airQualityData.data[0].pm10}</p>
          <p>PM2.5: {airQualityData.data[0].pm25}</p>
          <p>SO2: {airQualityData.data[0].so2}</p>
          {/* Display other data as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AirQuality;
