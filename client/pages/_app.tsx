import React from 'react';
import App, { Container } from 'next/app';
import '../styles/main.scss';
import Header from '../components/Header';
import ScanButton from '../components/ScanButton';

export default class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = { activeViewIndex : 0 };
        this.onChangeActiveView = this.onChangeActiveView.bind(this);
    }

    onChangeActiveView (index) {
        this.setState({activeViewIndex: index});
    }

    // Configuration spécifique à next récupérée sur la documentation.
    // https://github.com/zeit/next.js/#custom-app
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render () {
        const { Component, pageProps, router } = this.props;

        return (
            <Container>
                <Header
                    activeViewIndex={this.state.activeViewIndex}
                    onChangeActiveView={this.onChangeActiveView}
                />
                <div className={'App--content-container'} >
                    <Component
                        {...pageProps}
                        activeViewIndex={this.state.activeViewIndex}
                    />
                </div>
                <ScanButton route={router.route} />
            </Container>
        );
    }
}