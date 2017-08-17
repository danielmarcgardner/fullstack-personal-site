import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import AboutMe from './AboutMe';
import './Experience.css';

const Experience = () => (
  <div id="experiencehero">
    <Container>
      <h1 id="experienceheader">About Me</h1>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={8}>
            <AboutMe />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={require('../../Images/daniel.jpg')} size="medium" shape="circular" centered id="aboutmepic" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default Experience;
