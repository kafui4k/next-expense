import styled from "@emotion/styled";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background: white;
  border: none;
  border-bottom: 1px solid lightgrey;
  padding: 10px;

  @media (max-width: 640px) {
    display: flex;
  }
`;

export const HamBurgerMenuAndBreadCrumbContainer = styled.div`
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
`;

export const HamBurgerMenuContainer = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
    margin-right: -5rem;
  }
`;

export const HamBurgerMenu = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;

    .active {
      display: block;
    }
  }
`;

export const SideBar = styled.div`
  display: flex;
  width: 280px;
  padding: 20px;
  flex-direction: column;
  gap: 3rem;
  background: #0b1b34;
  height: 100vh;
  color: whitesmoke;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const SideBarAvatarGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowDownIconContainer = styled.button`
  position: absolute;
  top: 3rem;
  right: 3.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const SidebarAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0;
  font-size: 12px;

  &:hover .ArrowDownIconContainer {
    display: block;
  }
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 12px;
  font-weight: bold;
  color: #e0ded9;

  &:hover {
    color: #fff;
  }
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
`;

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
  justify-content: center;
  left: 4.5rem;
  bottom: 0;
  font-size: 11px;
`;

export const NavDropdown = styled.div`
  position: absolute;
  top: 5rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #cae3f9;
  color: black;
  font-size: 16px;
  width: 100%;
  height: 280px;
  border-radius: 0.5rem;
`;

export const LinkName = styled.a`
  cursor: pointer;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

export const LineWrapper = styled.div`
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem /* 8px */;
`;
