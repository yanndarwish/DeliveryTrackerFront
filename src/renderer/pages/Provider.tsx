import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { Provider } from 'renderer/interfaces';
import { providers } from 'renderer/mock';
import { providerColumns } from 'renderer/tableColumns';
// components
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import CreateProviderForm from 'renderer/components/globals/SidePanel/CreateProviderForm';
import Modal from 'renderer/components/globals/Modal/Modal';
import ProviderModalContent from 'renderer/components/globals/Modal/ProviderModalContent';
import EditProviderForm from 'renderer/components/globals/SidePanel/Edit/EditProviderForm';

const Providers = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  const [editOpen, setEditOpen] = useState<Boolean>(false);
  const [provider, setProvider] = useState<Provider | null>(null);
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (id: string) => {
    getSingleProvider(id);
    setModalOpen(!modalOpen);
  };

  const getSingleProvider = (id: string) => {
    let provider = providers.filter((provider) => provider._id === id)[0];
    setProvider(provider as Provider);
    console.log(provider);
  };

  console.log(providers);

  return (
    <PageContainer>
      <PageHeader
        title="Commissionnaires"
        onClick={
          providers.filter((provider) => provider.createdBy === user._id).length
            ? () => setOpen(true)
            : undefined
        }
      />
      {providers.filter((provider) => provider.createdBy === user._id)
        .length ? (
        <Table
          name="providers"
          columns={providerColumns}
          data={providers.filter((provider) => provider.createdBy === user._id)}
          onClick={handleClick}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucun commissionnaire pour le moment, ajoutez-en un nouveau !"
          onClick={() => setOpen(true)}
        />
      )}

      {modalOpen && (
        <Modal
          title={provider?.name}
          open={modalOpen}
          setOpen={setModalOpen}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          type="edit"
        >
          <ProviderModalContent data={provider} />
        </Modal>
      )}
      {open && (
        <SidePanel
          title="Nouveau Commissionnaire"
          open={open}
          setOpen={setOpen}
        >
          <CreateProviderForm setOpen={setOpen} />
        </SidePanel>
      )}
      {editOpen && (
        <SidePanel
          title="Modifier Commissionnaire"
          open={editOpen}
          setOpen={setEditOpen}
        >
          <EditProviderForm setOpen={setEditOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Providers;
