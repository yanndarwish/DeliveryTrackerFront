import { useGetClientsQuery } from 'renderer/redux/services/clients';

export interface IClientsProps {}

const Clients = (props: IClientsProps) => {
  const { data } = useGetClientsQuery(null);
  console.log(data);
  return <div>Client Page</div>;
};

export default Clients;
