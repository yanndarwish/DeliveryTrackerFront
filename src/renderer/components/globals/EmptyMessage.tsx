import { IoMdAdd } from 'react-icons/io';

export interface IEmptyMessageProps {
  message: string;
  onClick?: () => void;
}

const EmptyMessage = (props: IEmptyMessageProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col gap-8">
      <p className="text-center text-xl">{props.message}</p>
      {props.onClick ? (
        <button className="btn btn-circle" onClick={() => props.onClick?.()}>
          <IoMdAdd size={24} />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default EmptyMessage;
