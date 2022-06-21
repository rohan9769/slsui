import React from "react";
import {FaInfo,FaFileInvoiceDollar} from 'react-icons/fa'
import styles from '../style.module.css'
import ReactTooltip from "react-tooltip";
export const PathParamsForm = () =>{
    return(
        <>
            <div className={styles.pathParamsFormContainer}>
                    <input placeholder="Name..." style={{flex : 1 }} type="text"></input>
                    <select>
                        <option>any</option>
                        <option>string</option>
                        <option>number</option>
                        <option>integer</option>
                        <option>array</option>
                    </select>
                    <input placeholder="Description..." style={{flex : 1 }} type="text"></input>
                    <button><FaFileInvoiceDollar></FaFileInvoiceDollar></button>
                    <button data-tip data-for="requiredTip"><FaInfo></FaInfo></button>
                    <ReactTooltip id="requiredTip" place="top" effect="float">
                        Tooltip for the required button
                    </ReactTooltip>
            </div>
        </>
    )
}