import styled from "styled-components";
export const StyledContainer = styled.ul`
  width: 96%;
  min-height: 416.37px;
  display: flex;
  background-color: var(--grey-2);
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  gap: 12px;

  @media (min-width: 769px) {
    width: 99%;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    background-color: transparent;
    color: var(--grey-0);
    font-size: 0.87rem;
    font-weight: 700;
  }
  li {
    background-color: var(--grey-3);
    width: 100%;
    height: 48.73px;
    display: flex;
    padding: 2px 14px;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    justify-content: space-between;
    :hover {
      background-color: var(--grey-2);
    }
  }
  p {
    background-color: transparent;
    font-size: 0.75rem;
    font-weight: 400;
  }

  @media (min-width: 769px) {
    width: 99%;
    overflow-y: hidden;
  }

  li {
    height: 49px;
    width: 90%;
    min-height: 49px;
  }
`;
