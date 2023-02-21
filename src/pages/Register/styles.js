import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: var(--grey-3);
  width: 90%;
  height: 851px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 10px 0;
  margin: 0 auto;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 370px;
    height: 850.19px;
  }

  img {
    width: 104px;
    height: 14px;
  }

  h1 {
    color: var(--grey-0);
    font-size: 0.875rem;
    font-weight: 700;
    background-color: var(--grey-3);
  }
  p {
    background-color: var(--grey-3);
    color: var(--grey-1);
    font-size: 0.75rem;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 117px;
  @media (min-width: 768px) {
    width: 378px;
    margin: 0 auto;
    justify-content: space-between;
  }
  button {
    color: var(--grey-1);
    border-radius: 8px;
    background-color: var(--grey-3);
    width: 79.54px;
    height: 31.95px;
    border: none;
    cursor: pointer;
  }
`;
