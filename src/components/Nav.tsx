
import * as React from 'react';
import {Link} from 'react-router-dom';
import { P } from '../ui/Link';
import { LinkContainer } from '../ui/LinkContainer';

export default function Nav() {
  return (
    <LinkContainer >
      
        <Link to="/">
          <P>Post</P>
        </Link>
      
        <Link to="/posts/new">
          <P>AddPost</P>
        </Link>
    </LinkContainer>
  );
}
