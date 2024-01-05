import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
    padding: 8px 27px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        color: ${colors.primary};
    }

    ${(props) =>
        props.$isFullLink &&
        `
        color: white;
        border-radius: 30px;
        background-color: ${colors.primary};

        &:hover {
            color: white;
            background-color: ${colors.secondary};
        }
    `}
`