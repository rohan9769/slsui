import React, { useEffect, useState } from 'react'
import styles from '../style.module.css'
import {FaInfo,FaFileInvoiceDollar} from 'react-icons/fa'
import ReactTooltip from "react-tooltip";

const Operations = () => {
  const[isToggled,setIsToggled] = useState(true)
  const[paramsList,setParamsList] = useState([{params: ""}])
  useEffect(()=>{
    console.log(paramsList)
    console.log(isToggled)
  },[isToggled])
  const handleParamAdd = () =>{
    setParamsList([...paramsList,{params:""}])
  }

  const handleParamRemove = (index) =>{
    const list = [...paramsList]
    list.splice(index,1)
    setParamsList(list)
  }

  const handleParamsChange = (e,index)=>{
    const{name,value} = e.target
    const list = [...paramsList]
    list[index][name] = value
    setParamsList(list)
  }
  return (
    <div >
      <div className={styles.operationsBtnContainer}>
        {/* Path Param <button type='button' onClick={()=>setIsToggled(!isToggled)} className={styles.operationsBtn}> + </button> */}
      </div>
      {isToggled && paramsList.map((singleParam,index)=>(<div key={index} className={styles.pathParamsFormParentContainer}>
                    <div className={styles.pathParamsFormChildContainer}>
                    <form>
                    <input name='name' value={singleParam.name} onChange={(e)=>handleParamsChange(e,index)} placeholder="Name..." style={{flex : 1 }} type="text"></input>
                    
                    <select>
                        <option>any</option>
                        <option>string</option>
                        <option>number</option>
                        <option>integer</option>
                        <option>array</option>
                    </select>
                    <input placeholder="Description..." style={{flex : 1 }} type="text"></input>
                    {/* <button><FaFileInvoiceDollar></FaFileInvoiceDollar></button> */}
                    <button data-tip data-for="requiredTip"><FaInfo></FaInfo></button>
                    <ReactTooltip id="requiredTip" place="top" effect="float">
                        required
                    </ReactTooltip>
                    <button type='button' className={styles.addParamsBtn} onClick={handleParamAdd}><span>Add Parameter</span></button>
                    <button type='button' className={styles.removeParamsBtn} onClick={()=>handleParamRemove(index)}><span>Remove Parameter</span></button>
                    </form>
                    </div>
            </div>)) }
    </div>
  
  )
}

Operations.whyDidYouRender = true
export default Operations