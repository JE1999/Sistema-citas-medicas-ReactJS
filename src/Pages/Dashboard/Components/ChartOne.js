import React, { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'
import numeral from 'numeral'

export default function (){

  const chartData = {
    labels: [
      "Some text",
      "Some text",
      "Some text",
      "Some text"
    ],
    datasets:[
      {
        data:[
          1805,
          2225,
          1950,
          1782
        ],
        backgroundColor:[
          'rgba(20, 40, 67, 0.6)',
          'rgba(250, 116, 79, 0.6)',
          'rgba(200, 25, 18, 0.6)',
          'rgba(1, 86, 104, 0.6)'
        ],
        borderColor: [
          'rgba(20, 40, 67, 1)',
          'rgba(250, 116, 79, 1)',
          'rgba(200, 25, 18, 1)',
          'rgba(1, 86, 104, 1)'
        ],
        borderWidth: 3
      },
    ]
  }
  

  return(

    <Fragment>

      <Bar
        data={chartData}
        height={175}
        options={{ 
          title: {
            display: true,
            text: "Some text",
            fontSize: 30
          },
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                return numeral(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).format('0,0')
              },
            },
          },
          animation: {
            easing: 'easeOutQuart',
            duration: '3000'
          },
          scales: {
            yAxes: [{
              ticks: {
                callback: function(label, index, labels) {
                  return new Intl.NumberFormat('en-US').format(label)
                }
              }
            }]
          }
        }}
      />

    </Fragment>

  )

}