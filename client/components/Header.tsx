 import React from 'react';
 import HeaderButton from "./HeaderButton";

export default class Header extends React.Component {
    render () {
        return (
            <header className={'HeaderButton--container'}>
                <HeaderButton
                    icon={'fa-carrot'}
                    onClick={() => { this.props.onChangeActiveView(0) }}
                    active={this.props.activeViewIndex === 0} />
                <HeaderButton
                    icon={'fa-exchange-alt'}
                    onClick={() => { this.props.onChangeActiveView(1) }}
                    active={this.props.activeViewIndex === 1} />
                <HeaderButton
                    icon={'fa-chart-pie'}
                    onClick={() => { this.props.onChangeActiveView(2) }}
                    active={this.props.activeViewIndex === 2} />
            </header>
        );
    }
}