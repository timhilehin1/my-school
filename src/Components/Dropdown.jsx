import {React, useState} from 'react'
import { DropdownItems } from './NavItems'


function Dropdown() {

    const [display, setDisplay] = useState(true)
    return (
        <section className='z-1'>
            <ul className={ display ? 'dropdown w-auto px-2.5 py-2 leading-4' : 'hidden' } onClick={()=>setDisplay(!display)}>
                {DropdownItems.map(el => {
                    return <li className='dropdown-Items ' key={el.id}>{ el.title }</li>
                })}
          </ul>
        </section>
    )
}

export default Dropdown
