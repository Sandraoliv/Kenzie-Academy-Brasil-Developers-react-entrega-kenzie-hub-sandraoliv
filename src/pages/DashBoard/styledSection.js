import styled from "styled-components";
export const StyledSection = styled.section`
  align-items: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (min-width: 769px) {
    width: 780px;
    height: 416px;
    border-radius: 4px;
    margin: 0 auto;
  }

  .divSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 1rem;
    }
    button {
      border: none;
      font-size: 1.5rem;
      font-weight: 600;
      width: 36.72px;
      height: 36.56px;
      background-color: var(--grey-2);
      border-radius: 4px;
      cursor: pointer;
      color: var(--grey-0);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
