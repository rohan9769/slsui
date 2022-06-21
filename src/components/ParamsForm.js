import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from '../style.module.css'
import Operations from './Operations'


const ParamsForm = () => {
    // const [paramsList,setParamsList] = useState([
    //     {params : ""}
    // ])
    const[isToggled,setIsToggled] = useState(false)

  return (
    <div className={styles.paramFormsContainer}>
      <Form>
        <button className={styles.paramFormsBtn}>http://localhost:3000/</button>
        <input style={{flex : 1 }} type="text"></input>
        <button type='button' onClick={()=>setIsToggled(!isToggled)} className={styles.pathParamFormsBtn}>Path Params</button>
        {isToggled && <Operations></Operations>}
      </Form>
      
    </div>
  )
}

export default ParamsForm