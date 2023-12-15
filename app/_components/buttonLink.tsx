import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface Props{
  href: string,
  children: React.ReactNode,
  type: 'outline' | 'main' | 'icon',
  target?: string,
  className?: string
}

const ButtonLink: React.FC<Props> = ({ href, children, type, target = '_self', className = "" }) => {
  const buttonType = clsx(type !== "icon" && `btn btn-link btn-link--${type}`);

  return (
    <Link
      href={href}
      target={target}
      className={`${buttonType} ${className}`}
    >
      {children}
    </Link>
  )
}

export default ButtonLink