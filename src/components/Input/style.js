import styled from "styled-components";
export const StyledInput = styled.div`
  width: 90%;
  justify-content: center;
  margin: 0 auto;
  gap: 13px;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);
  input {
    width: auto;
    height: 38.5px;
    border: 0.9772px solid var(--grey-0);
    border-radius: 3.20867px;
    color: var(--grey-0);
    padding: 0 10px;
    background-color: var(--grey-2);
    :focus {
      border: 1px solid var(--grey-0);
    }
  }
  label {
    color: var(--grey-0);
    font-size: 0.6rem;
    background-color: var(--grey-3);
  }
`;
