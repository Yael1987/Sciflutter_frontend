import Image from 'next/image'

import logoMain from '@/public/img/logos/main.svg'
import '@/styles/components/mainSearch.scss'
import SearchBar from './searchBar';

const MainSearch: React.FC = () => {
  return (
    <section className="b-main-search">
      <Image
        src={logoMain}
        alt="Main logo"
        className="b-main-search__logo"
        style={{
          width: "auto",
        }}
      />

      <div className='b-main-search__bar'>
        <SearchBar />
      </div>
    </section>
  );
}

export default MainSearch