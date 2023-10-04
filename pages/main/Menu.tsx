import Link from "next/link";
import styled from "styled-components";

interface Contents {
  conTitle: string;
  conLink: string;
}

interface Data {
  title: string;
  contents: Array<Contents>;
}

const Menu = ({ title, contents }: Data) => {
  return (
    <MenuContainer>
      <h1>{title}</h1>
      {
        contents.map((item: Contents) => (
          <Link href={item.conLink} key={item.conTitle}>
            <p>{item.conTitle}</p>
          </Link>
        ))
      }
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: #0096c8;
    font-weight: 700;
    letter-spacing: -0.07rem;
  }

  a {
    text-decoration: none;
    p {
      font-size: 1rem;
      text-decoration: underline;
    }
  }
`;

export default Menu;
