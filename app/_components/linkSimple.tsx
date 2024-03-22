import '@/styles/components/link-simple.scss'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight'
import Link from 'next/link'

interface Props{
  href: string,
  children: React.ReactNode
}

const LinkSimple: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} className="c-link-simple">
      {children}
      <ArrowRight size={32} weight="thin" className="c-link-simple__icon" />
    </Link>
  );
}

export default LinkSimple