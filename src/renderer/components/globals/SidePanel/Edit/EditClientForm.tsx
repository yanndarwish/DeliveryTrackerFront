import { useState } from 'react';
import Modal from '../../Modal/Modal';
import { Client } from 'renderer/interfaces';

export interface IEditClientProps {
  setOpen: (state: Boolean) => void;
  client: Client | null
}

const EditClientForm = (props: IEditClientProps) => {
  const [modalOpen, setModalOpen] = useState<Boolean>(false);

  const handleDeleteClick = () => {
    setModalOpen(true);
  };

  const handleDelete = () => {
    console.log("delete")
    props.setOpen(false)
  }

  console.log(props.client)

  return (
    <div>
      {/* content */}

      {/* footer */}
      <div className="flex justify-end gap-6 ">
        <button onClick={() => handleDeleteClick()} className="btn btn-ghost">
          Supprimer
        </button>
        <button
          //   onClick={() => handleSubmit()}
          className="btn btn-primary"
        >
          Modifier
        </button>
      </div>
      {modalOpen && (
        <Modal
          title="Supprimer Client"
          open={modalOpen}
          setOpen={setModalOpen}
          setEditOpen={props.setOpen}
          type="delete"
          action={handleDelete}
        />
      )}
    </div>
  );
};

export default EditClientForm;
