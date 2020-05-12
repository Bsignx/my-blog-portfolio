import styled from 'styled-components'
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  background-color: var(--background);
  margin-top: 0.7rem;
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);  
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  ${media.lessThan("large")`
    margin-top: 0rem;
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: var(--highlight);
    }
  }
`