import React, {Component} from "react";

import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";
class FilterableProductTable extends Component {
	constructor(props){
		super(props);
		this.state = {filterText: "", inStockOnly: false};
		this.onInputChange = this.onInputChange.bind(this);
		this.onStockChanged = this.onStockChanged.bind(this)
	}
	onInputChange(text){
		this.setState({filterText: text})

	}
	onStockChanged(inStockOnly){
		this.setState({inStockOnly: inStockOnly})
	}
	render(){

		return(
			<div>
			<SearchBar filterText={this.state.filterText}
					   inStockOnly={this.state.inStockOnly}
					   onInputChange={this.onInputChange}
					   onStockChanged={this.onStockChanged}/>
			<ProductTable filterText={this.state.filterText} 
						  inStockOnly={this.state.inStockOnly} 
						  products={this.props.products}/>
			</div>
		)
	}
}
export default FilterableProductTable;