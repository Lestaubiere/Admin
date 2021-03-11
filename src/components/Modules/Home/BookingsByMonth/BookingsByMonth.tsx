import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

import { State } from '../../../../store';

import { PartialArrowRight } from '../../../Icons';

import './BookingsByMonth.css';

export function BookingsByMonth() {
  const [year, setYear] = useState<number>(2020);

  const { bookingsByMonth } = useSelector((state: State) => ({
    bookingsByMonth: state.statisticsState.bookingsByMonth,
  }));

  const data = useMemo(() => {
    const labels = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Aôut',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];

    return {
      labels,
      datasets: [
        {
          label: 'Réservations',
          fill: false,
          backgroundColor: 'rgba(217, 35, 127, 0.2)',
          borderColor: '#ffffff',
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#ffffff',
          data: labels.map((_label, index) => {
            const date = new Date(`${index + 1}/01/${year}`);
            const selectedMonth = bookingsByMonth.find((item) => {
              const currentDate = new Date(item.month);

              return (
                currentDate.getMonth() === date.getMonth() &&
                currentDate.getFullYear() === date.getFullYear()
              );
            });

            return selectedMonth ? Number(selectedMonth.amount) : 0;
          }),
        },
      ],
    };
  }, [bookingsByMonth, year]);

  const options = useMemo(
    () => ({
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              zeroLineColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.1)',
            },
            ticks: {
              stepSize: 10,
              fontColor: 'rgba(255,255,255,0.8)',
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              zeroLineColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.1)',
            },
            ticks: {
              fontColor: 'transparent',
            },
          },
        ],
      },
    }),
    [],
  );

  return (
    <div className="Home-BookingsByMonth">
      <div className="Home-BookingsByMonth__header">
        <div className="Home-BookingsByMonth__title">Réservations par mois</div>
        <div className="Home-BookingsByMonth__filter">
          <button
            className="Home-BookingsByMonth__filter-action"
            disabled={year === 2017}
            onClick={() => setYear((oldState) => oldState - 1)}
          >
            <PartialArrowRight />
          </button>
          <span className="Home-BookingsByMonth__filter-value">{year}</span>
          <button
            className="Home-BookingsByMonth__filter-action"
            disabled={year === new Date().getFullYear()}
            onClick={() => setYear((oldState) => oldState + 1)}
          >
            <PartialArrowRight />
          </button>
        </div>
      </div>
      <div className="Home-BookingsByMonth__chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
