export interface IPageContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

const PageContainer = (props: IPageContainerProps) => {
  return (
    <div className="relative h-full flex flex-col pt-8 lg:pt-0 gap-y-8">
      {props.children}
    </div>
  );
};

export default PageContainer;
