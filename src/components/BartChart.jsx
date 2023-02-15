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

const colors = ["#47B560","#F1C418", "#E37730", "#AA99C3","#C73660" , "#C736AE", "#473ADF", "#EE375C", "#478FDF", "#1B1284"]

const options = {
  fill: true,
  animations: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  tooltips: {
    enabled: true,
  },
}

export default function BarChart({ scores, labels }) {
  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Días",
          data: scores,
          backgroundColor: colors
        },
      ],
      labels,
    }
  }, [scores, labels])

  return <Bar data={data} options={options} />
}
