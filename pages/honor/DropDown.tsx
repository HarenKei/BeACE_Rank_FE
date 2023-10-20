import { useState, useEffect, MouseEventHandler } from "react";
import styled from "styled-components";

const Options = [
	{},
	{ value: "grade1", name: "1학년" },
	{ value: "grade2", name: "2학년" },
	{ value: "grade3", name: "3학년" },
];

const DropDown = () => {

	const [grade, setGrade] = useState("");

	const dropDownHandler = (e: any) => { // 적절한 타입을 찾지 못함.
		setGrade((e.target as any).value);
	  };

	const [toggle, setToggle] = useState<boolean>(true);
  const toggleHandler = () => {
    const reverse = !toggle;
    setToggle(reverse)
  }

	useEffect(()=>{
		console.log(grade);
	},[grade]);

	return (
		<DropDownWrapper istoggle={toggle}>
        <h2>{grade}</h2>
        <Select onChange={dropDownHandler}>
          {Options.map((option) => (
            <option
              key={option.value}
              value={option.name} 
            >
              {option.name}
            </option>
          ))}
        </Select>
        <IconSVG
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 14L16 6H4L10 14Z"
            fill="#1e98fd"
          />
        </IconSVG>
      </DropDownWrapper>
	);
};

const DropDownWrapper = styled.div<{istoggle: boolean}>`
    display: flex;
    visibility: ${check=>(check.istoggle ? 'visible' : 'hidden')};
    flex-direction: row;
    margin-top: 1.6rem;

    h2{
      margin-right: 0.5em;
      color: #1e98fd;
    }
`;

const Select = styled.select`
  width: 5rem;
  border: 1px solid #1e98fd;
  border-radius: 1rem;
  -webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
`;

const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;
`;

export default DropDown;