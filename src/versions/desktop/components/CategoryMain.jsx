import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import TEXT_CONSTANTS from '../../../text-constants';
import CategorySlider from './category-components/CategorySlider';

function CategoryMain() {
    const { category } = useParams();
    const [items, setItems] = useState([]);

    useState(() => {
        setItems(
            localStorage.getItem('lung') === 'uk' ?
                TEXT_CONSTANTS.UK.PROJECTS.projects_list.filter(project => project.category === category)
            :
                TEXT_CONSTANTS.ENG.PROJECTS.projects_list.filter(project => project.category === category)

        );
    }, []);

    return (
        <Box
            component={'main'}
            sx={{
                paddingTop: 'calc(3.6rem + 100px)',
                paddingBottom: '2rem',
                paddingRight: '4rem',
                paddingLeft: '4rem',
                width: '100%',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))',
                position: 'relative',
                zIndex: 0
            }}
        >
            <Box
                component={'nav'}
                sx={{
                    paddingLeft: '2rem',
                    paddingBottom: '1rem',
                }}
            >
                <Link
                    href='/'
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: '500',
                        textAlign: 'center',
                        color: 'white!important',
                        textDecoration: 'none',
            
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    {   
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.PROJECTS.link_to_main
                        :
                            TEXT_CONSTANTS.ENG.PROJECTS.link_to_main
                    }/
                </Link>
                <Link
                    href='/projects'
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: '500',
                        textAlign: 'center',
                        color: 'white!important',
                        textDecoration: 'none',
            
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    {   
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.PROJECTS.link_to_projects
                        :
                            TEXT_CONSTANTS.ENG.PROJECTS.link_to_projects
                    }/
                </Link>
                <Link
                    href='/projects'
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: '500',
                        textAlign: 'center',
                        color: 'white!important',
                        textDecoration: 'none',
            
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    {   
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.PROJECTS.link_to_projects
                        :
                            TEXT_CONSTANTS.ENG.PROJECTS.link_to_projects
                    }/
                </Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {
                    items.map((item, index) => {
                        return (
                            <React.Fragment key={category + index}>
                                <Box
                                    sx={{
                                        width: '50%'
                                    }}
                                >
                                    {
                                        item.urls.length > 1 ?
                                            <CategorySlider images={item.urls} />
                                        :
                                            <Box
                                                component={'img'}
                                                src={item.urls[0]}
                                            />
                                    }
                                </Box>

                                <Box
                                    sx={{
                                        width: '50%'
                                    }}
                                >
                                    <Typography>
                                    { item.title }
                                    </Typography>

                                </Box>
                            </React.Fragment>
                        )
                    })
                }
            </Box>
        </Box>
    );
}

export default CategoryMain;
