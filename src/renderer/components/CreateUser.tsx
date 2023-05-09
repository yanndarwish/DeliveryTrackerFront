
export interface ICreateUserProps {
  setOpen: (state: Boolean) => void;
}

const CreateUser = (props: ICreateUserProps) => {
  return (
      <div>
        {/* content */}       
        
        {/* footer */}
        <div className="flex gap-6">
          <button
            //   onClick={() => handleSubmit()}
            className="bg-emerald-600 text-white focus:outline-emerald-500 hover:bg-emerald-500 focus:bg-emerald-500 uppercase font-medium py-2 px-4 rounded-md"
          >
            Envoyer
          </button>
          <button
            //   onClick={() => handleCancel()}
            className=" text-emerald-600 border-emerald-600 border-2 hover:text-emerald-500 hover:border-emerald-500 focus:text-emerald-500 focus:outline-emerald-500 uppercase font-medium py-2 px-4 rounded-md"
          >
            Annuler
          </button>
        </div>
      </div>
  );
};

export default CreateUser;
