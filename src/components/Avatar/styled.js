import styled from 'styled-components';
import media from "styled-media-query"
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 1rem;
  border: 3px solid var(--background);
  height: 7.75rem;
  margin: auto;
  width: 7.75rem;

  ${media.lessThan("large")`
    border: none;
    height: 1.875rem;
    width: 1.875rem;
  `}
`
