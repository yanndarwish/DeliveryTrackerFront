import { keyable } from './interfaces';

export const handleSearching = (data: any[], string: string) => {
  const filtered = data.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]?.toString().toLowerCase().includes(string.toLowerCase());
    });
  });

  return filtered;
};

export const handleFiltering = (data: any[], filters: keyable) => {
  const isDefault = Object.values(filters).every((filter) => filter === 'all');

  if (isDefault) return data;

  const filtered = data.filter((item) => {
    let state = true;
    Object.keys(filters).forEach((filter) => {
      if (filters[filter] === 'all') return;

      // if filters[filter] == others return !== france
      if(filter === "country" && filters[filter] === "other") {
        state = item[filter].toLowerCase() !== "france"
        return
      }
    
      // convert array of ids to id string
      if (Array.isArray(item[filter])) {
        item[filter] = item[filter].toString();
      }

      if (
        filters[filter].toString().toLowerCase() !==
        item[filter].toString().toLowerCase()
      )
        state = false;
    });
    return state;
  });

  return filtered;
};

export const handleSorting = (
  data: any[],
  sortField?: string,
  sortOrder?: string
) => {
  if (sortField) {
    const sorted = [...data].sort((a, b) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
          numeric: true,
        }) * (sortOrder === 'asc' ? 1 : -1)
      );
    });
    return sorted;
  }
  return data;
};
