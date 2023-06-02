export interface ICreateProviderProps {
  setOpen: (state: Boolean) => void;
}

const CreateProviderForm = (props: ICreateProviderProps) => {
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

export default CreateProviderForm;
