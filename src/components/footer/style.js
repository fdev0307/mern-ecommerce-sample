import styled from "styled-components";

export const Box = styled.div`
  background: black;
  padding: 80px 60px;
  color: white;
  text-align: left;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.span`
  color: lightgray;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
  vertical-align: top;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

export const Social = styled.span`
  border: 1px solid #e6e6e68c;
  padding: 7px;
`;

export const OuterCardStyle = styled.div`
  padding: 0;
`;
export const SubContainerStyle = styled.div`  align-items: center;
`;
export const SubInputStyle = styled.div`
  border-width: 0;
  margin: 0;
`;
export const SubButtonStyle = styled.div`
  border-radius: 0;
  flex-grow: 1;
`;

