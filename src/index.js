import React from 'react';
import PropTypes from 'prop-types';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootbox from 'bootbox';

function Bootbox(props) {
    
    const balert = () => {
        bootbox.alert(props.message)
    }

    const bconfirm = () => {
        bootbox.confirm({
            message: props.message,
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-primary'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: result => {
                if(result){
                    props.onSuccess()
                } else {
                    props.onCancel()
                }
            }
        });
    }
    
    if(props.show){
        switch (props.type) {
            case "alert":
                balert();
                break;
            case "confirm":
                bconfirm();
                break; 
            default:
            break;
        }
    }
    return null
}

Bootbox.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onSuccess: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(null)
    ]),
    onCancel: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(null)
    ])
}


export default Bootbox;