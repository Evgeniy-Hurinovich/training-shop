import { Link } from 'react-router-dom';
import { BlogArticles } from './articles/articles';
import { BLOG } from '../../../db/blog';
import './main-blog.scss';
export const Blog = () => {
  return (
    <div className='main-blog'>
      <div className='blog-header'>
        <div className='title'>LATEST FROM BLOG</div>
        <Link to='/blog' className='link'>
          SEE ALL
        </Link>
      </div>
      <div className='blog-main'>
        {BLOG.map(({ id, imageSrc, name, title, text, href }) => (
          <BlogArticles key={id} img={imageSrc} name={name} title={title} text={text} href={href} />
        ))}
      </div>
    </div>
  );
};
