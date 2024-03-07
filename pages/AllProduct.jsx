import React from 'react'
import { useRef, useState } from 'react' 
import Checkbox from '@/components/store/checkbox'
import Dp from '@/components/store/dp'

const AllProduct = () => {

  return (
    <div class="px-20">
      <p>Shop {'>'} AllProducts</p>
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <Dp cName="Product Categories">
              <Checkbox/>
            </Dp>
            <Dp cName="Filter by Price"></Dp>
            <Dp cName="Filter by Color"></Dp>
            <Dp cName="Filter by Size"></Dp>
          </div>
          <div class="col-span-3"></div>
        </div>
      </div>
  )
}

export default AllProduct