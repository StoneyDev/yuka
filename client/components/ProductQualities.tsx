import React from 'react';
import { getQualityDetails } from "../utils/quality";

const QUALITIES = {
    proteins: {
        label: 'Protéines',
        icon: 'fa-fish'
    },
    fibers: {
        label: 'Fibres',
        icon: 'fa-leaf'
    },
    saturatedFats: {
        label: 'Graisses saturées',
        icon: 'fa-tint'
    },
    sugar: {
        label: 'Sucre',
        icon: 'fa-candy-cane'
    },
    salt: {
        label: 'Sel',
        icon: 'fa-cube'
    },
    additives: {
        label: 'Additifs',
        icon: 'fa-atom'
    },
    calories: {
        label: 'Calories',
        icon: 'fa-fire'
    }
};

export default class ProductQualities extends React.Component {

    renderItem (quality) {
        const value = this.props.nutrition[quality];

        if (!value) {
            return null;
        }

        const qualityDetail = getQualityDetails(quality, value);

        return (
            <div className={'ProductQualities--list-item'}>
                <div className={'ProductQualities--list-item-icon'}>
                    <i className={`fas ${QUALITIES[quality].icon}`}></i>
                </div>
                <div className={'ProductQualities--list-item-icon-desc'}>
                    <div className={'ProductQualities--list-item-icon-desc-label'}>
                        { QUALITIES[quality].label }
                    </div>
                    <div className={'ProductQualities--list-item-icon-desc-quality'}>
                        { qualityDetail.label }
                    </div>
                </div>
                <div className={'ProductQualities--list-item-value'}>
                    <div className={'ProductQualities--list-item-value-number'}>
                        {value}g
                    </div>
                    <div className={`ProductQualities--list-item-value-circle ${qualityDetail.quality}`} />
                </div>
            </div>
        );
    }

    render () {
        return (
            <div className={'ProductQualities--container'}>
                <div className={'ProductQualities--header'}>
                    <div className={'ProductQualities--header-qualities'}>
                        Qualités
                    </div>
                    <div className={'ProductQualities--header-quality'}>
                        pour 100g
                    </div>
                </div>
                <div className={'ProductQualities--list-container'}>
                    { this.renderItem('proteins')}
                    { this.renderItem('fibers')}
                    { this.renderItem('saturatedFats')}
                    { this.renderItem('sugar')}
                    { this.renderItem('salt')}
                    { this.renderItem('calories')}
                </div>
            </div>
        );
    }
}