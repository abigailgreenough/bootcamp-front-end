import PieChart from "../components/PieChart";
import { useEffect, useState } from "react";

function DiningAnalytics() {
  const [diningHallData, setDiningHallData] = useState({ labels: [], values: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDiningHallData() {
      try {

        const response = await fetch("http://localhost:8080/dataentry");
        const diningData = await response.json();

        const diningHallCount = diningData.reduce((acc, item) => {
          const hall = item['diningHall'];
          acc[hall] = (acc[hall] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(diningHallCount); 
        const values = Object.values(diningHallCount);

        setDiningHallData({ labels, values });
    
      } catch (error) {
        console.error("Failed to fetch dining hall data:", error);
        setError(error.message); 
        setLoading(false);       
      }
    };

    getDiningHallData();
  }, []);

  return (
    <div>
      <h2>Dining Hall Analytics</h2>
      <PieChart chartData={diningHallData} />
    </div>
  );
}

export default DiningAnalytics;
