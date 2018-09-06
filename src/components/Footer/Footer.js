import React from 'react';

const footer = (props) => {
    const fixed = props.config.fixed;
    const copyright = props.config.copyright;
    const companyurl = props.config.companyurl;
    const companyname = props.config.companyname;
    const version = props.config.version;

    return ( 
        <footer className="main-footer">
            <div className="pull-right hidden-xs">
            <b>Version</b> {version}
            </div>
            <strong>Copyright © {copyright} <a href={companyurl}>{companyname}</a>.</strong> All rights
            reserved.
        </footer>
     );
}
 
export default footer;