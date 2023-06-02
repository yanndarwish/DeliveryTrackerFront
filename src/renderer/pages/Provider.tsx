import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { providers } from 'renderer/mock';
import { providerColumns } from 'renderer/tableColumns';
// components
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import CreateProviderForm from 'renderer/components/globals/SidePanel/CreateProviderForm';

const Providers = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (id: string) => {
    getSingleProvider(id);
  };

  const getSingleProvider = (id: string) => {
    let provider = providers.filter((provider) => provider._id === id)[0];
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
      {open && (
        <SidePanel
          title="Nouveau Commissionnaire"
          open={open}
          setOpen={setOpen}
        >
          <CreateProviderForm setOpen={setOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Providers;
