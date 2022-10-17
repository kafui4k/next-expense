import styled from "@emotion/styled"

export const SideBar = styled.div`
    display: flex;
    width: 20%;
    padding: 20px;
    flex-direction: column;
    background: #0B1B34;
    height: 100vh;
    color: whitesmoke;
`;

export const SidebarAvatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NavItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const InnboxWrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
`;

export const ArticleWrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
`

export const ReportWrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
`;

export const SettingsWrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
`;

export const Footer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
`;