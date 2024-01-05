import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Atom'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
`

const StyledLogo = styled.img`
    width: 187.63px;
    height: 70px;
    object-fit: contain;
`

function Header() {
    return (
        <StyledNav>
            <Link to={"/"}>
                <StyledLogo src={DarkLogo} alt="dark-logo" />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </StyledNav>
    )
}

export default Header
