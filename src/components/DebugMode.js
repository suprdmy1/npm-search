import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import {
    WRONG_PATH,
    NO_RESULTS,
    BAD_REQUEST,
    secretCodeTarget
} from '../constants/appConstants';
const { Option } = Select;
/**
 * Debug mode component
 */
const DebugMode = () => {
    const [active, setActive] = useState(false)
    let code = [];
    /**
     * Function which hadle checking secret code
     * @param {number} key entered secret code key
     */
    const checkSecretCode = (key) => {
        if (code.length === 0 && secretCodeTarget[0] == key) {
            code.push(key);
        } else if (code.length < secretCodeTarget.length) {
            code.push(key);
            if (code.join('') === secretCodeTarget) {
                setActive(true);
            }
        } else {
            code = [];
        }
    }
    /**
     * OnChange event handler function, fires when any different property was selected in select box
     * @param {string} value Debug options value which was selected
     */
    const onChange = (value) => {
        localStorage.setItem('Simulation', value);
    };
    /**
     * Function which handle secretCode typing
     * @param {object} event object
     */
    const handleSecretCode = (e) => {
        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            checkSecretCode(e.keyCode <= 57 ? e.keyCode - 48 : e.keyCode - 96);
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleSecretCode);
        return () => {
            window.removeEventListener('keydown', handleSecretCode);
        };
    });
    return (
        <div onKeyDown={handleSecretCode}>
            {
                active &&
                <Select
                    showSearch
                    placeholder="Simulate Error"
                    optionFilterProp="children"
                    defaultValue={localStorage.getItem('Simulation') || null}
                    onChange={onChange}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value={WRONG_PATH}>{WRONG_PATH}</Option>
                    <Option value={NO_RESULTS}>{NO_RESULTS}</Option>
                    <Option value={BAD_REQUEST}>{BAD_REQUEST}</Option>
                    <Option value="DISABLED">DISABLED</Option>
                </Select>
            }
        </div>
    );
}

export default DebugMode;