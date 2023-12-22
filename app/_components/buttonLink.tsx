import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface Props{
  href: string,
  children: React.ReactNode,
  type: 'outline' | 'main' | 'icon',
  target?: string,
  className?: string,
  prefetch?: boolean
}

const ButtonLink: React.FC<Props> = ({ href, children, type, target = '_self', className = "", prefetch = true }) => {
  const buttonType = clsx(type !== "icon" && `btn btn-link btn-link--${type}`);

  return (
    <Link
      href={href}
      target={target}
      className={`${buttonType} ${className}`}
      prefetch={prefetch}
    >
      {children}
    </Link>
  )
}

export default ButtonLink