import React from "react";

export default class ProductName extends React.Component {
    render() {
        return (
            <h3>{this.props.productName}: {this.props.productNumber}</h3>
        );
    }
}
