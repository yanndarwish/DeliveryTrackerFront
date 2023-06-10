import { useState } from 'react';
import Modal from '../../Modal/Modal';

export interface IEditGroupProps {
  setOpen: (state: Boolean) => void;
}

const EditGroupForm = (props: IEditGroupProps) => {
  const [modalOpen, setModalOpen] = useState<Boolean>(false);

  const handleDeleteClick = () => {
    setModalOpen(true);
  };

  const handleDelete = () => {
    console.log("delete")
    props.setOpen(false)
  }

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
          title="Supprimer Groupe"
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

export default EditGroupForm;
