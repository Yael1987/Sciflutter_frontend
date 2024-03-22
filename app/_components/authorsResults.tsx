import React from 'react'
import { AuthorsPreviewI } from '../_interfaces';
import Carrousel from './carrousel';
import AuthorCard from './authorCard';
import AuthorCardList from './authorCardList';
import dynamic from 'next/dynamic';

interface Props {
  authors: AuthorsPreviewI[]
}

const DynamicCarrousel = dynamic(()=> import('./carrousel'))

const AuthorsResults: React.FC<Props> = ({ authors }) => {
  return (
    <div className="l-results-authors">
      <Carrousel showButtons={authors.length > 4} itemsList={authors} />
    </div>
  );
}

export default AuthorsResults