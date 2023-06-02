import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { keyable } from 'renderer/interfaces';

export interface IModalProps {
  children?: React.ReactElement | React.ReactElement[];
  title: String;
  open: Boolean;
  setOpen: (state: Boolean) => void;
  data: keyable;
}

const Modal = (props: IModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  console.log(props.data);
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      props.setOpen(false);
    }
  };

  return (
    // overlay
    <div
      ref={overlayRef}
      onClick={(e) => handleOverlayClick(e)}
      className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50 bg-black/60"
    >
      {/* dialog */}
      <div className="flex flex-col p-8 gap-8 bg-base-100 max-h-[80%] w-[80%] overflow-scroll z-50">
        {/* header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">{props.title}</h2>
          <button
            className="btn btn-circle btn-ghost"
            onClick={() => props.setOpen(false)}
            autoFocus
          >
            <IoMdClose size={24} />
          </button>
        </div>
        {/* content */}
        {Object.keys(props.data).map((key, i) => (
          <div key={i}>
            <label htmlFor="" className="text-base font-medium">
              {key}
            </label>
            {props.data[key] && <p className="text-base">{props.data[key]}</p>}
            {/* <input
              type="text"
              id=""
              name=""
              value={props.data[key]}
              onChange={(e) => (props.data[key] = e.target.value)}
              className="w-full p-2 border border-base-300 rounded-md focus:outline-none focus:border-base-400"
            /> */}
          </div>
        ))}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
