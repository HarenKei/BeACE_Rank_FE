import { ChangeEvent } from "react";
import styled from "styled-components";


interface SelectOption {
  value: number | string;
  name: string
}

interface Props {
  selectOption : SelectOption[];
  setOption: React.Dispatch<React.SetStateAction<number>>;
}

const SelectBox = ({selectOption, setOption} : Props) => {
  const onChangeHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setOption(parseInt(e.target.value));
  }

  return(
    <SelectStyle onChange={onChangeHandler}>
      {selectOption.map((item, index) => (
        <option key={index} value={item.value}>{item.name}</option>
      ))}
    </SelectStyle>
  );
};

const SelectStyle = styled.select`
  width: 8rem;
  height: 2rem;
  border-radius: 3rem;
  border: 2px solid #1e98fd;

  color: #1e98fd;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
`;



export default SelectBox;