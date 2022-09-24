import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
const AlertMessage = (props) => {
    const [show, setShow] = useState(true);
    if (show) {
    return (
        props.alert !== null && (
            <div className='container my-2'>
               <Alert key={props.alert.type} variant={props.alert.type} onClose={() => setShow(false)} dismissible>{props.alert.msg}</Alert>
            </div>

        )
    )
}
}

export default AlertMessage