import { useEffect, useState } from 'react';
import { keyable } from 'renderer/interfaces';
import { groups } from 'renderer/mock';
export interface IClientsFilterProps {
  filterList: keyable;
  setFilterList: React.Dispatch<React.SetStateAction<object>>;
}

const ClientsFilter = (props: IClientsFilterProps) => {
  const [active, setActive] = useState<string>('all');
  const [country, setCountry] = useState<string>('all');
  const [group, setGroup] = useState<string>('all');

  const updateFilters = () => {
    let filters = Object.assign({}, props.filterList);

    filters.active = active;
    filters.country = country;
    filters.group = group;

    props.setFilterList(filters);
  };

  useEffect(() => {
    updateFilters();
  }, [active, country, group]);

  return (
    <div className="flex items-center flex-wrap gap-4">
      <div className="form-control max-w-xs">
        <label className="label label-text">Statut</label>
        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setActive(e.target.value)}
        >
          <option value="all">Tous</option>
          <option value="true">Actif</option>
          <option value="false">Inactif</option>
        </select>
      </div>
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
          onChange={(e) => setCountry(e.target.value)}
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
