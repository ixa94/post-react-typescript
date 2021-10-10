import React, { FC } from 'react';
import { useParams } from 'react-router';
import { useTypedSelector } from '../hooks/usedTypedSelector';
import { CardPost } from '../ui/PostCard';
import { CardPostBody } from '../ui/CardPostBody';
const PostCard: FC = () => {
  const { id = '' } = useParams<{ id?: string }>();

  const post = useTypedSelector((state) => state.postState.posts).filter(
    (el) => el.id === parseInt(id)
  )[0];
  return (
    <CardPost>
      <h3>{post?.title}</h3>
      <CardPostBody>{post?.body}</CardPostBody>
    </CardPost>
  );
};

export default PostCard;
