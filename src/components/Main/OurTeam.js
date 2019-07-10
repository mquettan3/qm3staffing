import React, { Component } from 'react';
import '../../assets/css/main.css';
import TeamMember from './TeamMember.js';

import SusanPortrait from '../../assets/images/SusanPortrait.jpg';

export default class OurTeam extends Component {
    render() {
      return (
        <div id="ourteam" className="container">
          <h1 className="text-center mt-4">Our Team</h1>
          <div className="separator"></div>
          <TeamMember
          fullName="Susan Quettan"
          title="CEO"
          bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihialal. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium, provident culpa saepe."
          facebook="https://www.facebook.com/susan.quettan"
          linkedin="https://www.linkedin.com/in/susan-gall-quettan-bb6552189/"
          portrait={SusanPortrait}
          />
          <br />
          <TeamMember
          fullName="Lisa Walker"
          title="Head of HR"
          bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihialal. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium, provident culpa saepe."
          email="mailto:lwalker@qm3us.com"
          facebook="https://www.facebook.com/susan.quettan"
          linkedin="https://www.linkedin.com/in/susan-gall-quettan-bb6552189/"
          portrait={SusanPortrait}
          />
          <br />
        </div>
      )
    }
};