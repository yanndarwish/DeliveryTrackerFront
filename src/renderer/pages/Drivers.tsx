import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { Driver } from 'renderer/interfaces';
import { drivers } from 'renderer/mock';
import { driverColumns } from 'renderer/tableColumns';
// components
import CreateDriverForm from 'renderer/components/globals/SidePanel/CreateDriverForm';
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import Modal from 'renderer/components/globals/Modal/Modal';
import DriverModalContent from 'renderer/components/globals/Modal/DriverModalContent';
import EditDriverForm from 'renderer/components/globals/SidePanel/Edit/EditDriverForm';

const Drivers = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  const [editOpen, setEditOpen] = useState<Boolean>(false);
  const [driver, setDriver] = useState<Driver | null>(null);
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (id: string) => {
    getSingleDriver(id);
    setModalOpen(!modalOpen);
  };

  const getSingleDriver = (id: string) => {
    let driver = drivers.filter((driver) => driver._id === id)[0];
    setDriver(driver as Driver)
  };

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
          onClick={handleClick}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucun chauffeur pour le moment, ajoutez-en un nouveau !"
          onClick={() => setOpen(true)}
        />
      )}
      {modalOpen && (
        <Modal
          title={driver?.firstName}
          open={modalOpen}
          setOpen={setModalOpen}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          type="edit"
        >
          <DriverModalContent data={driver} />
        </Modal>
      )}
      {open && (
        <SidePanel title="Nouveau Chauffeur" open={open} setOpen={setOpen}>
          <CreateDriverForm setOpen={setOpen} />
        </SidePanel>
      )}
      {editOpen && (
        <SidePanel
          title="Modifier Véhicule"
          open={editOpen}
          setOpen={setEditOpen}
        >
          <EditDriverForm setOpen={setEditOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Drivers;
