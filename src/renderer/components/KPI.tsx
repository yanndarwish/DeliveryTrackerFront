import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';
import { FiTruck } from 'react-icons/fi';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';

export interface IKPIProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

const KPI = (props: IKPIProps) => {
  return (
    <div className="stat w-full">
      <div
        className={`stat-figure ${props.prefix === '+' && 'text-success'} ${
          props.prefix === '-' && 'text-error'
        } ${props.title === 'Annuel' && 'text-secondary'} ${
          props.title === 'Livraisons' && 'text-primary'
        }`}
      >
        {props.prefix === '+' && <BiTrendingUp size={28} />}
        {props.prefix === '-' && <BiTrendingDown size={28} />}
        {props.title === 'Livraisons' && <TbTruckDelivery size={28} />}
        {props.title === 'Annuel' && <FaRegCalendarCheck size={24} />}
      </div>
      <div className="stat-title">{props.title}</div>
      <div
        className={`stat-value ${props.prefix === '+' && 'text-success'} ${
          props.prefix === '-' && 'text-error'
        } ${props.title === 'Annuel' && 'text-secondary'} ${
          props.title === 'Livraisons' && 'text-primary'
        }`}
      >
        {props.prefix}
        {props.value}
        {props.suffix}
      </div>
      <div className="stat-desc">{props.description}</div>
    </div>
  );
};

export default KPI;
