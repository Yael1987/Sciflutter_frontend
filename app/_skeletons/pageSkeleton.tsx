import Image from 'next/image';

import NavBarSkeleton from './navBarSkeleton';

import textLogo from "@/public/img/logos/text.svg";
import "@/styles/layout/header.scss";

const PageSkeleton: React.FC = () => {
  return (
    <div className='skeleton--page'>
      <div className="header">
        <div className="header__navigation">
          <Image
            src={textLogo}
            className="header__navigation-logo"
            alt="Sciflutter logo"
            style={{
              width: "auto",
              height: "3.2rem",
            }}
          />

          <NavBarSkeleton />
        </div>
      </div>

      <div className='skeleton--page__body'>

      </div>
    </div>
  );
}

export default PageSkeleton