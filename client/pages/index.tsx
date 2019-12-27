import React from 'react';

export default class Home extends React.Component {
    render() {
        switch (this.props.activeViewIndex) {
            case 1: return <p>Alternatives</p>; break;
            case 2: return <p>Statistiques</p>; break;
            case 0:
            default: return <p>Liste des produits</p>;
        }
    }
}