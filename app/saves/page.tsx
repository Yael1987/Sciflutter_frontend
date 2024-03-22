import { Metadata } from "next";
import { HeadingSecondary } from "../_components/headings";

import SavesList from "./_components/savesList";

import '@/styles/pages/saves.scss'

export const metadata: Metadata = {
  title: 'Saves'
}

const Page: React.FC = async () => {
  return (
    <section className="l-saves">
      <HeadingSecondary>Mis favoritos</HeadingSecondary>

      <SavesList />
    </section>
  );
}

export default Page