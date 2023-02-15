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
    gap: 14px;
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
    font-size: 0.9rem;
    font-weight: 600;
    background-color: var(--grey-3);
    color: var(--grey-0);
  }
  select {
    background-color: var(--grey-2);
    width: 100%;
    padding: 0 11px;
    height: 38.38px;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--grey-1);
    margin: 10px 0;
    select > div {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  select > option {
    font-size: 0.9rem;
    font-weight: 600;
    background-color: var(--grey-2);
  }
  button {
    background-color: var(--color-secondary);
    width: 100%;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--grey-0);
    height: 38.38px;
    border: none;
  }
`;
