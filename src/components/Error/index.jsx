import errorImg from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorContainer = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.background};
    align-items: center;
`

const StyledImg = styled.img`
    width: 875px;
    height: 476px;
    object-fit: contain;
    padding: 100px;
`

const StyledText = styled.span`
    font-size: 31px;
    font-weight: 700;
`

function Error() {
    return (
        <ErrorContainer>
            <StyledText>Oups...</StyledText>
            <StyledImg src={errorImg} alt="error-page"></StyledImg>
            <StyledText>Il semblerait qu'il y ait un problème.</StyledText>
        </ErrorContainer>
    )
}

export default Error
