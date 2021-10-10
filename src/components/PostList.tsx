import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/usedTypedSelector';
import { Card } from '../ui/Card';
import { DivContainer } from '../ui/DivContainer';
import { Paragraph } from '../ui/Paragraph';
import './PostList.css'
const PostList:FC = () => {
  const{posts} = useTypedSelector(state=>state.postState)
  const{fetchPost} = useAction()
  const history = useHistory();


  useEffect(()=>{
    fetchPost()
  })

  const ClickHandler = (id:number) => {
    history.push(`/posts/${id}`);
};
  return (
    <DivContainer>
      {posts.map(post =>
      
      <Card onClick={()=>ClickHandler(post.id)}>
        <h3>{post.title}</h3>
        <Paragraph className='p'>{post.body}</Paragraph>
      </Card>
    
      )}
    </DivContainer>
  );
};

export default PostList;
