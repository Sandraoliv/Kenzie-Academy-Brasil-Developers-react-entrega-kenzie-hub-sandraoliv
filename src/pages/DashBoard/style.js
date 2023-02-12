import styled from "styled-components";
export const StyledMain = styled.main`
  background-color: var(--grey-3);
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 700px;
  margin: 0 auto;
  gap: 30px;

  div {
    gap: 20px;
    display: flex;
    width: 100%;
    height: 131px;

    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-2);

    @media (min-width: 768px) {
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      align-self: center;
    }
  }

  h1 {
    color: #f8f9fa;
    font-size: 1.12rem;

    background-color: var(--grey-3);
  }
  p {
    background-color: var(--grey-3);
    font-size: 0.75rem;
    color: #868e96;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  background-color: var(--grey-3);
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
  button {
    color: var(--grey-0);
    background-color: var(--grey-2);
    width: 55.49px;
    height: 32px;
    border: none;
    border-radius: 6px;
  }

  img {
    width: 93px;
    height: 14px;
    background-color: var(--grey-3);
  }
`;
