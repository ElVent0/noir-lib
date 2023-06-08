import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  height: 77px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  position: sticky;
  justify-content: space-between;
  top: 0px;
  z-index: 1002;
  border-radius: 0 0 10px 10px;
  background-color: ${(prop) =>
    prop.isFixed ? "var(--pure-white)" : "transparent"};
  padding: ${(prop) => (prop.isFixed ? "0 20px" : "0px")};
  box-shadow: ${(prop) =>
    prop.isFixed ? "0px 10px 24px -14px rgba(0,0,0,0.4)" : "none"};
  animation: ${({ isFixed }) =>
    isFixed ? "headerAnumationOn .3s linear" : "none"};

  @keyframes headerAnumationOn {
    0% {
      background-color: transparent;
      box-shadow: none;
      padding: 0;
    }

    100% {
      background-color: var(--pure-white);
      box-shadow: 0px 10px 24px -14px rgba(0, 0, 0, 0.4);
      padding: 0 20px;
    }
  }
`;

export const Logo = styled.img`
  position: relative;
  top: ${(prop) => (prop.isFixed ? "0px" : "-6px")};
  display: block;
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  color: var(--nav-black);
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black);
  position: relative;
  transition: 0.3s;
  padding: 0px 12px;
  border-radius: 6px;
  &:first-child {
    margin-right: 4px;
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
  &.active {
    color: var(--accent);
  }
`;

export const LoginMenu = styled.div`
  /* margin-left: auto; */
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const Login = styled.button`
  background-color: var(--pure-white);
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black-transparent);
  height: 36px;
  align-items: flex-end;
  border-radius: 10px;
  padding: 6px 16px 6px 8px;
  display: flex;
  transition: 0.3s;
  & > svg {
    font-size: 23px;
    margin-right: 6px;
    color: var(--accent);
  }
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;

export const Logintext = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black-transparent);
`;

export const Profile = styled.button`
  background-color: var(--pure-white);
  font-size: 16px;
  line-height: 19px;
  color: var(--nav-black-transparent);
  height: 36px;
  align-items: flex-end;
  border-radius: 10px;
  padding: 6px 16px 6px 8px;
  display: flex;
  transition: 0.3s;
  &:hover,
  &:active {
    background-color: var(--hover-grey);
  }
`;

export const UserImage = styled.img`
  margin-right: 7px;
  width: 24px;
  height: 24px;
  border-radius: 6px;
`;
