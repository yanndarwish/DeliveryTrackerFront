import { IoMdAdd } from 'react-icons/io';

export interface IPageHeaderProps {
  title: string;
  onClick?: () => void;
}

const PageHeader = (props: IPageHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="h2">{props.title}</h1>
      {props.onClick ? (
        <button
          className="btn btn-circle"
          onClick={() => props.onClick?.()}
          autoFocus
        >
          <IoMdAdd size={24} />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default PageHeader;
