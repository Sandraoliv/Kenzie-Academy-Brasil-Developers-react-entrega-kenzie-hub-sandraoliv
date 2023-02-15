import styled from "styled-components";
export const StyledFom = styled.form`
  gap: 22px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 17px 4px;
  background-color: var(--grey-3);

  h1 {
    color: white;
    font-size: 0.87rem;
    width: max-content;
    background-color: var(--grey-3);
  }

  .divfooter {
    width: 100%;
    height: auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    p {
      font-size: 0.6rem;
      background-color: var(--grey-3);
      color: var(--grey-1);
    }
    button {
      height: 48px;
      width: 95%;
      background-color: var(--grey-1);
    }
  }

  button {
    background-color: var(--color-primary);
    width: 96%;
    height: 48px;
    border-radius: 8px;
    color: var(--grey-0);
  }

  p {
    color: var(--grey-0);
    background-color: var(--grey-3);
  }
`;
