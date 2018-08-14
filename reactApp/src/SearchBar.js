import React,{Component} from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {input: "", checkbox: false}
	}
	onInputChange(e) {
		this.props.onInputChange(e.target.value)
	}
	onStockChange(e) {
		this.props.onStockChange(e.target.checked)
	}
	render() {
		return (
			<div>
				<input type="text" placeholder="Search" 
					   onChange={(e)=>this.onInputChange(e)}/>
				<input type="checkbox" 
					   onChange={(e)=>this.onStockChange(e)}/>Only show products in stock
			</div>
		)
	}
}

export default SearchBar;