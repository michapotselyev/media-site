import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useParams } from 'react-router-dom';
import TEXT_CONSTANTS from '../../../text-constants';
import CategorySlider from './category-components/CategorySlider';

function CategoryMainTablet() {
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
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))',
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
                            TEXT_CONSTANTS.UK.PROJECTS.links_to_categories[category]
                        :
                            TEXT_CONSTANTS.ENG.PROJECTS.links_to_categories[category]
                    }/
                </Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {
                    items.length !== 0 ?
                        items.map((item, index) => {
                            return (
                                <React.Fragment key={category + index}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderTop: '1px solid white',
                                            padding: '2rem'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '1.5rem',
                                                fontWeight: '600',
                                                textAlign: 'center',
                                                color: 'white',
                                                textShadow: '1px 1px 7px black',
                                                paddingBottom: '2rem'
                                            }}
                                        >
                                            { item.title }

                                            {
                                                item.collaboration ?
                                                    item.collaborant !== null ? 
                                                        localStorage.getItem('lung') === 'uk' ?
                                                            ' (' + TEXT_CONSTANTS.UK.PROJECTS.coll_title + ' ' + TEXT_CONSTANTS.UK.PROJECTS.coll_subtitle + ' ' + item.collaborant + ')'
                                                        :
                                                            ' (' + TEXT_CONSTANTS.ENG.PROJECTS.coll_title + ' ' + TEXT_CONSTANTS.ENG.PROJECTS.coll_subtitle + ' ' + item.collaborant + ')'
                                                    :
                                                        localStorage.getItem('lung') === 'uk' ?
                                                            ' (' + TEXT_CONSTANTS.UK.PROJECTS.coll_title + ')'
                                                        :
                                                            ' (' + TEXT_CONSTANTS.ENG.PROJECTS.coll_title  + ')'
                                                :
                                                    ''
                                            }
                                        </Typography>
                                        <Box
                                            sx={{
                                                width: '100%'
                                            }}
                                        >
                                            {
                                                item.urls.length > 1 ?
                                                    <CategorySlider images={item.urls} />
                                                :
                                                    <Box
                                                        component={'img'}
                                                        src={item.urls[0]}
                                                        sx={{ paddingBottom: '1rem' }}
                                                    />
                                            }
                                        </Box>

                                        <Box
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '0 2rem',
                                            }}
                                        >

                                            <FeaturesGenerator textList={item.features} />

                                            <Box>
                                                <Typography sx={{ fontSize: '1.2rem', fontWeight: '500', paddingBottom: '1rem' }}>
                                                    {   
                                                        localStorage.getItem('lung') === 'uk' ?
                                                            TEXT_CONSTANTS.UK.PROJECTS.title
                                                        :
                                                            TEXT_CONSTANTS.ENG.PROJECTS.title
                                                    }
                                                </Typography>

                                                <Typography sx={{ color: '#181818' }}>
                                                    { item.description }
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </React.Fragment>
                            )
                        })
                    :
                        <Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{ fontWeight: '600' }}>
                                {   
                                    localStorage.getItem('lung') === 'uk' ?
                                        TEXT_CONSTANTS.UK.PROJECTS.no_projects
                                    :
                                        TEXT_CONSTANTS.ENG.PROJECTS.no_projects
                                }
                            </Typography>
                        </Box>
                }
            </Box>
        </Box>
    );
}

function FeaturesGenerator({ textList }) {
    return (
        <Box sx={{ paddingBottom: '2rem', width: '100%' }}>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: '500', paddingBottom: '1rem' }}>
                {   
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.PROJECTS.features_title
                    :
                        TEXT_CONSTANTS.ENG.PROJECTS.features_title
                }
            </Typography>
            {
                textList.map((paragraph, index)=> {
                    return (
                        <Box
                            key={index + ''}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '0.25rem 0'
                            }}
                        >
                            <AssignmentTurnedInIcon
                                fontSize='small'
                                sx={{
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    color: '#2C9FF2',
                                }}
                            />

                            <Typography sx={{ color: '#181818' }}>
                                { paragraph }
                            </Typography>
                        </Box>
                    );
                })
            }
        </Box>
    );
}

export default CategoryMainTablet;
