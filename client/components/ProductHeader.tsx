import React from 'react';

export default class ProductHeader extends React.Component {
    render () {
        const { images, brand, name } = this.props.product;
        let illustration = '/static/images/product.png';

        if (images && images.length && images[0]) {
            illustration = `https://api.miw.les2cm.eu/static/images/${images[0]}`;
        }

        return (
            <div className={'ProductHeader--container'}>
                <div className={'ProductHeader--image-container'}>
                    <img src={illustration} />
                </div>
                <div className={'ProductHeader--rightCol'}>
                    <div className={'ProductHeader--title'}>
                        { name }
                    </div>
                    <div className={'ProductHeader--brand'}>
                        { brand }
                    </div>
                </div>
            </div>
        );
    }
}