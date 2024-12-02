import React, { useState } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "./mapPage.css";
import "leaflet/dist/leaflet.css";

const INDIAN_STATES = [
  "Delhi",
  "Maharashtra",
  "Karnataka",
  "West Bengal",
  "Kerala",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Rajasthan",
  "Gujarat",
  "Punjab",
  "Bihar",
  "Assam",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Ahmedabad",
  "Indore",
  "Chandigarh",
  "Surat",
  "Coimbatore",
  "Nagpur",
  "Visakhapatnam",
];

const stateCoordinates: { [key: string]: LatLngExpression } = {
  Delhi: [28.6139, 77.209], // Delhi
  Maharashtra: [19.7515, 75.7139], // Maharashtra
  Karnataka: [12.9716, 77.5946], // Karnataka
  "West Bengal": [22.5726, 88.3639], // West Bengal
  Kerala: [10.8505, 76.2711], // Kerala
  "Tamil Nadu": [11.1271, 78.6569], // Tamil Nadu
  "Uttar Pradesh": [26.8467, 80.9462], // Uttar Pradesh
  Rajasthan: [27.0238, 74.2179], // Rajasthan
  Gujarat: [22.2587, 71.1924], // Gujarat
  Punjab: [31.1471, 75.3412], // Punjab
  Bihar: [25.0961, 85.3131], // Bihar
  Assam: [26.2006, 92.9376], // Assam
  Mumbai: [19.076, 72.8777], // Mumbai
  Bangalore: [12.9716, 77.5946], // Bangalore
  Kolkata: [22.5726, 88.3639], // Kolkata
  Chennai: [13.0827, 80.2707], // Chennai
  Hyderabad: [17.385, 78.4867], // Hyderabad
  Pune: [18.5204, 73.8567], // Pune
  Jaipur: [26.9124, 75.7873], // Jaipur
  Lucknow: [26.8467, 80.9462], // Lucknow
  Ahmedabad: [23.0225, 72.5714], // Ahmedabad
  Indore: [22.7196, 75.8577], // Indore
  Chandigarh: [30.7333, 76.7794], // Chandigarh
  Surat: [21.1702, 72.8311], // Surat
  Coimbatore: [11.0168, 76.9558], // Coimbatore
  Nagpur: [21.1458, 79.0882], // Nagpur
  Visakhapatnam: [17.6869, 83.2185], // Visakhapatnam
  Agra: [27.1767, 78.0081], // Agra
  Ajmer: [26.4523, 74.6369], // Ajmer
  Aligarh: [27.8974, 78.088], // Aligarh
  Amritsar: [31.5497, 74.3436], // Amritsar
  Aurangabad: [19.8762, 75.3433], // Aurangabad
  Bareilly: [28.3469, 79.4152], // Bareilly
  Belagavi: [15.8485, 74.4977], // Belagavi
  Bhopal: [23.2599, 77.4126], // Bhopal
  Bhubaneswar: [20.2961, 85.8189], // Bhubaneswar
  Bilaspur: [22.0781, 82.1487], // Bilaspur
  Cuttack: [20.4625, 85.8828], // Cuttack
  Davanagere: [14.4689, 75.9262], // Davanagere
  Dehradun: [30.3165, 78.0322], // Dehradun
  Dhanbad: [23.8006, 86.4346], // Dhanbad
  Dibrugarh: [27.4732, 94.9], // Dibrugarh
  Durgapur: [23.4917, 87.2903], // Durgapur
  Erode: [11.34, 77.7175], // Erode
  Gaya: [24.7959, 85.0], // Gaya
  Gwalior: [26.2183, 78.1828], // Gwalior
  Hubli: [15.3647, 75.1355], // Hubli
  Imphal: [24.817, 93.9368], // Imphal
  Jabalpur: [23.1815, 79.9505], // Jabalpur
  Jagdalpur: [19.0707, 82.003], // Jagdalpur
  Jammu: [32.7266, 74.857], // Jammu
  Jamshedpur: [22.8046, 86.2029], // Jamshedpur
  Jodhpur: [26.2389, 73.0248], // Jodhpur
  Kochi: [9.9312, 76.2673], // Kochi
  Kota: [25.2138, 75.8664], // Kota
  Ludhiana: [30.9, 75.8573], // Ludhiana
  Madurai: [9.9195, 78.1193], // Madurai
  Malappuram: [11.0664, 76.0707], // Malappuram
  Mangalore: [12.9141, 74.856], // Mangalore
  Mathura: [27.4912, 77.6738], // Mathura
  Meerut: [28.9845, 77.706], // Meerut
  Moradabad: [28.838, 78.7763], // Moradabad
  Muzaffarpur: [26.121, 85.3583], // Muzaffarpur
  Nagapattinam: [10.7647, 79.8484], // Nagapattinam
  Nanded: [19.1505, 77.309], // Nanded
  Nashik: [19.9975, 73.7898], // Nashik
  Patna: [25.5941, 85.1376], // Patna
  Pondicherry: [11.9416, 79.8083], // Pondicherry
  Raipur: [21.2514, 81.6296], // Raipur
  Rajkot: [22.3039, 70.8022], // Rajkot
  Ranchi: [23.3441, 85.3096], // Ranchi
  Shimla: [31.1048, 77.17], // Shimla
  Siliguri: [26.7279, 88.3953], // Siliguri
  Srinagar: [34.0836, 74.7973], // Srinagar
  Tiruchirappalli: [10.7905, 78.7047], // Tiruchirappalli
  Vadodara: [22.3072, 73.1812], // Vadodara
  Varanasi: [25.3176, 82.9739], // Varanasi
  Vijayawada: [16.5062, 80.648], // Vijayawada
  Vellore: [12.9165, 79.1327], // Vellore
};

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disastersDetected, setDisastersDetected] = useState<
    { city: string; details: string }[]
  >([]);
  const [location, setLocation] = useState<LatLngExpression | null>(null); // Track location of disaster

  const startSearch = async () => {
    setLoading(true);
    setDisastersDetected([]); // Clear previous disasters
    setLocation(null); // Clear previous location

    // Simulate API request to Gemini (this should be replaced with actual Gemini API call)
    setTimeout(async () => {
      // Mock Gemini API response (replace this with your actual Gemini response)
      const geminiResponse = await fetchDisasterData();

      // If a disaster was detected, update the UI accordingly
      if (geminiResponse) {
        setDisastersDetected(geminiResponse);
      }

      setLoading(false);
    }, 3000); // Simulating a delay
  };

  // Function to simulate fetching disaster data from Gemini
  const fetchDisasterData = async () => {
    // This is a mock response with multiple disasters. Replace it with actual Gemini API integration.
    return [
      {
        city: "Delhi", // Example city where a disaster was detected
        details: "Earthquake detected in Delhi. Stay safe!",
      },
      {
        city: "Mumbai", // Another city where a disaster was detected
        details: "Flood detected in Mumbai. Please take precautions.",
      },
    ];
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="text-center text-white text-4xl font-bold">
          Disaster Monitoring System
        </h1>
      </header>

      <main className="main-content">
        <button
          onClick={startSearch}
          className="search-button"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>

        <div className="map-container">
          {/* Map integration with Leaflet */}
          <MapContainer
            center={[20.5937, 78.9629]} // Default center of India
            zoom={5}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* Show a red circle for each detected city */}
            {disastersDetected.map((disaster, index) => {
              const location = stateCoordinates[disaster.city];
              return location ? (
                <CircleMarker
                  key={index}
                  center={location}
                  radius={10}
                  color="red"
                />
              ) : null;
            })}
          </MapContainer>
        </div>

        {/* Only show disaster info after clicking search */}
        {!loading && disastersDetected.length > 0 && (
          <div className="result">
            <h3>Disasters Detected:</h3>
            {disastersDetected.map((disaster, index) => (
              <div key={index}>
                <h4>{disaster.city}</h4>
                <p>{disaster.details}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p className="text-center text-white">
          &copy; {new Date().getFullYear()} Disaster Monitoring System
        </p>
      </footer>
    </div>
  );
};

export default App;
