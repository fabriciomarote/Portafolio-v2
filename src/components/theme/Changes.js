import styled from 'styled-components';

export const ContainerGeneral = styled.div`
    body {
        background-color: ${({ theme }) => theme.bgc};
    }
`;

export const NavBarContainer = styled.div`
    .navbar-container {
        background-color: rgb(0, 0, 0, 0.6);
        color: ${({ theme }) => theme.text};
    }
    .nav > .nav-links > a {
        color: #FFFFFF;
    }
    .nav > .nav-links > a:hover {
        color: ${({ theme }) => theme.hover};
    } 
    .icon-theme {
        color: ${({ theme }) => theme.icon};
    }
    #contact {
        background-color: ${({ theme }) => theme.hover};
    }
    #contact:hover {
        color: #ffffff;
    }
    @media (max-width:991px) {
    .nav > .nav-btn:hover {
        background-color: #B00000; 
    }
    .nav > .nav-btn > label > span {
        border-top: 5px solid #FFFFFF; 
    }
    .nav > .nav-links {
        background-color: rgb(179, 0, 0, 0.85); 
    }
    .nav > .nav-links > a:hover {
        color: #000000; 
    }
    .icon-theme {
        color: ${({ theme }) => theme.icon};
    }
  }
`;

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};    
    .box-home {
        color: ${({ theme }) => theme.text};
    }
    .span1 {
        color: ${({ theme }) => theme.hover};
    }
`;

export const AboutMeContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    color: ${({ theme }) => theme.text};
    .button-cv {
     color: #fff;
     background-color: ${({ theme }) => theme.hover};
    }
    .button-cv:hover {
     background-color:#fff;
     color: ${({ theme }) => theme.hover};
    }
`;

export const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    
    .text-footer {
        color: ${({ theme }) => theme.text};
    }
    .icons-footer {
        color: ${({ theme }) => theme.text};
    }
    .icon-f {
        color: ${({ theme }) => theme.hover};
    }
    .icon-f:hover {
        color: #ffffff
    }
`;
export const ContactContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    color: ${({ theme }) => theme.text};
    .box-form {
        background-color: ${({ theme }) => theme.formContact};
        color: #ffffff
    }
    .btn-info {
        border-color: ${({ theme }) => theme.hover};
        color: #fff;
        background-color: ${({ theme }) => theme.hover};
    }
    .btn-info:hover {
        background-color:#000;
        border-color: #000;
        color: #fff;
    }
`;
export const ProjectsContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};

    .title-box {
        color: ${({ theme }) => theme.text};
    }
`;

export const SkillsContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    .title-icon {
        color: ${({ theme }) => theme.text};
    }
    .icon {
        color: ${({ theme }) => theme.hover};
    }
    .icon:hover {
        color: #fff;
    }
    .title-box {
        color: ${({ theme }) => theme.text};
    }
`;

export const ModelProjectContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    color: #fff;
`;


