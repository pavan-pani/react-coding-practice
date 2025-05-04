import { useState } from 'react'
import './switch.scss'

const Switch = () =>{

    const [toggle, setToggle] = useState(0)

    return(
        <div className='main'>
            <p className={!toggle && 'active'}>OFF</p>
            <div className='switch'>
                <button 
                    className={toggle ? 'active' : 'item'}
                    onClick={()=>setToggle(!toggle)}
                    />
                <button 
                    className={`${toggle ? 'item' : 'active'}`} 
                    onClick={()=>setToggle(!toggle)}
                    />
            </div>
            <p className={toggle && 'active'}>ON</p>
        </div>
    )
}

export default Switch