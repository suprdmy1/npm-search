import React from 'react';
import { Tag, Divider } from 'antd';
import moment from 'moment';
import { BookOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { requestSuggestions } from '../api/api';

const styles = {
    packageContainer: {
        margin: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    keywords: {
        margin: '10px auto 10px'
    },
    authorInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        textAlign: 'left'
    },
    published: {
        color: 'gray'
    },
    pageLink: {
        fontSize: 24,
        marginRight: 5
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        margin: '10px auto 10px'
    }
};

/**
* Package search result component
* @param {object} npmPackage Npm Package Information
*/
const Package = ({ npmPackage }) => {
    const dispatch = useDispatch();
    /**
    * Function which normalize tags list and return list of Tag Components
    * @param {array} tagList Npm Package Information
    */
    const getTags = (tagList) => {
        return (
            <>{
                tagList.map((item) => {
                    return  <Tag key={item} onClick={() => requestSuggestions(item, dispatch)} color="#55acee">{item}</Tag>
                })
            }</>
        );
    };
    /**
    * Function which normalize links list and return styled components
    * @param {array} linkList Npm Package Information
    */
    const getLinks = (linkList) => {
        return (
            <>{
                Object.keys(linkList).map((key) => {
                    return <div key={key}><BookOutlined style={ styles.pageLink }/><a href={linkList[key]}>{key}</a></div>
                })
            }</>
        );
    };
    /**
    * Function which normalize author data and return Component
    * @param {object} author Npm Package Information
    */
    const getAuthorTag = (author) => {
        if (!author) return <></>;
        return <b>{author.url ? <a href={author.url}>{author.name}</a> : <span>{author.name}</span>}</b>
    };

    const {
        author,
        date,
        description,
        keywords,
        links,
        name,
        version
    } = npmPackage;
    return (
        <div style={styles.packageContainer}>
            <div style={styles.header}>
                <h3>{name}</h3>
                <h3>{`v${version}`}</h3>
            </div>
            <div style={styles.content}>
                <h4 style={styles.published}>{description}</h4>
                <div style={styles.keywords}>{keywords && keywords.length && getTags(keywords)}</div>
                <div style={styles.links}>{links && Object.keys(links).length > 0 && getLinks(links)}</div>
                <div style={styles.authorInfo}>
                    { getAuthorTag(author) }
                    <p style={ styles.published }>{`published * ${ moment(date).fromNow() }`}</p>
                </div>
            </div>
            <Divider />
        </div>
    )
};

export default Package;