import { Metadata } from "next";
import { HeadingSecondary } from "../_components/headings";

import '@/styles/layout/saves.scss'
import SavesList from "./_components/savesList";

export const metadata: Metadata = {
  title: 'Saves'
}

const Page: React.FC = async () => {
  return (
    <section className="saves">
      <HeadingSecondary>Mis favoritos</HeadingSecondary>

      <SavesList />
    </section>
  );
}

export default Page