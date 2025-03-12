import React, { useEffect, useState } from 'react';
import productsData from '../api/productsData.json';
import ProductsPageProductsCard
  from '../components/ui/ProductsPageProductsCard';
import useCart from '../contexts/CartContext';

const Products = () => {

  const { addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeOption, setActiveOption] = useState('all')
  const [products, setProducts] = useState(productsData)
  const [filteredData, setFilteredData] = useState([])

  

  useEffect(() => {

    let filter = products;

    if (searchQuery) {
      filter = filter.filter((data) => data.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    if (activeOption !== 'all') {
      filter = filter.filter((data)=> data.category.toLowerCase() === activeOption.toLowerCase())
    }

    setFilteredData(filter)

  }, [searchQuery , activeOption , products])
  

  return (
    <div className="w-full text-black dark:text-white px-4 md:px-8 pb-80 md:pb-60 pt-28 md:pt-32 bg-gradient-to-r from-[#F2F0F1] to-[#E0E7FF] dark:from-[#1E1E1E] dark:to-[#2C2C2C] transition-colors duration-300">
      <div className='w-full justify-between items-center flex gap-2 mb-8'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          placeholder='Search your style'
          className='w-[85%] p-3  rounded-lg bg-white placeholder:text-gray-500 text-black focus:outline-none  '
        />
        <select
          className=" p-3 bg-gray-700  dark:bg-gray-200 dark:text-black flex-1 font-medium  text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={activeOption}
          onChange={(e) => setActiveOption(e.target.value)}
        >
          <option value="all">All</option>
          <option value="t-shirts">T-Shirt</option>
          <option value="kurtis">Kurtis</option>
          <option value="sarees">Saree</option>
        </select>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredData.map((data) => (
            <ProductsPageProductsCard
              key={data.id}
              name={data.name}
              actualPrice={data.actualPrice}
              discountedPrice={data.discountedPrice}
              image={data.image}
              addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;