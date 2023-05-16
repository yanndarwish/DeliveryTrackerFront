import { useGetDriversQuery } from 'renderer/redux/services/drivers';

export interface IDeliveriesProps {}

const Deliveries = (props: IDeliveriesProps) => {
  const { data } = useGetDriversQuery(null);

  console.log(data)
  return <div>Deliveries</div>;
};

export default Deliveries;
