import Image from 'next/image';
import React from 'react'

import largeLogo from "@/public/img/logos/long.svg";

import "@/styles/layout/form-section.scss";
import '@/styles/components/form.scss'

interface Props {
  children: React.ReactNode
}

const FormSection: React.FC<Props> = ({ children }) => {
  return (
    <section className="form-section">
      <Image src={largeLogo} alt="Main logo" className="form-section__img" />

      {children}
    </section>
  );
}

export default FormSection