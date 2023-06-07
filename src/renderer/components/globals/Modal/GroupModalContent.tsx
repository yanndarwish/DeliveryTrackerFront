import { Group, Client } from 'renderer/interfaces';
import { clients } from 'renderer/mock';
import { getClientsNames } from 'renderer/utils';

export interface IGroupModalContentProps {
  data: Group | null;
}

const GroupModalContent = (props: IGroupModalContentProps) => {
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
          Clients
        </label>
        <p className="text-base capitalize">
          {getClientsNames(props.data?.clients, clients as Client[])}
        </p>
      </div>
    </div>
  );
};

export default GroupModalContent;
