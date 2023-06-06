import { Driver } from 'renderer/interfaces';

export interface IDriverModalContentProps {
  data: Driver | null;
}

const DriverModalContent = (props: IDriverModalContentProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div
        className={`badge ${
          props.data?.active ? 'badge-success' : 'badge-error'
        }`}
      >
        {props.data?.active ? 'Actif' : 'Inactif'}
      </div>
      <div>
        <label htmlFor="" className="text-base font-semibold">
          Informations
        </label>
        <p className="text-base capitalize">{`${props.data?.lastName} ${props.data?.firstName}`}</p>
        {props.data?.email && (
          <p className="text-base">{props.data?.email}</p>
        )}
        {props.data?.phone && (
          <p className="text-base capitalize">{props.data?.phone}</p>
        )}
      </div>
    </div>
  );
};

export default DriverModalContent;
