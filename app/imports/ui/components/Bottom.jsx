import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class Bottom extends React.Component {
  render() {
    return (
        <div id='footer'>
          <Grid container>
            <Grid.Row columns={3}>
              <Grid.Column>
                <List>
                  <li>Lunch <hr/></li>
                  <li>Monday - Friday 11:00 AM - 2:30 PM</li>
                  <li>Sat -Sun 4:00PM</li>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <li>Bar <hr/></li>
                  <li>Monday - Friday 11:00 AM - 2:30 PM</li>
                  <li>Sat -Sun 4:00PM</li>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <li>Dinner <hr/></li>
                  <li>Monday - Friday 11:00 AM - 2:30 PM</li>
                  <li>Sat -Sun Not open</li>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

    );
  }
}
