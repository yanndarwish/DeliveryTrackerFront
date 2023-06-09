import { useEffect, useState } from 'react';
import { groups } from 'renderer/mock';
import { Countries, keyable } from 'renderer/interfaces';

export interface IClientsFilterProps {
  filterObject: keyable;
  setfilterObject: React.Dispatch<React.SetStateAction<object>>;
}

const ClientsFilter = (props: IClientsFilterProps) => {
  const [country, setCountry] = useState<Countries>('all');
  const [group, setGroup] = useState<string>('all');

  const updateFilters = () => {
    let filters = Object.assign({}, props.filterObject);

    filters.country = country;
    filters.group = group;

    props.setfilterObject(filters);
  };

  useEffect(() => {
    updateFilters();
  }, [country, group]);

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
        <label className="label label-text">Pays</label>
        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setCountry(e.target.value as Countries)}
        >
          <option value="all">Tous</option>
          <option value="france">France</option>
          <option value="other">Autre</option>
        </select>
      </div>
    </div>
  );
};

export default ClientsFilter;
