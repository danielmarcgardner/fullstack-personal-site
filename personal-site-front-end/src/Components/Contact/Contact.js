import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './Contact.css';

const Contact = () => (
  <div id="contacthero">
    <Container>
      <h1 id="contactheroheader">Contact</h1>
      <Grid columns={2} centered textAlign="center" stackable>
        <Grid.Row>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <div className="contactdivs">
              <a href="mailto:daniel.marc.gardner@gmail.com">
                <h3>Email Me</h3>
                <p>daniel.marc.gardner@gmail.com</p>
              </a>
            </div>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <div className="contactdivs">
              <a href="https://github.com/danielmarcgardner">
                <h3>GitHub</h3>
                <p>@danielmarcgardner</p>
              </a>
            </div>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <div className="contactdivs">
              <a href="https://www.linkedin.com/in/danielmarcgardner/">
                <h3>LinkedIn</h3>
                <p>@danielmarcgardner</p>
              </a>
            </div>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <div className="contactdivs">
              <a href="https://twitter.com/danielmgardner1">
                <h3>Twitter</h3>
                <p>@danielmgardner1</p>
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default Contact;
