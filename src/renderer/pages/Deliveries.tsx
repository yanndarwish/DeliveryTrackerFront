import { deliveries } from 'renderer/mock';
import { deliveryColumns } from 'renderer/tableColumns';
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
import CreateDeliveryForm from 'renderer/components/CreateDeliveryForm';



const Deliveries = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const user = useAppSelector((state) => state.user.user);

  console.log(deliveries);

  return (
    <PageContainer>
      <PageHeader
        title="Livraisons"
        onClick={
          deliveries.filter((delivery) => delivery.createdBy === user._id)
            .length
            ? () => setOpen(true)
            : undefined
        }
      />
      {deliveries.filter((delivery) => delivery.createdBy === user._id)
        .length ? (
        <Table
          name="deliveries"
          columns={deliveryColumns}
          data={deliveries.filter(
            (delivery) => delivery.createdBy === user._id
          )}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucune livraison pour le moment, ajoutez-en une nouvelle !"
          onClick={() => setOpen(true)}
        />
      )}
      {open && (
        <SidePanel
          title="Nouvelle Livraison"
          open={open}
          setOpen={setOpen}
        >
          <CreateDeliveryForm setOpen={setOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Deliveries;
