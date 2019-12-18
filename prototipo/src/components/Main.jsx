import React from 'react'
import Header from './Header'
import { Content } from 'mui-layout'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <Content>
            <div>
                {props.children}
            </div>
        </Content>
    </React.Fragment>