import React from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductQualities from "../components/ProductQualities";
import { fetch } from '../utils/api';
import Link from 'next/link';

export default class Product extends React.Component {

    static getInitialProps(context) {
        return new Promise((resolve, reject) => {

            const { barCode } = context.query;

            fetch(`https://api.miw.les2cm.eu/food/${barCode}`)

                .then((response) => {
                    response.json()
                        .then((product) => {
                            return resolve(
                                product.error ? { error: true, barCode } : { product, barCode }
                            );
                        });
                })
                .catch((err) => {
                    console.warn(err);
                    return resolve({ error: true });
                });
        });
    }

    render () {

        if (this.props.error || !this.props.product) {
            return (
                <div>
                    <p>Impossible d'afficher le produit</p>
                    <p>Désirez vous
                        <Link href={`/AddProduct?barCode=${this.props.barCode}`}>
                            <a>Ajouter un produit à la base de données ?</a>
                        </Link>
                    </p>
                </div>
            );
        }

        const {nutrition, additives} = this.props.product;

        return (
            <div>
                <ProductHeader product={this.props.product} />
                <ProductQualities
                    nutrition={nutrition}
                    additives={additives}/>
            </div>
        );
    }
}