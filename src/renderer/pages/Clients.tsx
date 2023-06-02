// import { useGetClientsQuery } from 'renderer/redux/services/clients';
import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { clients } from 'renderer/mock';
import { clientColumns } from 'renderer/tableColumns';
// components
import SidePanel from 'renderer/components/globals/SidePanel/SidePanel';
import PageContainer from 'renderer/components/globals/PageContainer';
import CreateClientForm from 'renderer/components/globals/SidePanel/CreateClientForm';
import Table from 'renderer/components/globals/Table/Table';
import PageHeader from 'renderer/components/globals/PageHeader';
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import Modal from 'renderer/components/globals/Modal/Modal';

const Clients = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  const [client, setClient] = useState({});
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (id: string) => {
    getSingleClient(id);
    setModalOpen(!modalOpen);
  };

  const getSingleClient = (id: string) => {
    let client = clients.filter((client) => client._id === id)[0];
    setClient(client);
  };

  console.log(clients);

  return (
    <PageContainer>
      <PageHeader
        title="Clients"
        onClick={
          clients.filter((client) => client.createdBy === user._id).length
            ? () => setOpen(true)
            : undefined
        }
      />
      {clients.filter((client) => client.createdBy === user._id).length ? (
        <Table
          name="clients"
          columns={clientColumns}
          data={clients.filter((client) => client.createdBy === user._id)}
          onClick={handleClick}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucun client pour le moment, ajoutez-en un nouveau !"
          onClick={() => setOpen(true)}
        />
      )}
      {open && (
        <SidePanel title="Nouveau Client" open={open} setOpen={setOpen}>
          <CreateClientForm setOpen={setOpen} />
        </SidePanel>
      )}
      {modalOpen && (
        <Modal
          title="Client"
          open={modalOpen}
          setOpen={setModalOpen}
          data={client}
        />
      )}
    </PageContainer>
  );
};

export default Clients;
