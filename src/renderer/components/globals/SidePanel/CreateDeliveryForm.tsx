export interface ICreateDeliveryProps {
  setOpen: (state: Boolean) => void;
}

const CreateDeliveryForm = (props: ICreateDeliveryProps) => {
  return (
    <div>
      {/* content */}

      {/* footer */}
      <div className="flex justify-end gap-6 ">
        <button
          //   onClick={() => handleCancel()}
          className="btn btn-ghost"
        >
          Annuler
        </button>
        <button
          //   onClick={() => handleSubmit()}
          className="btn btn-primary"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default CreateDeliveryForm;
