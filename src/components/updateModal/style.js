import styled from "styled-components";

export const StyledUpdateModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 18, 20, 0.5);

  .modal {
    width: 295px;
    height: 273.41px;
    border-radius: 4px;
    background-color: var(--grey-3);
  }

  .modalHeader {
    width: 100%;
    height: 49.97px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 21px;
    background-color: var(--grey-2);
  }
  h1 {
    color: var(--grey-0);
    font-size: 0.68rem;
  }
  .closeModal {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--grey-1);
    font-size: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: inherit;
    padding: 7px 14px;
    background-color: var(--grey-3);
  }
  label {
    width: max-content;
    align-self: flex-start;
    background-color: var(--grey-3);
    color: var(--grey-0);
    font-size: 0.56rem;
    margin-left: 12px;
  }
  div {
    background-color: var(--grey-3);
    height: auto;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
  }
  p {
    width: max-content;
    color: var(--grey-1);
    font-size: 0.5rem;
    background-color: transparent;
  }
  ::placeholder {
    color: var(--grey-1);
  }
  input {
    width: 100%;
    background-color: var(--grey-2);
  }
  select {
    cursor: pointer;
    height: 38.5px;
    width: 95%;
    align-self: center;
    color: var(--grey-1);
    padding: 0 8px;
    background-color: var(--grey-2);
    border-radius: 4px;
  }
  .updateButton {
    width: 163.09px;
    height: 38.37px;
    color: var(--grey-0);
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background-color: var(--color-secondary);
  }
  .removeButton {
    border-radius: 6px;
    border: none;
    width: 78.35px;
    height: 38.37px;
    cursor: pointer;
    color: var(--grey-0);
    background-color: var(--grey-1);
  }
  .divModalFooter {
    display: flex;
    align-content: space-around;
    justify-content: space-around;
    flex-direction: row;
    background-color: var(--grey-3);
    align-items: center;
  }
  @media (min-width: 769px) {
    form {
      background: rgba(18, 18, 20, 0.5);
      height: inherit;
      justify-content: space-evenly;
    }
    .modal {
      width: 369px;
      height: 342px;
    }
    .updateButton {
      width: 178.09px;
      height: 48.37px;
    }
    .removeButton {
      width: 99.35px;
      height: 48.37px;
    }
  }
`;
