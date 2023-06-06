import { Vehicle } from 'renderer/interfaces';

export interface IVehicleModalContentProps {
  data: Vehicle | null;
}

const VehicleModalContent = (props: IVehicleModalContentProps) => {
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
        <p className="text-base capitalize">{props.data?.brand}</p>
        <p className="text-base capitalize">{props.data?.model}</p>
        <p className="text-base uppercase">{props.data?.immatriculation}</p>
      </div>
    </div>
  );
};

export default VehicleModalContent;
