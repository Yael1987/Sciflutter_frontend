import React from 'react'

import "@/styles/layout/aside.scss";

import { sampleMoreAuthors } from '../_utils/data';
import AuthorCard from './authorCard';
import { HeadingSecondary } from './headings';
import CardsList from './cardsList';

const MoreAuthors: React.FC = () => {
  return (
    <aside className="more-authors">
      <HeadingSecondary>Descubre autores</HeadingSecondary>

      <CardsList type="authors">
        {sampleMoreAuthors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </CardsList>
    </aside>
  );
}

export default MoreAuthors