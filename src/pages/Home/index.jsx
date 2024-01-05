import styled from 'styled-components'
import homeIllustration from '../../assets/home-illustration.svg'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

const HomeContainer = styled.div`
    background-color: ${colors.backgroundLight};
    margin: 80px 50px 0 50px;
`

const StyledLink = styled(Link)`
    padding: 8px 27px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    &:hover {
        background-color: ${colors.secondary};
`

const StyledP = styled.p`
    font-size: 50px;
    font-weight: 700;
    text-align: start;
    line-height: 80.25px;
`

const StyledContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 100px;
`

function Home() {
    return (
        <HomeContainer>
            <StyledContent>
                <div>
                    <StyledP>
                        Repérez vos besoins, <br></br> on s'occupe du reste,{' '}
                        <br></br> avec les meilleurs <br></br> talents
                    </StyledP>
                    <StyledLink to={'/survey/1'} $isFullLink>
                        Faire le test
                    </StyledLink>
                </div>
                <div>
                    <img src={homeIllustration} alt="home-illustration" />
                </div>
            </StyledContent>
        </HomeContainer>
    )
}

export default Home
