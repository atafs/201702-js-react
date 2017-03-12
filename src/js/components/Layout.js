import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            productName: "",
            productNumber: "",
        };
    }

    changeProductNumber(productNumber) {
        this.setState({productNumber});
    }

    changeProductName(productName) {
        this.setState({productName});
    }

    render() {
        return (
            <div>
                <Header product={this.state.product}
                        productName={this.state.productName}
                        productNumber={this.state.productNumber}
                        changeProductNumber={ ::this.changeProductNumber}
                        changeProductName={ ::this.changeProductName}

                />
                <Footer />
            </div>
        );
    }
}
