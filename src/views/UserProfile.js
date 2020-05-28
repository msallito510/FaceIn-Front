import React from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import styled from 'styled-components';
import ReactWebcam from "./ReactWebcam";

import {
  // TitleLh1,
  // TitleDh2,
  // TitleDh3,
  HeaderBackground,
  // ProfileBackground,
  // SecondaryWrapperLeft,
  // SecondaryWrapperRight,
  PhotoProfile,
  PhotoContainer,
  StyledLinkDark,
  UserProfileLabelContent,
  HeaderUserProfile
} from "../styles/styledComponents";
import { TitleH1, TitleH2, TitleH3 } from "../styles/commonStyle";
import { PlusCircleIcon, EditIcon, PlayCircleIcon, CameraIcon } from "../styles/icon-style";

const UserProfileBarUl = styled.ul`
osition: relative;
bottom: 0;
left: 0;
height: 100%;
list-style-type: none;
margin: 0;
padding: 0;
z-index: 10;
@media (max-width: 768px) {
height: 3.5em;
width: 100%;
}`;

const MenuBarLi = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin: 0.5em 1.5em 0;
  @media (max-width: 768px) {
    display: inline-block;
    float: left;
  }
`;

const ProfileBackground = styled.div`
  background: ${ (props) => props.background};
  overflow: hidden;
  overflow-y:scroll;
  bottom:-25.5em;
  top: 20rem;
  position: absolute;
  width: 100%;
  padding: 1em 0 2em;
  text-align: center;
  border-radius: 20px;
  `;

const SecondaryWrapperLeft = styled.section`
  position: relative;
  float: left;
  padding: 4em;
  height: 10em;
  width: 11.5em;
  background: ${ (props) => props.backgroundTwo};
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
`;

const SecondaryWrapperRight = styled.section`
  position: relative;
  float: right;
  padding: 4em;
  height: 10em;
  width: 11.5em;
  background: ${ (props) => props.backgroundTwo};
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
`;

const UserProfile = ({ user, theme }) => {


  return (
    <HeaderBackground>
      <HeaderUserProfile>
        <div>
          <TitleH1>{user.username}'s profile</TitleH1>
        </div>
      </HeaderUserProfile>
      <PhotoContainer>
        <PhotoProfile>
          <StyledLinkDark to="/react-webcam">
            <CameraIcon />
          </StyledLinkDark>
        </PhotoProfile>
      </PhotoContainer>
      <ProfileBackground background={theme.background}>
        <SecondaryWrapperLeft backgroundTwo={theme.backgroundTwo}>
          <TitleH2 color={theme.color}>Event</TitleH2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLinkDark to="/add-event" user={user._id}>
                <UserProfileLabelContent>
                  <TitleH3 color={theme.color}>Add</TitleH3>
                  <PlusCircleIcon color={theme.color} />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLinkDark to="/user-events" user={user}>
                <UserProfileLabelContent>
                  <TitleH3 color={theme.color}>Edit</TitleH3>
                  <EditIcon color={theme.color} />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>

              {user ? <StyledLinkDark to="/attend" user={user}>

                <UserProfileLabelContent>
                  <TitleH3 color={theme.color}>Attend</TitleH3>
                  <PlayCircleIcon color={theme.color} />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
          </UserProfileBarUl>
        </SecondaryWrapperLeft>
        <SecondaryWrapperRight backgroundTwo={theme.backgroundTwo}>
          <TitleH2 color={theme.color}>Place</TitleH2>
          <UserProfileBarUl>
            <MenuBarLi>
              {user ? <StyledLinkDark to="/add-place">
                <UserProfileLabelContent>
                  <TitleH3 color={theme.color}>Add</TitleH3>
                  <PlusCircleIcon color={theme.color} />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <StyledLinkDark to={`/places/${user.hasPlace}`}>
                <UserProfileLabelContent>
                  <TitleH3 color={theme.color}>Edit</TitleH3>
                  <EditIcon color={theme.color} />
                </UserProfileLabelContent>
              </StyledLinkDark> : <div></div>}
            </MenuBarLi>
          </UserProfileBarUl>
        </SecondaryWrapperRight>
        <div>
          <ReactWebcam />
        </div>
      </ProfileBackground>
    </HeaderBackground>
  );
};

export default withAuth(withTheme(UserProfile));
