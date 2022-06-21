import React from "react";
import { Button, Form, Tab, Tabs } from "react-bootstrap";
import styles from '../style.module.css'

const TabForms = () =>{
    return(
        <>
            <div className={styles.tabForms}>
                <Tabs defaultActiveKey="first">
                    <Tab eventKey="first" title="GET">
                        {/* <div className={styles.firstTabDiv}>
                            <h6>Description</h6>
                            <input className={styles.operationName} type="text"></input>
                        </div> */}
                        <div style={{ textAlign : 'center' , marginTop : '50px'}}>
                            <Button>+ GET Operation</Button>
                        </div>
                    </Tab>
                    <Tab eventKey="second" title="POST">
                        <div style={{ textAlign : 'center' , marginTop : '50px'}}>
                            <Button>+ POST Operation</Button>
                        </div>
                    </Tab>
                    <Tab eventKey="third" title="PUT">
                        <div style={{ textAlign : 'center' , marginTop : '50px'}}>
                            <Button>+ PUT Operation</Button>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default TabForms