import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      filterText: '',
      inStockOnly: false,
    }
  }

  handleFilterText = (filterText)=>{
    this.setState({
      filterText:filterText
    })
  }
  handleInstockChange = (inStockOnly)=>{
    this.setState({
      inStockOnly:inStockOnly
    })
  }
  render(){
    return(
      <div className="container" style={{ textAlign: 'center', border: '2px solid #80cbc4'}}>
        <div>
          <h4 style={{ fontSize: '20px'}}>Grocery Products Table - Static React</h4>
        </div>
        <SearchBar 
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterText={this.handleFilterText}
              onInstockChange={this.handleInstockChange}      
        />
        <ProductTable 
              products = {this.props.products}
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  };
}

class SearchBar extends React.Component{
  
  handleFilterText = (e)=>{
    // e.preventDefault();
    this.props.onFilterText(e.target.value);
  }
  handleInstockChange = (e)=>{
    this.props.onInstockChange(e.target.checked);
  }

  render(){
    return(
        <form>
          <input placeholder="Search..." type="text" 
                 value={this.props.filterText} 
                 onChange={this.handleFilterText}
          />
          <label>
            <input type="checkbox" className="filled-in"
              checked={this.props.inStockOnly}
              onChange={this.handleInstockChange}
            />
            <span>Only show in stock products</span>
          </label>
        </form>      
    )
  }
}

class ProductTable extends React.Component{
  render(){
    const allRows = [];
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1) {
        return console.log('keywords: ' + this.props.filterText);
      }
      if (this.props.inStockOnly && !product.stocked) {
        return console.log('Checked?');
      }
      allRows.push(<ProductRow
          product={product}
          key={product.name}
        />)
    });
    return(
      <div>
        <table className="highlight centered">
          <thead>
            <tr>
              <th>Department</th>
              <th>Name</th>
              <th>Price</th>
              <th>Unit</th>
              <th>In stock</th>
            </tr>
          </thead>
          <tbody>{allRows}</tbody>
        </table>
      </div>
    ) //return ends
  }
}


class ProductRow extends React.Component{
  render(){
    // const name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>
    const stocked = this.props.product.stocked ? <span>Yes</span> : <span>No</span>
    return (
      <tr>
        <td>{this.props.product.department}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.unit}</td>
        <td>{stocked}{/*refers to 'const stocked = '*/}</td>
      </tr>
    ) 
  }
}


export default App;