import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { deliveries } from 'renderer/mock';
import { Delivery } from 'renderer/interfaces';
import { deliveryColumns } from 'renderer/tableColumns';
// components
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import CreateDeliveryForm from 'renderer/components/globals/SidePanel/CreateDeliveryForm';
import Modal from 'renderer/components/globals/Modal/Modal';
import DeliveryModalContent from 'renderer/components/globals/Modal/DeliveryModalContent';
import EditDeliveryForm from 'renderer/components/globals/SidePanel/Edit/EditDeliveryForm';

const Deliveries = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  const [editOpen, setEditOpen] = useState<Boolean>(false);
  const [delivery, setDelivery] = useState<Delivery | null>(null)
  const user = useAppSelector((state) => state.user.user);
  // useGetProviders to be able to useSelector in the tableBody to translate the ids into usable data

  const handleClick = (id: string) => {
    getSingleDelivery(id);
    setModalOpen(!modalOpen)
  };

  const getSingleDelivery = (id: string) => {
    let delivery = deliveries.find((delivery) => delivery._id === id);
    setDelivery(delivery as Delivery)
    console.log(delivery);
  };

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
          onClick={handleClick}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucune livraison pour le moment, ajoutez-en une nouvelle !"
          onClick={() => setOpen(true)}
        />
      )}
      {modalOpen && (
        <Modal
          title="Livraison"
          open={modalOpen}
          setOpen={setModalOpen}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          type="edit"
        >
          <DeliveryModalContent data={delivery} />
        </Modal>
      )}
      {open && (
        <SidePanel title="Nouvelle Livraison" open={open} setOpen={setOpen}>
          <CreateDeliveryForm setOpen={setOpen} />
        </SidePanel>
      )}
      {editOpen && (
        <SidePanel title="Modifier Livraison" open={editOpen} setOpen={setEditOpen}>
          <EditDeliveryForm setOpen={setEditOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Deliveries;
