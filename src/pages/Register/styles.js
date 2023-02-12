import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: var(--grey-3);
  width: 90%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 370px;
    height: 891.19px;
  }

  img {
    width: 104px;
    height: 14px;
  }

  h1 {
    color: var(--grey-0);
    font-size: 0.8rem;
    background-color: var(--grey-3);
  }
  p {
    background-color: var(--grey-3);
    color: var(--grey-1);
    font-size: 0.5rem;
  }
  form {
    width: 100%;

    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      background-color: var(--grey-3);
      gap: 6px;
      font-size: 0.5rem;
      p {
        color: rebeccapurple;
      }
    }
  }
  input {
    width: 263.79px;
    height: 38.38px;
    border: none;
    background-color: var(--grey-2);
    padding: 0 6px;
  }
  label {
    background-color: var(--grey-3);
    color: var(--grey-1);
  }
  select {
    background-color: var(--grey-2);
    width: 263.79px;
    height: 38.38px;
    border: none;
    color: var(--grey-1);
    margin: 10px 0;
  }
  option {
    background-color: var(--grey-2);
  }
  button {
    background-color: var(--color-secondary);
    width: 263.79px;
    color: var(--grey-1);
    height: 38.38px;
    border: none;
    @media (min-width: 768px) {
      width: 72%;
    }
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
  }
`;
