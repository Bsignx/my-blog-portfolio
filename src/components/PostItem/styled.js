import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--textsPostHome);
  display: flex;
  text-decoration: none;
  body#grid & {
    
  }
  &:hover {
    color: var(--highlightTwo);
  }
`

export const PostItemWrapper = styled.section`
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3); 
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3);
  margin-top: 0.7rem;
  background-color: var(--background);
  align-items: center;
  border-radius: 1rem;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  body#grid & {
    box-shadow: none;
    border: none;
    padding: 2rem 1rem;
    grid-gap: 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan("large")`
    margin-top: 0;
    margin-bottom: 0.5rem;
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
    border-radius: 0;
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlightTwo)"};
  border-radius: 1rem;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  body#grid & {
    text-align: center;
  }
  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`