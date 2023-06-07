import { keyable, Client, Driver, Vehicle, Provider } from './interfaces';

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
      if (filter === 'country' && filters[filter] === 'other') {
        state = item[filter].toLowerCase() !== 'france';
        return;
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

export function getKeyByValue(object: any, value: string[]) {
  return Object.keys(object).find((key) => object[key] === value);
}

export const getClient = (object: any | undefined, clients: Client[]) => {
  return clients.find((c) => c._id === object.client);
};

export const getClientsNames = (
  ids: string[] | undefined,
  clients: Client[]
) => {
  let localClients: any[] = [];
  ids?.forEach((id) => {
    localClients.push(clients.find((d) => d._id === id));
  });

  return localClients.map((d) => d.name).join(', ');
};

export const getClientsDetails = (ids: string[] | undefined, clients: Client[]) => {
    let localClients: any[] = [];
    ids?.forEach((id) => {
      localClients.push(clients.find((d) => d._id === id));
    });

    return localClients
      .map(
        (d) =>
          `${d.name} - ${d.streetNumber ? d.streetNumber : ''} ${
            d.streetName
          } ${d.city} ${d.country}`
      )
      .join(', ');
  };

export const getDriversNames = (
  ids: string[] | undefined,
  drivers: Driver[]
) => {
  let localDrivers: any[] = [];
  ids?.forEach((id) => {
    localDrivers.push(drivers.find((d) => d._id === id));
  });

  return localDrivers.map((d) => d.firstName).join(', ');
};

export const getVehiclesNames = (
  ids: string[] | undefined,
  vehicles: Vehicle[]
) => {
  let localVehicles: any[] = [];
  ids?.forEach((id) => {
    localVehicles.push(vehicles.find((d) => d._id === id));
  });

  return localVehicles
    .map((d) => `${d.model} - ${d.immatriculation}`)
    .join(', ');
};

export const getProviderName = (id: string | undefined, providers: Provider[]) => {
  return providers.find((provider) => provider._id === id)?.name;
};

export const formatDate = (object: any | undefined) => {
  return (
    object.date.split('T')[0] + ' à ' + object.date.split('T')[1]?.slice(0, 5)
  );
};