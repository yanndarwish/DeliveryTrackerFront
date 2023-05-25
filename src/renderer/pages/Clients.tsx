// import { useGetClientsQuery } from 'renderer/redux/services/clients';
import { clients } from 'renderer/mock';
import { IoMdAdd } from 'react-icons/io';
import { useAppSelector } from 'renderer/redux/hooks';
import SidePanel from 'renderer/components/globals/SidePanel';
import { useState } from 'react';
import CreateClientForm from 'renderer/components/CreateClientForm';
import Table from 'renderer/components/globals/Table/Table';

export interface IClientsProps {}

const Clients = (props: IClientsProps) => {
  const [open, setOpen] = useState<Boolean>(false);
  const user = useAppSelector((state) => state.user.user);

  const columns = [
    { label: 'Nom', accessor: 'name', sortable: true },
    {
      label: 'Numéro',
      accessor: 'streetNumber',
      sortable: false,
    },
    {
      label: 'Rue',
      accessor: 'streetName',
      sortable: true,
    },
    { label: 'Ville', accessor: 'city', sortable: true },
    { label: 'Code Postal', accessor: 'postalCode', sortable: true },
    { label: 'Pays', accessor: 'country', sortable: true },
    { label: 'Actif', accessor: 'active', sortable: true },
  ];

  console.log(clients);
  return (
    <div className="h-full flex flex-col pt-8 lg:pt-0 gap-y-8">
      {/* page header */}
      <div className="flex justify-between items-center">
        <h1 className="h2">Clients</h1>
        {clients.filter((client) => client.createdBy === user._id).length ? (
          <button
            className="btn btn-circle"
            onClick={() => setOpen(true)}
            autoFocus
          >
            <IoMdAdd size={24} />
          </button>
        ) : (
          ''
        )}
      </div>
      {/* filter */}

      {/* table */}
      {clients.filter((client) => client.createdBy === user._id).length ? (
        <Table
          name="clients"
          columns={columns}
          data={clients.filter((client) => client.createdBy === user._id)}
        />
      ) : (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col gap-8">
          <p className="text-center text-xl">
            Vous n'avez aucun client pour le moment, ajoutez-en un nouveau !
          </p>
          <button
            className="p-5 rounded-full text-primary border border-primary focus:outline-primary hover:text-primary focus:text-primary bg-neutral-800/50 hover:bg-neutral-700/50 focus:bg-neutral-700/50"
            onClick={() => setOpen(true)}
          >
            <IoMdAdd size={24} />
          </button>
        </div>
      )}
      {open && (
        <SidePanel title="Nouveau Client" open={open} setOpen={setOpen}>
          <CreateClientForm setOpen={setOpen} />
        </SidePanel>
      )}
    </div>
  );
};

export default Clients;
