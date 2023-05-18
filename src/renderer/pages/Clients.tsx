// import { useGetClientsQuery } from 'renderer/redux/services/clients';
import { clients } from 'renderer/mock';
import { MdCheck, MdClose } from 'react-icons/md';

export interface IClientsProps {}

const Clients = (props: IClientsProps) => {
  // const { data } = useGetClientsQuery(null);
  // console.log(data);
  return (
    <div className="relative h-full px-6 text-white">
      {/* page title */}
      <h1 className="text-4xl font-medium">Clients</h1>
      {/* table */}
      {clients.length ? (
        <div className="relative flex flex-col overflow-x-auto pt-6">
          <div className="">
            <div className="inline-block min-w-full py-2">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-4 py-4">
                        N°
                      </th>
                      <th scope="col" className="px-4 py-4">
                        Nom
                      </th>
                      <th scope="col" className="px-4 py-4">
                        Adresse
                      </th>
                      <th scope="col" className="px-4 py-4">
                        Ville
                      </th>
                      <th scope="col" className="px-4 py-4">
                        Code Postal
                      </th>
                      <th scope="col" className="px-4 py-4">
                        Pays
                      </th>
                      <th scope="col" className="px-4 py-4">
                        Actif
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client, i) => (
                      <tr
                        key={client._id}
                        data-id={client._id}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-4 py-4 font-medium">
                          {i + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 uppercase">
                          {client.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 capitalize">
                          {client.streetNumber === 0
                            ? client.streetName
                            : client.streetNumber + ' ' + client.streetName}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 capitalize">
                          {client.city}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {client.postalCode}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 uppercase">
                          {client.country}
                        </td>
                        <td
                          className={`whitespace-nowrap px-4 py-4 ${
                            client.active ? 'text-emerald-500' : 'bg-red-500'
                          }`}
                        >
                          {client.active === true ? (
                            <MdCheck size={24} />
                          ) : (
                            <MdClose size={24} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <p className="text-center">
            Vous n'avez aucun client pour le moment, ajoutez-en un nouveau !
          </p>
        </div>
      )}
    </div>
  );
};

export default Clients;
