import Card from '../../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 420px;
    flex-wrap: wrap;
    gap: 60px;
`

const ProfilesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 70px;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
`

const StyledTitle = styled.h1`
    font-size: 30px;
    font-weight: 700;
`

const StyledParagraph = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #8186A0;
`

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'UX Designer',
    },
    {
        name: 'Alexandra Dupont',
        jobTitle: 'Développeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Devops',
    },
    {
        name: 'Lauren Ipsum',
        jobTitle: 'Développeuse Fullstack',
    },
]

function Freelances() {
    return (
        <ProfilesContainer>
            <TitleContainer>
                <StyledTitle>Trouvez votre prestataires</StyledTitle>
                <StyledParagraph>
                    Chez Shiny nous réunissons les meilleurs profils pour vous.
                </StyledParagraph>
            </TitleContainer>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </ProfilesContainer>
    )
}

export default Freelances
