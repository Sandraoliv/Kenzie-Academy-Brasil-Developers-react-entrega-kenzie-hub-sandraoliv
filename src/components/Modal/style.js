import styled from "styled-components";

export const StyledModal = styled.div`
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
    height: 278px;
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
    padding: 0 13px;
    background-color: var(--grey-2);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: inherit;
    padding: 7px 14px 14px;
    background-color: var(--grey-3);
  }

  div {
    background-color: var(--grey-3);
    height: auto;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    font-size: 0.75rem;
    color: var(--grey-0);
  }
  p {
    color: var(--grey-0);
    width: max-content;
    background-color: transparent;
    font-size: 0.5rem;
  }

  button {
    color: var(--grey-1);
    font-size: 1.2rem;
    font-family: "nunito", sans-serif;
    width: 32px;
    height: 32px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
  }

  input {
    width: 100%;
    background-color: var(--grey-2);
  }

  label {
    width: max-content;
    align-self: flex-start;
    background: rgba(18, 18, 20, 0.5);
    color: var(--grey-0);
    font-size: 0.56rem;
    margin-left: 12px;
    background-color: transparent;
  }

  select {
    cursor: pointer;
    height: 38.5px;
    width: 95%;
    align-self: center;
    color: var(--grey-1);
    background-color: var(--grey-2);
    border-radius: 4px;
    padding: 0 8px;
  }
  .buttonSubmit {
    background-color: var(--color-primary);
    width: 95%;
    height: 44.5px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-self: center;
    align-items: center;
    color: var(--grey-0);
  }

  @media (min-width: 769px) {
    form {
      background: rgba(18, 18, 20, 0.5);
      height: inherit;
      padding: 7px 14px;
      background-color: var(--grey-3);
      justify-content: space-evenly;
    }
    .modal {
      width: 369px;
      height: 342px;
      background-color: var(--grey-3);
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
