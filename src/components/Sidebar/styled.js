import styled from 'styled-components';
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.3); 
  box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.3);

  ${media.lessThan("large")`
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.4); 
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.4);
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`