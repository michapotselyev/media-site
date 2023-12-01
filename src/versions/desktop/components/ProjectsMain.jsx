import React from 'react';
import { Box, Link } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import projectMain from '../../../globalStyles/styles/desktop/projects-components/projects-main';
import TEXT_CONSTANTS from '../../../text-constants';

function ProjectsMain() {
    return (
        <Box component={'main'} sx={ projectMain.main }>
            <Box component={'nav'} sx={ projectMain.nav }>
                <Link href='/' sx={ projectMain.nav.link }>
                    {   
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.PROJECTS.link_to_main
                        :
                            TEXT_CONSTANTS.ENG.PROJECTS.link_to_main
                    }/
                </Link>
                <Link href='/projects' sx={ projectMain.nav.link }>
                    {   
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.PROJECTS.link_to_projects
                        :
                            TEXT_CONSTANTS.ENG.PROJECTS.link_to_projects
                    }/
                </Link>
            </Box>

            <Box component={'section'} sx={ projectMain.section }>
                <Box sx={[ projectMain.img, { backgroundImage: 'url(assets/portfolio/education.jpeg)' } ]}>
                    <Box sx={ projectMain.img.wrapperText }>
                        <Link href='/projects/education' sx={ projectMain.img.text }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.PORTFOLIO.SECOND_PROJECT.title
                                :
                                    TEXT_CONSTANTS.ENG.PORTFOLIO.SECOND_PROJECT.title
                            }
                            <KeyboardArrowRightIcon sx={ projectMain.img.arrow }/>
                        </Link>
                    </Box>
                </Box>

                <Box sx={[ projectMain.img, { backgroundImage: 'url(assets/portfolio/sietDevelopment.jpeg)' } ]}>
                    <Box sx={ projectMain.img.wrapperText }>
                        <Link href='/projects/web' sx={ projectMain.img.text }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.PORTFOLIO.FIFTH_PROJECT.title
                                :
                                    TEXT_CONSTANTS.ENG.PORTFOLIO.FIFTH_PROJECT.title
                            }
                            <KeyboardArrowRightIcon sx={ projectMain.img.arrow }/>
                        </Link>
                    </Box>
                </Box>

                <Box sx={[ projectMain.img, { backgroundImage: 'url(assets/portfolio/bank-and-finance.jpeg)' } ]}>
                    <Box sx={ projectMain.img.wrapperText }>
                        <Link href='/projects/finance' sx={ projectMain.img.text }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.title
                                :
                                    TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.title
                            }
                            <KeyboardArrowRightIcon sx={ projectMain.img.arrow }/>
                        </Link>
                    </Box>
                </Box>

                <Box sx={[ projectMain.img, { backgroundImage: 'url(assets/portfolio/sales.png)' } ]}>
                    <Box sx={ projectMain.img.wrapperText }>
                        <Link href='/projects/sales' sx={ projectMain.img.text }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.PORTFOLIO.FOURTH_PROJECT.title
                                :
                                    TEXT_CONSTANTS.ENG.PORTFOLIO.FOURTH_PROJECT.title
                            }
                            <KeyboardArrowRightIcon sx={ projectMain.img.arrow }/>
                        </Link>
                    </Box>
                </Box>

                <Box sx={[ projectMain.img, { backgroundImage: 'url(assets/portfolio/mettalurg.jpeg)' } ]}>
                    <Box sx={ projectMain.img.wrapperText }>
                        <Link href='/projects/metallurgy' sx={ projectMain.img.text }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.PORTFOLIO.THIRD_PROJECT.title
                                :
                                    TEXT_CONSTANTS.ENG.PORTFOLIO.THIRD_PROJECT.title
                            }
                            <KeyboardArrowRightIcon sx={ projectMain.img.arrow }/>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectsMain;
