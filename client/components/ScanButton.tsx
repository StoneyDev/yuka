import React from 'react';
import Router from 'next/router';

export default class ScanButton extends React.Component {

    openScanner() {
        Router.push('/Scanner');
    }

    render() {
        // Pour ne pas faire le rendu sur les autres pages
        if (this.props.route !== '/') {
            return null;
        }

        return (
            <div
                className={'ScanButton--container'}
                onClick={ this.openScanner }>
                <div className={'ScanButton--icon'}>
                  <i className={'fas fa-barcode'} />
                </div>
            </div>
        );
    }
}
