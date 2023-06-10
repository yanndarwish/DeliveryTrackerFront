// import { useGetVehiclesQuery } from 'renderer/redux/services/vehicles';
import { useEffect, useState } from 'react';
// utils
import { deliveries } from 'renderer/mock';
import { months } from 'renderer/utils';
// components
import KPI from 'renderer/components/KPI';
import PageHeader from 'renderer/components/globals/PageHeader';
import { Delivery } from 'renderer/interfaces';

type Month = number | 'all';

const Home = () => {
  // const { data } = useGetVehiclesQuery(null);
  const [year, setYear] = useState<number>(2023);
  const [month, setMonth] = useState<Month>('all');
  const [filteredDeliveries, setFilteredDeliveries] = useState<Delivery[]>([]);

  const getDeliveries = (year: number, month: Month) => {
    const filteredDeliveries = deliveries.filter((delivery) => {
      const date = delivery.pickups[0].date.split('T')[0];
      const deliveryMonth = parseInt(date.split('-')[1]);
      const deliveryYear = parseInt(date.split('-')[0]);

      if (month === 'all') {
        return deliveryYear === year;
      } else {
        return deliveryYear === year && deliveryMonth == month;
      }
    });
    return filteredDeliveries;
  };

  useEffect(() => {
    setFilteredDeliveries(getDeliveries(year, month));
  }, [year, month]);

  // console.log(data);
  return (
    <div className="flex flex-col gap-8 w-full lg:flex-row">
      {/* main */}
      <div className="flex flex-col gap-10 w-full flex-[2] bg-blue-100">
        {/* header */}
        <div className="flex flex-col gap-8">
          <PageHeader title="Tableau de Bord" />
          {/* date selectors */}
          <div className="flex gap-4">
            <input
              type="number"
              min="2022"
              max="2099"
              step="1"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="input input-bordered max-w-xs"
            />
            <select
              name="month"
              className="select select-bordered max-w-xs"
              onChange={(e) => setMonth(e.target.value as Month)}
              value={month}
            >
              <option selected value="all">
                Tous
              </option>
              {months.map((month, i) => (
                <option value={month.value} key={i}>
                  {month.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* STATS */}
        <div className="flex justify-center lg:justify-start">
          <div className="stats stats-vertical sm:stats-horizontal shadow">
            <KPI
              title="Livraisons"
              value={filteredDeliveries.length}
              description="1er Mai - 1er Juin"
            />
            <KPI
              title="Evolution"
              value={7}
              prefix="+"
              suffix="%"
              description="Comparé à Avr"
            />
            <KPI
              title="Annuel"
              value={getDeliveries(year, 'all').length}
              description="Depuis le 1er Jan"
            />
          </div>
        </div>
      </div>
      {/* secondary */}
      <div className="flex flex-col gap-10 w-full flex-[1] bg-blue-200">
        {/* driver */}
        test
      </div>
    </div>
  );
};

export default Home;
