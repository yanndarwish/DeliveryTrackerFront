import { Client } from 'renderer/interfaces';
import { groups } from 'renderer/mock';

export interface IClientModalContentProps {
  data: Client | null;
}

const ClientModalContent = (props: IClientModalContentProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div
        className={`badge ${
          props.data?.active ? 'badge-success' : 'badge-error'
        }`}
      >
        {props.data?.active ? 'Actif' : 'Inactif'}
      </div>
      <div className="flex flex-col gap-2">
          {groups.find((c) => c._id === props.data?.group[0]) && 
        <div>
          <label htmlFor="" className="text-base font-semibold">
            Groupe
          </label>
          <p className="text-base capitalize">
            {groups.find((c) => c._id === props.data?.group[0])?.name}
          </p>
        </div>
        }
        <div>
          <label htmlFor="" className="text-base font-semibold">
            Adresse
          </label>
          <p className="text-base capitalize">{`${
            props.data?.streetNumber !== null ? props.data?.streetNumber : ''
          } ${props.data?.streetName}`}</p>
          <p className="text-base capitalize">{`${props.data?.postalCode}, ${props.data?.city}`}</p>
          <p className="text-base capitalize">{props.data?.country}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientModalContent;
