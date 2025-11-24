import React from "react";
import { Character, TableHeader } from ".";
import * as vm from "../list.vm";

interface Props {
  characters: vm.Character[];
}

export const List: React.FC<Props> = (props) => {
  const { characters } = props;

  return (
    <>
      <div className="list-user-list-container">
        <TableHeader />
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      <br></br>
    </>
  );
};
