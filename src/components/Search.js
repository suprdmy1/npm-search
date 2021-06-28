import React from 'react';
import { Input, Divider } from 'antd';
import { requestSuggestions } from '../api/api';
import { useDispatch } from 'react-redux';
const { Search } = Input;
const styles = {
    autocomplete: {
        margin: 20,
    },
    searchContainer: {
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    icon: {
        fontSize: 32
    }
};
/**
* Search Form Component
*/
const SearchForm = () => {
    const dispatch = useDispatch();
    return (
        <>
        <div style={styles.searchContainer}>
            <Search
                style={styles.autocomplete}
                placeholder="Search NPM"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={(value) => requestSuggestions(value, dispatch)}
            />
        </div>
        <Divider />
        </>
    )
};

export default SearchForm;