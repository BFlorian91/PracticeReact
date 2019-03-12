import React from 'react';
import Product from './Product'; 
import products from '../data/vschoolProducts';

export default function App() {
	const productComponents = products.map(productItem => 
		<Product 
			key={productItem.id}
			product={productItem}
		/>	
	)	 
	return (
		<div className="boxOfProducts">
			{productComponents}
		</div>
	)
}
