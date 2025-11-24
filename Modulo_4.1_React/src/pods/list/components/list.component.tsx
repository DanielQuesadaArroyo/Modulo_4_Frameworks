import React from "react";
import { Member, TableHeader } from ".";
import * as vm from "../list.vm";

interface Props {
  members: vm.Member[];
}

export const List: React.FC<Props> = (props) => {
  const { members } = props;

  return (
    <>
      <div className="list-user-list-container">
        <TableHeader />
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
      <br></br>
    </>
  );
};
