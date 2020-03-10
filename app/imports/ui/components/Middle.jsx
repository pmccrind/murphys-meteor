import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <div id='middle'>
          <Grid container verticalAlign={'middle'} stlye={{ paddingTop: '50px' }}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' inverted>
                  A traditional downtown saloon and eatery...
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

    );
  }
}
