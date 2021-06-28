import React from 'react'
import { Select } from 'antd';
import {
    WRONG_PATH,
    NO_RESULTS,
    BAD_REQUEST,
} from '../constants/appConstants';
const { Option } = Select;

/**
 * Debug mode component
 */
const DebugMode = () => {
    /**
     * OnChange event handler function, fires when any different property was selected in select box
     * @param {string} value Debug options value which was selected
     */
    const onChange = (value) => {
        localStorage.setItem('Simulation', value);
    }
    return (
        <Select
            showSearch
            placeholder="Simulate Error"
            optionFilterProp="children"
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
    );
}

export default DebugMode;