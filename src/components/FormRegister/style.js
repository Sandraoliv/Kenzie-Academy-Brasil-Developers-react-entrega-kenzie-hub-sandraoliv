import styled from "styled-components";
export const StyledFomRegister = styled.form`
  width: 100%;
  justify-content: space-between;
  height: auto;
  gap: 10px;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    width: 90%;
    gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: var(--grey-3);
    font-size: 0.5rem;
    p {
      color: var(--grey-0);
    }
  }

  input {
    width: 100%;
    gap: 20px;
    height: 38.38px;
    border: none;
    color: var(--grey-0);
    background-color: var(--grey-2);
    padding: 4px 10px;
    height: 43px;
  }
  label {
    background-color: var(--grey-3);
    color: var(--grey-1);
  }
  select {
    background-color: var(--grey-2);
    width: 90%;
    padding: 0 11px;
    height: 38.38px;
    border: none;
    color: var(--grey-1);
    margin: 10px 0;
  }

  select > option {
    background-color: var(--grey-2);
  }
  button {
    background-color: var(--color-secondary);
    width: 90%;
    color: var(--grey-0);
    height: 38.38px;
    border: none;
  }
`;
