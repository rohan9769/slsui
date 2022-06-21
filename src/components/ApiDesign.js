import React from "react";  
import { Form } from "react-bootstrap";
import styles from '../style.module.css'
import ParamsForm from "./ParamsForm";

const ApiDesign = () =>{

    // const handleMouseEnter = (e) =>{
    //     e.target.style.background = 'grey'
    // }

    // const handleMouseLeave = e => {
    //     e.target.style.background = "white"
    //   }

    return(
        <>
            <div className={styles.formContainer}>
                <Form>
                    <Form.Control className={styles.operationName}   type="text" placeholder="Operation Name"></Form.Control>
                </Form>
            </div>
           
        </>
    )
}

export default ApiDesign