import { useEffect, useState } from 'react';
import { groups, providers, drivers, clients } from 'renderer/mock';
import { keyable } from 'renderer/interfaces';

export interface IDeliveriesFilterProps {
  filterObject: keyable;
  setfilterObject: React.Dispatch<React.SetStateAction<object>>;
}

const DeliveriesFilter = (props: IDeliveriesFilterProps) => {
  const [provider, setProvider] = useState<string>('all');
  const [group, setGroup] = useState<string>('all');
  const [driver, setDriver] = useState<string>('all');
  const [client, setClient] = useState<string>('all');

  const updateFilters = () => {
    let filters = Object.assign({}, props.filterObject);

    filters.provider = provider;
    filters.group = group;
    filters.driver = driver;
    filters.client = client

    props.setfilterObject(filters);
  };

  useEffect(() => {
    updateFilters();
  }, [provider, group, driver, client]);

  return (
    <div className="flex items-center flex-wrap gap-4">
      <div className="form-control max-w-xs">
        <label className="label label-text">Groupe</label>

        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="all">Tous</option>
          {groups.map((group, i) => (
            <option key={i} value={group._id} className="capitalize">
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control max-w-xs">
        <label className="label label-text">Commissionnaire</label>
        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setProvider(e.target.value)}
        >
          <option value="all">Tous</option>
          {providers.map((provider, i) => (
            <option value={provider._id} key={i}>
              {provider.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control max-w-xs">
        <label className="label label-text">Chauffeur</label>
        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setDriver(e.target.value)}
        >
          <option value="all">Tous</option>
          {drivers.map((driver, i) => (
            <option value={driver._id} key={i}>
              {driver.firstName}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control max-w-xs">
        <label className="label label-text">Client</label>
        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setClient(e.target.value)}
        >
          <option value="all">Tous</option>
          {clients.map((client, i) => (
            <option value={client._id} key={i}>
              {client.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DeliveriesFilter;
