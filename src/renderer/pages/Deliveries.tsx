import { useGetDeliveriesQuery } from 'renderer/redux/services/deliveries';

export interface IDeliveriesProps {}

const Deliveries = (props: IDeliveriesProps) => {
  const { data } = useGetDeliveriesQuery({
    year: 2023,
    month: 3
  });

  console.log(data);
  return <div>Deliveries</div>;
};

export default Deliveries;
