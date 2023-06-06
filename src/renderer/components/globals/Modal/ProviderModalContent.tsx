import { Provider } from 'renderer/interfaces';

export interface IProviderModalContentProps {
  data: Provider | null;
}

const ProviderModalContent = (props: IProviderModalContentProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div
        className={`badge ${
          props.data?.active ? 'badge-success' : 'badge-error'
        }`}
      >
        {props.data?.active ? 'Actif' : 'Inactif'}
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="" className="text-base font-semibold">
            Contact
          </label>
          {props.data?.contactName && (
            <p className="text-base capitalize">{props.data?.contactName}</p>
          )}
          {props.data?.contactMail && (
            <p className="text-base capitalize">{props.data?.contactMail}</p>
          )}
          {props.data?.contactPhone && (
            <p className="text-base capitalize">{props.data?.contactPhone}</p>
          )}
        </div>
        {props.data?.headquarter && (
          <div>
            <label htmlFor="" className="text-base font-semibold">
              Siège
            </label>
            <p className="text-base capitalize">{props.data?.headquarter}</p>
          </div>
        )}
        {props.data?.wharehouse && (
          <div>
            <label htmlFor="" className="text-base font-semibold">
              Dépot
            </label>
            <p className="text-base capitalize">{props.data?.wharehouse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderModalContent;
