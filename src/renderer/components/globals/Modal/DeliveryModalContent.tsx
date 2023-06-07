import { Client, Delivery, Driver, Provider } from 'renderer/interfaces';
import { clients, providers, drivers, vehicles } from 'renderer/mock';
import { getDriversNames, getVehiclesNames, getProviderName, getClient, formatDate } from 'renderer/utils';

export interface IDeliveryModalContentProps {
  data: Delivery | null;
}

const DeliveryModalContent = (props: IDeliveryModalContentProps) => {
  // const getDeliveryClients = (object: any[] | undefined) => {
  //   let ids: string[] = [];
  //   object?.forEach((d) => {
  //     ids.push(d.client);
  //   });
  //   return getClientsDetails(ids);
  // };

  // const getDeliveryDates = (object: any[] | undefined) => {
  //   let dates: string[] = [];
  //   object?.forEach((d) => {
  //     let formattedDate =
  //       d.date.split('T')[0] + ' à ' + d.date.split('T')[1]?.slice(0, 5);
  //     dates.push(formattedDate);
  //   });
  //   return dates.join(', ');
  // };

  return (
    <div className="flex flex-col gap-6">
      <div className="badge uppercase">{getProviderName(props.data?.provider, providers as Provider[])}</div>
      <div>
        <label htmlFor="" className="text-base font-semibold underline">
          Chauffeur
        </label>
        <p className="text-base capitalize">{getDriversNames(props.data?.driver, drivers as Driver[])}</p>
      </div>
      <div>
        <label htmlFor="" className="text-base font-semibold underline">
          Véhicule
        </label>
        <p className="text-base capitalize">
          {getVehiclesNames(props.data?.vehicle, vehicles)}
        </p>
      </div>
      <div>
        <label htmlFor="" className="text-base font-semibold underline">
          Retrait
        </label>
        <div className="flex flex-col gap-2">
          {props.data?.pickups.map((pickup, i) => {
            return (
              <div key={i}>
                <p className="text-base capitalize font-semibold">
                  {getClient(pickup, clients as Client[])?.name}
                </p>
                <p className="text-base">{formatDate(pickup)}</p>
                <p className="text-base capitalize">{`${
                  getClient(pickup, clients as Client[])?.streetNumber
                    ? getClient(pickup, clients as Client[])?.streetNumber
                    : ''
                } ${getClient(pickup, clients as Client[])?.streetName}, ${
                  getClient(pickup, clients as Client[])?.city
                }, ${getClient(pickup, clients as Client[])?.country}`}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <label htmlFor="" className="text-base font-semibold underline">
          Dépôt
        </label>
        <div className="flex flex-col gap-2">
          {props.data?.dropoffs.map((dropoff, i) => {
            return (
              <div key={i}>
                <p className="text-base capitalize font-semibold">
                  {getClient(dropoff, clients as Client[])?.name}
                </p>
                <p className="text-base">{formatDate(dropoff)}</p>
                <p className="text-base capitalize">{`${
                  getClient(dropoff, clients as Client[])?.streetNumber
                    ? getClient(dropoff, clients as Client[])?.streetNumber
                    : ''
                } ${getClient(dropoff, clients as Client[])?.streetName}, ${
                  getClient(dropoff, clients as Client[])?.city
                }, ${getClient(dropoff, clients as Client[])?.country}`}</p>
              </div>
            );
          })}
        </div>
      </div>
      {props.data?.hotel && (
        <div>
          <label htmlFor="" className="text-base font-semibold underline">
            Hôtel
          </label>
          <p className="text-base">{props.data?.hotel}€</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryModalContent;
