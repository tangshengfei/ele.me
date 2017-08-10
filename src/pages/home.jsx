import React, {Component} from 'react';
import Header from "../components/header";
import Container from "../components/container";
import Footer from "../components/footer";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>主页</h2>
                <Header />
                <Container />
                <Footer />
            </div>
        )
    }
}
