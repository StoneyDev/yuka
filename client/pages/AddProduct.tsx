import React from 'react';
import { fetch } from "../utils/api";

export default class AddProduct extends React.Component {

    constructor (props) {
        super(props);
        this.state = { submitDisabled: false };
        this.onSubmit = this.onSubmit.bind(this);
    }

    static async getInitialProps(context) {
        return {barCode: context.query.barCode };
    }

    onSubmit (event) {
        event.preventDefault();
        const { barCode, image } = event.target.elements;
        const data = new URLSearchParams();
        for (const element of event.target.elements) {
            data.append(element.name, element.value);
        }

        this.setState({ submitDisabled: true });
        this.submitImage(image, barCode);

        fetch(
            `https://api.miw.les2cm.eu/food/insert/${barCode.value}`,
            {
                method: 'POST',
                body: data
            })
            .then((response) => {
                response.json()
                    .then((result) => {
                        if (result && result.status === 'ok') {
                            this.setState({ submitSuccessful: true });
                        } else {
                            this.setState({ submitSuccessful: false, submitDisabled: false });
                        }
                    });
            })
            .catch((err) => {
                console.warn(err);
            });
    }

    submitImage (image, barCode) {
        if (!image.files || !image.files.length) {
            return;
        }

        const fileData = new FormData();
        fileData.append('photo', image.files[0]);
        fetch(
            `https://api.miw.les2cm.eu/food/insertPhoto/${barCode.value}`,
            {method: 'POST', body: fileData})
            .then((response) => {
                response.json()
                    .then((result) => {
                        console.log(result);
                    });
            })
            .catch((err) => {
                console.warn(err);
            })
    }

    submitResult () {
        const { submitSuccessful } = this.state;
        if (typeof submitSuccessful === 'undefined') {
            return null;
        }

        return (
            <div className={`AddProduct--result ${submitSuccessful ? 'success' : 'fail'}`}>
                { submitSuccessful ? 'Produit inséré avec succès' : 'Erreur lors de l\'insertion du produit' }
            </div>
        );
    }

    render() {
        const { barCode } = this.props;
        return (
            <div className={'AddProduct--container'}>
                <div className={'AddProduct--title'}>Ajouter un produit</div>

                <form onSubmit={this.onSubmit}>
                    <input
                        type={'number'}
                        name={'barCode'}
                        placeholder={'Code barre*'}
                        defaultValue={barCode}
                        required />
                    <input
                        type={'text'}
                        name={'name'}
                        placeholder={'Nom*'}
                        required />
                    <input
                        type={'text'}
                        name={'brand'}
                        placeholder={'Marque*'}
                        required />
                    <input
                        type={'text'}
                        name={'additives'}
                        placeholder={'Additifs (séparés par une virgule)*'}
                        required />
                    <input
                        type={'number'}
                        name={'fibers'}
                        placeholder={'Fibres*'}
                        required />
                    <input
                        type={'number'}
                        name={'proteins'}
                        placeholder={'Proteines*'}
                        required />
                    <input
                        type={'number'}
                        name={'sugar'}
                        placeholder={'Sucres*'}
                        required />
                    <input
                        type={'number'}
                        name={'saturedFats'}
                        placeholder={'Graisses saturées*'}
                        required />
                    <input
                        type={'number'}
                        name={'colories'}
                        placeholder={'Calories*'}
                        required />
                    <input
                        type={'number'}
                        name={'salt'}
                        placeholder={'Sel*'}
                        required />
                    <input
                        type={'file'}
                        name={'image'}
                        required />

                    { this.submitResult() }

                    <button type={'submit'} disabled={this.state.submitDisabled}>CONTRIBUER</button>
                </form>
            </div>
        );
    }
}