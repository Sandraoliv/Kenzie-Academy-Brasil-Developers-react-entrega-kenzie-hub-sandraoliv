import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: var(--grey-3);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;

  div {
    gap: 20px;
    display: flex;
    width: 100%;
    height: 160px;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
    background-color: var(--grey-3);
    border: 2px solid var(--grey-2);

    @media (min-width: 768px) {
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      align-self: center;
    }

    h1 {
      color: #f8f9fa;
      font-weight: 700;
      font-size: 1.12rem;
      background-color: var(--grey-3);
    }
  }
  p {
    background-color: var(--grey-3);
    font-size: 1rem;
    font-weight: 700;
    color: #868e96;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  background-color: var(--grey-3);
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  height: 115px;
  @media (min-width: 768px) {
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  button {
    color: var(--grey-0);
    background-color: var(--grey-2);
    width: 55.49px;
    height: 32px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }

  img {
    width: 93px;
    height: 14px;
    background-color: var(--grey-3);
  }
`;
