import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import userService from "../../services/userService";
import UserCard from "../../components/UserCard";
import {
  TitleEventsLh1,
  HeaderBackground,
} from "../../styles/styledComponents";

import { GeneralBackground } from "../../styles/commonStyle";

class UserLikeEvents extends Component {
  state = {
    user: {},
    loading: true,
  }

  async componentDidMount() {
    const { user } = this.props;
    const userId = user._id;


    try {
      const user = await userService.getUserByIdAndLikes(userId);

      this.setState({
        user,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { user, loading } = this.state;
    const { theme } = this.props;

    return (
      <div>
        <HeaderBackground>
          <TitleEventsLh1>Events I like</TitleEventsLh1>
        </HeaderBackground>
        <GeneralBackground background={theme}>
          {loading && <div>loading...</div>}
          {!loading && <UserCard user={user} />}
        </GeneralBackground>
      </div>
    );
  }
}

export default withAuth(withTheme(UserLikeEvents));