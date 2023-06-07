import { useRef } from 'react';
import { IoMdClose, IoMdTrash } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';

export interface IModalProps {
  children?: React.ReactElement | React.ReactElement[];
  title: String | undefined;
  open: Boolean;
  setOpen: (state: Boolean) => void;
  editOpen: Boolean;
  setEditOpen: (state: Boolean) => void;
  type: String;
}

const Modal = (props: IModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      props.setOpen(false);
    }
  };

  const handleEditClick = () => {
    props.setEditOpen(true);
    props.setOpen(false);
  };

  return (
    // overlay
    <div
      ref={overlayRef}
      onClick={(e) => handleOverlayClick(e)}
      className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 bg-black/60"
    >
      {/* dialog */}
      <div className="flex flex-col p-8 gap-8 bg-base-100 max-h-[80%] min-w-[20rem] max-w-[80%] overflow-scroll z-50 rounded-[0.5rem]">
        {/* header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium uppercase">{props.title}</h2>
          <button
            className="btn btn-circle btn-ghost"
            onClick={() => props.setOpen(false)}
            autoFocus
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {props.children}
        {/* footer */}
        <div className="flex justify-end items-center">
          <button
              onClick={() => handleEditClick()}
            className="btn btn-warning btn-outline gap-2"
          >
            Modifier
            <BsPencilFill size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
