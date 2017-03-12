import React from "react";

import Product from "./Header/Product";


export default class Header extends React.Component {
  handleChangeInput(e) {
      const productNumber = e.target.value;
      this.props.changeProductNumber(productNumber);
  }

  handleChangeSelect(e) {
      const productName = e.target.value;
      this.props.changeProductName(productName);
  }

  handleChangeButton(e) {
      const productName = this.props.productName
      const productNumber = this.props.productNumber
      alert(productName + productNumber);
  }

  render() {
      return (
            <div>
                <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                  <thead>
                    <tr>
                      <th class="mdl-data-table__cell--non-numeric">Produto</th>
                      <th>Quantidade</th>
                      <th>Validação</th>
                      <th>Adicionar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="mdl-data-table__cell--non-numeric">
                          <select value={this.props.productName} onChange={ ::this.handleChangeSelect}>
                              <option value="bolo-caco-80g">Bolo do Caco 80g</option>
                              <option value="bolo-caco-100g">Bolo do Caco 100g</option>
                              <option value="bolo-caco-150g">Bolo do Caco 150g</option>
                              <option value="bolo-caco-270g">Bolo do Caco 270g</option>
                          </select>
                      </td>
                      <td>
                          <input  value={this.props.productNumber}
                                  placeholder="Numero Produtos Vendidos"
                                  onChange={ ::this.handleChangeInput} />
                      </td>
                      <td>
                          <Product productName={this.props.productName} productNumber={this.props.productNumber}/>
                      </td>
                      <td>
                          <button type="button"
                                  onclick={ ::this.handleChangeButton}
                                  class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                              <i class="material-icons">add</i>
                          </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        );
    }
}
