
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart({ chartData }){
  const data = {
    labels: chartData.labels, 
    datasets: [
      {
        label: 'Dining Hall Occurrences',
        data: chartData.values, 
        backgroundColor: [
          'rgba(107, 216, 255, 0.2)', //blue
          'rgba(158, 253, 143, 0.2)', //green
          'rgba(255, 201, 51, 0.2)', //orange
          'rgba(255, 137, 137, 0.2)',
          'rgba(250, 246, 128, 0.2)',
          'rgba(196, 144, 255, 0.2)',
          'rgba(255, 182, 255, 0.2)',
        ],
        borderColor: [
          'rgba(27, 195, 255, 1)',
          'rgba(102, 210, 85, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(252, 62, 62, 1)',
          'rgba(255, 247, 0, 1)',
          'rgba(169, 92, 255, 1)',
          'rgba(255, 145, 255, 1)',
        ],
        borderWidth: 1.7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Where You Eat the Most!',
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
        <Pie data={data} options={options} />;
    </div>
  )
  
};

export default PieChart;
