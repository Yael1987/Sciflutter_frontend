import React from 'react'

import "@/styles/layout/more.scss";

import { sampleMoreAuthors } from '../_utils/data';
import { HeadingSecondary } from './headings';
import AuthorCardList from './authorCardList';

const MoreAuthors: React.FC = () => {
  return (
    <aside className="l-more">
      <HeadingSecondary>Descubre autores</HeadingSecondary>

      <AuthorCardList authorsList={sampleMoreAuthors} emptyMessage='No users recommended found'/>
    </aside>
  );
}

export default MoreAuthors