import { useMemo } from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  Colors,
} from "chart.js"

import { Doughnut } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  Colors
)

const colors = ["#47B560","#F1C418", "#E37730", "#AA99C3","#C73660" , "#C736AE", "#473ADF", "#EE375C", "#478FDF", "#1B1284"]

const options = {
  fill: true,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      colors: {
        enabled: false,
      },
    },
  },
}

const DonutChart = ({ scores, labels }) => {
  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: "%",
          data: scores,
          hoverOffset: 4,
          backgroundColor: colors
        },
      ],
    }
  }, [scores, labels])

  return <Doughnut data={data} options={options}></Doughnut>
}

export default DonutChart
