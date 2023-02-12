import styled from "styled-components";
export const StyledMain = styled.main`
  background-color: var(--grey-3);
  width: 90%;
  height: 402.69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 14px;

  img {
    width: 104px;
    height: 14px;
  }

  h1 {
    color: white;
    font-size: 0.87rem;
    width: max-content;
    background-color: transparent;
  }
  label {
    color: var(--grey-0);
    font-size: 0.6rem;
    background-color: var(--grey-3);
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
  }
  form > div {
    width: 265px;
    height: 87px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--grey-3);
    p {
      color: rebeccapurple;
      background-color: var(--grey-3);
    }
  }
  input {
    width: 264.66px;
    height: 38.5px;
    border: 1px solid var(--grey-0);
    border-radius: 8px;

    padding: 0 10px;
    background-color: var(--grey-2);
  }
  button {
    background-color: var(--color-primary);
    width: 265.9px;
    height: 38.5px;
    border-radius: 8px;
    color: var(--grey-0);
  }
  .divfooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    background-color: var(--grey-3);
    p {
      font-size: 0.6rem;
      background-color: var(--grey-3);
      color: var(--grey-1);
    }
    button {
      background-color: var(--grey-1);
    }
    a {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    width: 369px;
    height: 502px;

    form {
      width: 100%;
    }

    form > div {
      width: 100%;
      padding: 0 10px;
    }
    input {
      width: 100%;
    }
    button {
      width: 95%;
    }
    .divfooter {
      width: 100%;
      padding: 0 10px;
      gap: 30px;

      button {
        width: 100%;
      }
    }
  }
`;
