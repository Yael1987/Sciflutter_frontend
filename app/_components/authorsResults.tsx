import React from 'react'
import { AuthorsPreviewI } from '../_interfaces';
import Carrousel from './carrousel';
import AuthorCard from './authorCard';

interface Props {
  authors: AuthorsPreviewI[]
}

const AuthorsResults: React.FC<Props> = ({ authors }) => {
  return (
    <div className="results-authors">
      <Carrousel showButtons={authors.length > 4}>
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </Carrousel>
    </div>
  );
}

export default AuthorsResults