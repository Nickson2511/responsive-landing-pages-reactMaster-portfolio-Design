import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import Title from '../Title/Title'
import blogs from '../../data/blogs'
import BlogItem from '../BlogItem/BlogItem'

function Blogs() {
    const theme = useTheme()
    return (
        <BlogsStyled id='blogs' theme={theme}>
            <div className="center-title">
                <Title name={'Latest News'} desc={`Am a Self Learned Developer, Currently Learning React, Nextjs, Nodejs and MongoDB.`} />
            </div>
            <div className="blogs-con">
                {
                    blogs.map((blog) => {
                        return  <BlogItem {...blog} />
                    })
                }
            </div>
        </BlogsStyled>
    )
}

const BlogsStyled = styled(SectionLayout)`
    background-color: ${(props) => props.theme.colorBg5};
    padding-bottom: 360px;
    .blogs-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3.5rem;
    }
`;

export default Blogs
