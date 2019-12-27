import React from 'react';

export default class HeaderButton extends React.Component {

    onClickButton() {
        alert('clique btn');
    }

    render() {
        return (
            <div className={`Header--button ${this.props.active ? 'HeaderButton--container-active' : ''}`} onClick={this.props.onClick}>
                <i className={`fas ${this.props.icon}`}/>
            </div>
        );
    }
}