import React from "react";  
import { Form } from "react-bootstrap";
import styles from '../style.module.css'
import ParamsForm from "./ParamsForm";

const ApiDesign = () =>{


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
ApiDesign.whyDidYouRender = true

export default ApiDesign