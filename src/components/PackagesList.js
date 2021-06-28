import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Package } from '../components';
const styles = {
    list: {
        display: 'flex',
        justifyContent: "center"
    }
}
/**
* Result list container Component
*/
const PackageList = () => {
    const packages = useSelector(state => state.packages);
    return (
        <div style={styles.list}>
            {
                packages.packageListFetchError &&
                <div>{packages.packageListFetchError}</div>
            }
            {
                packages.packageListLoading &&
                <div><Spin size="large" /></div>
            }
            {
                packages.packagesList.length > 0 &&
                <div>{packages.packagesList.map((item) => {
                    return <Package key={`${item.date}${item.name}`} npmPackage={item} />
                })}</div>
            }
        </div>
    );
}

export default PackageList;