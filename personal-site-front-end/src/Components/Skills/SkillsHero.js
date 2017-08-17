import React from 'react';
import { Grid } from 'semantic-ui-react';
import FrontEndSkills from './FrontEndSkills';
import BackEndSkills from './BackEndSkills';
import OtherSkills from './OtherSkills';
import './Skills.css';

const SkillsHero = () => (
  <div id="skillshero">
    <div className="container">
      <h1 id="skillsmainheader">Skills </h1>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <FrontEndSkills />
          </Grid.Column>
          <Grid.Column>
            <BackEndSkills />
          </Grid.Column>
          <Grid.Column>
            <OtherSkills />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

export default SkillsHero;
