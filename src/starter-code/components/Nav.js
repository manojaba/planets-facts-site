import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h1>THE PLANETS</h1>
            <div className='font-antonio font-semibold text-xl'>
                <p><Link to='/'>MERCURY</Link></p>
                <p><Link to='/venus'>VENUS</Link></p>
                <p><Link to='/earth'>EARTH</Link></p>
                <p><Link to='/mars'>MARS</Link></p>
                <p><Link to='/jupiter'>JUPITER</Link></p>
                <p><Link to='/saturn'>SATURN</Link></p>
                <p><Link to='/uranus'>URANUS</Link></p>
                <p><Link to='/neptune'>NEPTUNE</Link></p>



            </div>

        </nav>
    )
}

export default Nav