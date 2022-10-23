import styled from "@emotion/styled";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  padding-right: 2rem;

  ul {
    display: flex;
    list-style: none;
    gap: 0.6rem;
    color: rgb(131, 126, 126);
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    line-height: 0.5rem;
    margin-left: -8rem;
    padding-bottom: 1rem;
  }
`;
