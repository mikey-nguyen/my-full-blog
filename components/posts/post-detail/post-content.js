import classes from './post-content.module.css';
import PostHeader from './post-header';

import ReactMarkdown from 'react-markdown';

const DUMMY_DATA = {
  slug: 'test-michael',
  title: 'This is a Test',
  image: 'next-js.webp',
  date: '2022-09-11',
  content: '# This is a first post ',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_DATA.slug}/${DUMMY_DATA.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_DATA.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_DATA.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
