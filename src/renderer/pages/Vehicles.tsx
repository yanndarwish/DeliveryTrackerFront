import { vehicles } from 'renderer/mock';
import { vehicleColumns } from 'renderer/tableColumns';
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
import CreateVehicleForm from 'renderer/components/CreateVehicleForm';

const Vehicles = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const user = useAppSelector((state) => state.user.user);

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
