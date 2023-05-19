import { drivers } from 'renderer/mock';

export interface IDriversProps {}

const Drivers = (props: IDriversProps) => {
  console.log(drivers);
  return <div></div>;
};

export default Drivers;
