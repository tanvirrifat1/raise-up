import React from 'react'
import { getItemsByBIZID } from '../../../utils/previous-tems/fetch'
import Items from './Items'


const PreviousItems = async ({ id }) => {

    const items = await getItemsByBIZID(1)

    return (
        <div>
            <h4>PreviousItems :  {items?.length || 0} </h4>

            <section className='flex flex-col gap-2'>

                <Items items={items} />

            </section>
        </div>
    )
}

export default PreviousItems