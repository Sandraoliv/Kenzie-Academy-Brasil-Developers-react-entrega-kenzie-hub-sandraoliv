import styled from "styled-components";
export const StyledMain = styled.main`
  width: 100%;
  height: 60%;
  padding: 0px 20px;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  margin: 0 auto;
  gap: 14px;

  img {
    width: 104px;
    height: 14px;
  }

  @media (min-width: 768px) {
    width: 400px;
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
