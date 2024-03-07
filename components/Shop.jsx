import React, { useContext } from 'react';
import userContext from '@/components/store/userContext';

const Shop = () => {

    const{setDropdown} =  useContext(userContext)

  return (
    <div class=" bg-white shadow-lg "  onMouseLeave={() => setDropdown(false)}>
    <div class ="grid grid-cols-4 py-8 text-sm pl-10 gap-x-10">
      <div class="col-span-1 space-y-3 border-r-2  ">
        <h3 class="text-sm font-bold">Men</h3>
        <button>T-Shirt</button><br/>
        <button>Casual Shirt</button><br/>
        <button>Formal Shirt</button><br/>
        <button>Jackets</button><br/>
        <button>Blazers & Coats</button>
        <h3 class="text-sm font-bold">Indian & Festive Wear</h3>
        <button>Kurtas & Kurta Sets</button><br/>
        <button>Sherwanis</button>
      </div>
      <div class="col-span-1 space-y-3 border-r-2">
        <h3 class="text-sm font-bold">Women</h3>
        <button>Kurtas & Suits</button><br/>
        <button>Sarees</button><br/>
        <button>Ethnic Wear</button><br/>
        <button>Lehenga Cholis</button><br/>
        <button>Jackets</button>
        <h3 class="text-sm font-bold">Western Wear</h3>
        <button>Dresses</button><br/>
        <button>Jumpsuits</button>
      </div>
      <div class="col-span-1 space-y-3 border-r-2">
        <h3 class="text-sm font-bold">Footwear</h3>
        <button>Flats</button><br/>
        <button>Casual Shoes</button><br/>
        <button>Heels</button><br/>
        <button>Boots</button><br/>
        <button>Sports Shoes & Floater</button>
        <h3 class="text-sm font-bold">Product Feactures</h3>
        <button>360 Product Viewer</button><br/>
        <button>Product with Video</button>
      </div>
      <div class="col-span-1 space-y-3">
        <h3 class="text-sm font-bold">Kids</h3>
        <button>T-Shirts</button><br/>
        <button>Shirts</button><br/>
        <button>Jeans</button><br/>
        <button>Trouser</button><br/>
        <button>Party Wear</button><br/>
        <button>Innerear & Thermal</button><br/>
        <button>Track Pants</button><br/>
        <button>Value Pack</button>
      </div>
      </div>
    </div>
    
  )
}

export default Shop