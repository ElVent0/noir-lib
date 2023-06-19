import styled from "styled-components";

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(36, 36, 36, 0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const Modal = styled.div`
  width: 540px;
  height: 381px;
  background: var(--bg-grey);
  border-radius: 10px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: transparent;
  & > svg {
    font-size: 20px;
    color: var(--text-main);
    transition: 0.3s;
    &:hover,
    &:focus {
      color: var(--text-main-transparent);
    }
  }
`;

export const Logout = styled.button`
  font-size: 16px;
  line-height: 19px;
  /* background-color: var(--pure-white);
  color: var(--nav-black-transparent); */
  background-color: ${(prop) =>
    prop.isActive ? "var(--accent)" : "var(--hover-grey)"};
  color: ${({ isActive, themeType }) =>
    isActive && themeType ? "var(--pure-white)" : "var(--nav-black)"};
  height: 36px;
  align-items: flex-end;
  border-radius: 10px;
  padding: 6px 16px 6px 8px;
  display: flex;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  & > svg {
    font-size: 23px;
    margin-right: 7px;
    color: var(--accent);
  }
  &:hover,
  &:active {
    background-color: ${(prop) =>
      prop.isActive ? "var(--accent)" : "var(--element-grey)"};
  }
`;

export const Profile = styled.div`
  width: 50%;
  padding-top: 60px;
  padding: 18px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  text-align: center;
  color: var(--text-main);
  font-size: 16px;
  margin-bottom: 6px;
`;

export const UserMail = styled.p`
  text-align: center;
  color: var(--text-main);
  font-size: 14px;
`;

export const Statistics = styled.div`
  width: 50%;
  background-image: url(${(props) => props.path});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;
