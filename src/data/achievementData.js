import FypImage from '../assets/svg/achievements/fyp-certificate.jpg';
import NavtccImage from '../assets/svg/achievements/navtcc-certificate.jpg';


export const achievementData = {
    bio : "These are some of my achievements that I am most proud of !!",
    achievements : [
        {
            id : 1,
            title : 'CodeBit- FYP Symposium',
            details : 'Demonstrate the principles of our FYP and participated in the Code-Bit program and exposed our project.',
            date : 'March 09, 2022',
            field : 'FYP, MERN',
            image : FypImage
        },
        {
            id : 2,
            title : 'Navtcc Certification',
            details : 'Achieved Grade A in the National Vocational & Training Commission (NAVTCC) that is based on the Prime Ministers Hunarmand Program.',
            date : 'March 12, 2021',
            field : 'Web Eng',
            image : NavtccImage
        }
    ]
}

