import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { vehicles } from 'renderer/mock';
import { vehicleColumns } from 'renderer/tableColumns';
// components
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import CreateVehicleForm from 'renderer/components/globals/SidePanel/CreateVehicleForm';

const Vehicles = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (id: string) => {
    getSingleVehicle(id);
  };

  const getSingleVehicle = (id: string) => {
    let vehicle = vehicles.filter((vehicle) => vehicle._id === id)[0];
    console.log(vehicle);
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
      {open && (
        <SidePanel title="Nouveau Véhicule" open={open} setOpen={setOpen}>
          <CreateVehicleForm setOpen={setOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Vehicles;
