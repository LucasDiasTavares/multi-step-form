import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    next = e => {
        e.preventDefault();
        //Process my form, send my data to my API
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName,
            lastName,
            email,
            occupation,
            city,
            bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmação dos dados" />
                    <List>
                        <ListItem
                            primaryText="Nome"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Sobrenome"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Profissão"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="Cidade"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Resumo"
                            secondaryText={bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Voltar"
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Confirmar"
                        primary={true}
                        style={styles.button}
                        onClick={this.next}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm
