import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

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