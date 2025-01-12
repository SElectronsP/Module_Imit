import React, { useState } from "react";
import styled from "styled-components";
// components
import TrHeadForOL from "../../atoms/TrHeadForOL";
import SelectBtn from "../../atoms/SelectBtn";
import EnrollBtn from "../../atoms/EnrollBtn";
import ModalSelect from "../../atoms/ModalSelect";
import ModalTime from "../../atoms/ModalTime";

function OpenedLect({ lecture, selectLect, enrollLect, StartTime }) {
  const [modal0Open, setModal0Open] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [lecName, setLecName] = useState("");
  const openModal0 = (name) => {
    setModal0Open(true);
    setLecName(name);
  };
  const openModal1 = () => {
    setModal1Open(true);
  };
  const closeModal0 = () => {
    setModal0Open(false);
  };
  const closeModal1 = () => {
    setModal1Open(false);
  };
  function ListBox({ no, num, name, point, prof, time, place, remain }) {
    let color = "#ffffff";
    if (no % 2 === 1) {
      color = "#ffffff";
    } else {
      color = "#f6f6f6";
    }
    return (
      <Tr style={{ backgroundColor: color }}>
        <Td style={{ width: "4rem" }}>{no}</Td>
        <Td style={{ width: "5rem" }}>
          <SelectBtn
            onClick={() => {
              selectLect(no - 1, 1);
              openModal0(name);
            }}
          />
        </Td>
        <Td style={{ width: "4rem" }}>1</Td>
        <Td style={{ width: "21rem" }}>{num}</Td>
        <Td style={{ width: "6rem" }}>
          <EnrollBtn
            onClick={() => {
              enrollLect(no - 1, 1);
              openModal1();
            }}
          />
        </Td>
        <Td style={{ width: "20.925rem" }}>{name}</Td>
        <Td style={{ width: "4rem" }}>{point}</Td>
        <Td style={{ width: "9rem" }}>{prof}</Td>
        <Td style={{ width: "7rem" }}>{time}</Td>
        <Td style={{ width: "8rem" }}>{place}</Td>
        <Td style={{ width: "6rem" }}>{remain}</Td>
        <Td style={{ width: "6rem" }}>0</Td>
        <Td style={{ width: "4rem" }}>abc</Td>
        <Td style={{ width: "6rem" }}>-</Td>
        <Td style={{ width: "12rem" }}>-</Td>
        <Td style={{ width: "5rem" }}>x</Td>
      </Tr>
    );
  }
  const tempArray = [];
  for (let i = 0; i < lecture.length; i++) {
    tempArray.push(lecture[i]);
  }
  const ListItems = tempArray.map((array, index) => (
    <ListBox
      key={index}
      no={array[0]}
      num={array[1]}
      name={array[2]}
      point={array[3]}
      prof={array[4]}
      time={array[5]}
      place={array[6]}
      remain={array[7]}
    />
  ));
  return (
    <OutLineBox>
      <ModalSelect open={modal0Open} close={closeModal0} lecName={lecName} />
      <ModalTime open={modal1Open} close={closeModal1} StartTime={StartTime} />
      <table
        style={{
          borderTop: "0.2rem solid #d4d4d4",
          borderRight: "0.15rem solid #e3e3e3",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <TrHeadForOL />
        </thead>
        <tbody style={{ maxHeight: "20rem" }}>{ListItems}</tbody>
      </table>
    </OutLineBox>
  );
}

export default OpenedLect;

const OutLineBox = styled.div`
  margin-top: 1.5rem;
`;
const Tr = styled.tr`
  font-size: 1.5rem;

  display: flex;
`;
const Td = styled.td`
  height: 3.5rem;
  border-left: 0.15rem solid #e3e3e3;
  border-bottom: 0.15rem solid #e3e3e3;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
