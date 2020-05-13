import styled from 'styled-components'
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3); 
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3);
  background-color: var(--background);
  margin-top: 0.7rem;
  align-items: center;
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