import React from 'react'
import Product from './Product'
import { products } from './data'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>Create & inspire. Psilo is here</h1>
                <p className='pl-desc'>
                    Psilo is a creative portfolio that displays the range that would be applicable to the extending projects in addition to important functionalities
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} image={item.image} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList