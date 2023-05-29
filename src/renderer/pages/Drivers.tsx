import { useState } from 'react';
import CreateDriverForm from 'renderer/components/CreateDriverForm';
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import { drivers } from 'renderer/mock';
import { driverColumns } from 'renderer/tableColumns';
import { useAppSelector } from 'renderer/redux/hooks';

const Drivers = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const user = useAppSelector((state) => state.user.user);

  console.log(drivers);

  return (
    <PageContainer>
      <PageHeader
        title="Chauffeurs"
        onClick={
          drivers.filter((driver) => driver.createdBy === user._id).length
            ? () => setOpen(true)
            : undefined
        }
      />
      {drivers.filter((driver) => driver.createdBy === user._id).length ? (
        <Table
          name="drivers"
          columns={driverColumns}
          data={drivers.filter((driver) => driver.createdBy === user._id)}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucun chauffeur pour le moment, ajoutez-en un nouveau !"
          onClick={() => setOpen(true)}
        />
      )}
      {open && (
        <SidePanel title="Nouveau Chauffeur" open={open} setOpen={setOpen}>
          <CreateDriverForm setOpen={setOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Drivers;
