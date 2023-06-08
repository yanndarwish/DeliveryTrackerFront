import { Client } from 'renderer/interfaces';
import { groups } from 'renderer/mock';
import { getGroupsNames } from 'renderer/utils';

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

      {props.data?.group.length ? (
        <div>
          <label htmlFor="" className="text-base font-semibold">
            Groupe
          </label>
          <p className="text-base capitalize">{getGroupsNames(props.data.group, groups)}</p>
        </div>
      ) : (
        ''
      )}
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
  );
};

export default ClientModalContent;
