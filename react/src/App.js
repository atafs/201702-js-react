/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable */

import React, {PureComponent, PropTypes} from 'react';

import Checkbox from './Checkbox';
import CheckboxLabel from './CheckboxLabel';
import FormField from './FormField';
import {Textfield, Grid, Cell, List, ListItem, Button, Fab, Icon} from 'react-mdc-web';


export default class App extends PureComponent {
  state = {
    checked: false,
    indeterminate: false,
    changeEventCount: 0
  }

  render() {
    const {checked, indeterminate, status, changeEventCount} = this.state;
    return (
      <main>
        <h1>MDC-Web Checkbox - React Example</h1>
        <FormField>
          <Checkbox id="my-checkbox"
                    labelId="my-checkbox-label"
                    indeterminate={indeterminate}
                    onChange={({target}) => this.setState({
                      changeEventCount: changeEventCount + 1,
                      checked: target.checked,
                      indeterminate: false
                    })}/>
          <CheckboxLabel id="my-checkbox-label" for="my-checkbox">
            The checkbox is currently {this.status()}
          </CheckboxLabel>
        </FormField>
        <div style={{paddingTop: '12px'}}>
          <button onClick={() => this.setState({indeterminate: true})}>Make Indeterminate</button>
        </div>
        <p>{changeEventCount} change events so far</p>
        <Textfield
          floatingLabel="City"
          value={this.state.city}
          onChange={({target : {value : city}}) => {
              this.setState({ city })
            }}
        />
        <br></br><br></br>
        <Textfield
          value={this.state.city}
          onChange={({target : {value : city}}) => {
              this.setState({ city })
            }}
        />
        <br></br><br></br>
        <Grid>
          <Cell col={4}>3</Cell>
          <Cell col={4}>4</Cell>
          <Cell col={4}>4</Cell>
        </Grid>
        <br></br><br></br>
        <List>
          <ListItem>Berlin, Germany</ListItem>
          <ListItem>London, UK</ListItem>
          <ListItem>Strasbourg, France</ListItem>
          <ListItem>Buenos Aires, Argentina</ListItem>
        </List>
        <br></br><br></br>
        <Button
          raised
          primary
          onClick={()=>{
            let { counter } = this.state;
            counter ++;
            this.setState({ counter });
          }}
        >
          Increment
        </Button>
        <br></br><br></br>
        <Fab><Icon name='bolo do caco'/></Fab>
      </main>
    );
  }

  status() {
    if (this.state.indeterminate) {
      return 'indeterminate';
    }
    return this.state.checked ? 'checked' : 'unchecked';
  }
}
