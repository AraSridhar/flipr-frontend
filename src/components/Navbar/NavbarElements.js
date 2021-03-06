import styled from 'styled-components'
import{Link as linkR} from 'react-router-dom'
import{Link as linkS} from 'react-scroll'

export const Nav = styled.nav`
background: #000;
height: 80px;
/*margin-top: -80px;*/
display: flex;
justify-content: centre;
align-items:center;
font-size: 1rem;
position:sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;
export const NavbarContainer= styled.div`
display: flex;
justify-content: centre;
height: 80px;
z-index: 10;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;
export const NavLogo = styled(linkR)`
color: red;
justify-self=flex-start;
cursor:pointer;
font-size: 1.5rem;
display: flex;
align-items:center;
margin-left: 24px;
font-weight:bold;
text-decoration: none;

`;

export const MobileIcon =styled.div`
display:name;
@media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top:0;
    right:0;
    transfrom:translate(-100%,60%);
    font-size: 1.8rem;
    cursor:pointer;
    color:#fff;
    
}
`
export const NavMenu=styled.ul`
display:flex;
align-items:centre;
list-style:none;
text-align:centre;
margin-right:-22px;
@media screen and (max-width:768px){
    display:none;
}
`;
export const NavItems=styled.li`
height:80px;
`;
export const NavLinks= styled(linkS)`
color: #fff;
display:flex;
align-items: center;
text-declaration:none;
padding:0 1 rem;
height: 100%;
cursor:pointer;

&.active{
    border-botton:3px solid #01bf71;
}
`;