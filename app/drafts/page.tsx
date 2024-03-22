import { HeadingSecondary } from '../_components/headings';

import '@/styles/pages/drafts.scss'
import Drafts from './_components/drafts';
import Articles from './_components/articles';

const Page = async () => {
  return (
    <section className="l-drafts">
      <HeadingSecondary>My drafts</HeadingSecondary>

      <Drafts />

      <HeadingSecondary>My articles</HeadingSecondary>

      <Articles />
    </section>
  );
}

export default Page