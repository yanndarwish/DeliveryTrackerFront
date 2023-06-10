import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { vehicles } from 'renderer/mock';
import { vehicleColumns } from 'renderer/tableColumns';
import { Vehicle } from 'renderer/interfaces';
// components
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import CreateVehicleForm from 'renderer/components/globals/SidePanel/CreateVehicleForm';
import Modal from 'renderer/components/globals/Modal/Modal';
import VehicleModalContent from 'renderer/components/globals/Modal/VehicleModalContent';
import EditVehicleForm from 'renderer/components/globals/SidePanel/Edit/EditVehicleForm';

const Vehicles = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  const [editOpen, setEditOpen] = useState<Boolean>(false);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (id: string) => {
    getSingleVehicle(id);
    setModalOpen(!modalOpen);
  };

  const getSingleVehicle = (id: string) => {
    let vehicle = vehicles.filter((vehicle) => vehicle._id === id)[0];
    setVehicle(vehicle as Vehicle);
    console.log(vehicle)
  };

  console.log(vehicles);

  return (
    <PageContainer>
      <PageHeader
        title="Véhicules"
        onClick={
          vehicles.filter((vehicle) => vehicle.createdBy === user._id).length
            ? () => setOpen(true)
            : undefined
        }
      />
      {vehicles.filter((vehicle) => vehicle.createdBy === user._id).length ? (
        <Table
          name="vehicles"
          columns={vehicleColumns}
          data={vehicles.filter((vehicle) => vehicle.createdBy === user._id)}
          onClick={handleClick}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucun véhicule pour le moment, ajoutez-en un nouveau !"
          onClick={() => setOpen(true)}
        />
      )}

      {modalOpen && (
        <Modal
          title={vehicle?.model}
          open={modalOpen}
          setOpen={setModalOpen}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          type="edit"
        >
          <VehicleModalContent data={vehicle} />
        </Modal>
      )}
      {open && (
        <SidePanel title="Nouveau Véhicule" open={open} setOpen={setOpen}>
          <CreateVehicleForm setOpen={setOpen} />
        </SidePanel>
      )}
      {editOpen && (
        <SidePanel
          title="Modifier Véhicule"
          open={editOpen}
          setOpen={setEditOpen}
        >
          <EditVehicleForm setOpen={setEditOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Vehicles;
