// import { useGetClientsQuery } from 'renderer/redux/services/clients';
import { clients } from 'renderer/mock';
import { IoMdAdd } from 'react-icons/io';
import { useAppSelector } from 'renderer/redux/hooks';
import SidePanel from 'renderer/components/globals/SidePanel';
import { useState } from 'react';
import CreateClientForm from 'renderer/components/CreateClientForm';
import Table from 'renderer/components/globals/Table';

export interface IClientsProps {}

const Clients = (props: IClientsProps) => {
  const [open, setOpen] = useState<Boolean>(false);
  // const { data } = useGetClientsQuery(null);
  // console.log(data);
  const user = useAppSelector((state) => state.user.user);

  const formatedData = {
    header: [
      { title: 'Nom', field: ['name'] },
      { title: 'Adresse', field: ['streetNumber', 'streetName'] },
      { title: 'Ville', field: ['city'] },
      { title: 'Code Postal', field: ['postalCode'] },
      { title: 'Pays', field: ['country'] },
      { title: 'Actif', field: ['active'] },
    ],
    data: clients,
  };

  console.log(clients);
  return (
    <div className="relative h-full px-6 text-white">
      {/* page header */}
      <div className="flex justify-between items-center pr-2">
        <h1 className="text-4xl font-medium">Clients</h1>
        {clients.filter((client) => client.createdBy === user._id).length ? (
          <button
            className="p-1 rounded-full text-emerald-500 border border-emerald-500 focus:outline-emerald-500 hover:text-emerald-500 focus:text-emerald-500  hover:bg-neutral-700 focus:bg-neutral-700"
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
        <Table header={formatedData.header} data={formatedData.data} />
      ) : (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col gap-8">
          <p className="text-center text-xl">
            Vous n'avez aucun client pour le moment, ajoutez-en un nouveau !
          </p>
          <button
            className="p-5 rounded-full text-emerald-500 border border-emerald-500 focus:outline-emerald-500 hover:text-emerald-500 focus:text-emerald-500 bg-neutral-800/50 hover:bg-neutral-700/50 focus:bg-neutral-700/50"
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
