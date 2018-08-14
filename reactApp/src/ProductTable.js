import React,{Component} from "react";
import ProductCategoryRow from "./ProductCategoryRow.js";
import ProductRow from "./ProductRow.js";


class ProductTable extends Component {
	render(){
		let filterText = this.props.filterText;
		let inStockOnly = this.props.inStockOnly;
		let rows =[];
		let lastCategory =null;
		/*this.props.products.forEach((product)=>{

			if(product.name.indexOf(filterText) === -1) {
				return;
			}
			if(inStockOnly && !product.stocked) {
				return;
			}
			if(product.category !== lastCategory) {
				console.log(product.category)
				rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
				rows.push(<ProductRow product={product} key={product.name}/>)
			}
			lastCategory = product.category;
			

		})*/

		rows = this.props.products.map((obj)=> <tr>
			<ProductCategoryRow category={obj.category} key={obj.category}/> 
			<ProductRow product={obj} key={obj.name}/>
			</tr>)

		return(
				<table>
        			<thead>
          				<tr>
            				<th>Name</th>
            				<th>Price</th>
          				</tr>
        			</thead>
        			<tbody>{rows}</tbody>
      			</table>
		)
	}
}

export default ProductTable;