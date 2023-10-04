import styled from "styled-components";
import Menu from "./Menu";
import { menuArray } from "./menuArray";

interface Contents {
  conTitle: string;
  conLink: string;
}

interface Data {
  title: string;
  contents: Array<Contents>;
}


const MainMenu = () => {

  return(
    <MainMenuContainer>
      <MenuContainer>
        {menuArray.map((item : Data) => (
          <Menu key={item.title} title={item.title} contents={item.contents}/>
        ))}
      </MenuContainer>
    </MainMenuContainer>
  );
};

const MainMenuContainer = styled.div`
  width: 1200px;
  border-top: 0.15rem dashed #1e98fd;
  margin-bottom: 6rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;
  
`;

export default MainMenu;