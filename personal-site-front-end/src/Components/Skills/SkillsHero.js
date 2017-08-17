import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import FrontEndSkills from './FrontEndSkills';
import BackEndSkills from './BackEndSkills';
import OtherSkills from './OtherSkills';
import './Skills.css';

const SkillsHero = () => (
  <div id="skillshero">
    <Container>
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
    </Container>
  </div>
);

export default SkillsHero;
