import { useMemo } from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options = {
  fill: true,
  animations: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  tooltips: {
    enabled: true,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

export default function BarChart({ scores, labels }) {
  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Días",
          data: scores,
          backgroundColor: "#8e6bbf"
        },
      ],
      labels,
    }
  }, [scores, labels])

  return <Bar data={data} options={options} />
}
