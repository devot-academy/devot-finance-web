import React from 'react';
import Link from 'next/link';
import * as S from './styles';
import { ITextProps } from '../../atoms/text';

export type ILinkProps = ITextProps & {
  href: string;
};

export default function LinkText({ href, children, ...rest }: ILinkProps) {
  return (
    <Link href={href} passHref>
      <S.LinkComponent {...rest} type='headline-1'>{children}</S.LinkComponent>
    </Link>
  );
}