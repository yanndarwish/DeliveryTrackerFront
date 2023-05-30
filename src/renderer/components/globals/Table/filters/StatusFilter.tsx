import { useEffect, useState } from 'react';
import { ActiveStatus, keyable } from 'renderer/interfaces';

export interface IGroupsFilterProps {
  filterObject: keyable;
  setfilterObject: React.Dispatch<React.SetStateAction<object>>;
}

const GroupsFilter = (props: IGroupsFilterProps) => {
  const [active, setActive] = useState<ActiveStatus>('all');

  const updateFilters = () => {
    let filters = Object.assign({}, props.filterObject);

    filters.active = active;
    props.setfilterObject(filters);
  };

  useEffect(() => {
    updateFilters();
  }, [active]);

  return (
    <div className="flex items-center flex-wrap gap-4">
      <div className="form-control max-w-xs">
        <label className="label label-text">Statut</label>
        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setActive(e.target.value as ActiveStatus)}
        >
          <option value="all">Tous</option>
          <option value="true">Actif</option>
          <option value="false">Inactif</option>
        </select>
      </div>
    </div>
  );
};

export default GroupsFilter;
