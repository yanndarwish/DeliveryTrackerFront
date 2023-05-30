import { useState } from 'react';
import { useAppSelector } from 'renderer/redux/hooks';
// utils
import { groups } from 'renderer/mock';
import { groupColumns } from 'renderer/tableColumns';
// components
import EmptyMessage from 'renderer/components/globals/EmptyMessage';
import PageContainer from 'renderer/components/globals/PageContainer';
import PageHeader from 'renderer/components/globals/PageHeader';
import SidePanel from 'renderer/components/globals/SidePanel';
import Table from 'renderer/components/globals/Table/Table';
import CreateGroupForm from 'renderer/components/CreateGroupForm';

const Groups = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const user = useAppSelector((state) => state.user.user);

  const handleClick = (id: string) => {
    getSingleGroup(id)
  };

  const getSingleGroup = (id:string) => {
    let group = groups.filter(group => group._id === id)[0]
    console.log(group)
  }

  console.log(groups);

  return (
    <PageContainer>
      <PageHeader
        title="Groupes"
        onClick={
          groups.filter((group) => group.createdBy === user._id).length
            ? () => setOpen(true)
            : undefined
        }
      />
      {groups.filter((group) => group.createdBy === user._id).length ? (
        <Table
          name="groups"
          columns={groupColumns}
          data={groups.filter((group) => group.createdBy === user._id)}
          onClick={handleClick}
        />
      ) : (
        <EmptyMessage
          message="Vous n'avez aucun groupe pour le moment, ajoutez-en un nouveau !"
          onClick={() => setOpen(true)}
        />
      )}
      {open && (
        <SidePanel title="Nouveau Groupe" open={open} setOpen={setOpen}>
          <CreateGroupForm setOpen={setOpen} />
        </SidePanel>
      )}
    </PageContainer>
  );
};

export default Groups;
