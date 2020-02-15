import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Sucesso" />
                    <h1>Obrigado pelo seu cadastro no nosso banco de dados</h1>
                    <p>Você irá receber um e-mail, com algumas instruções logo logo</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
