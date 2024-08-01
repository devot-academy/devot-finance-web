import React from 'react';
import * as S from './styles';
import { iconMapper, IIconMapper } from './mapper';
import { ColorFormat, COLORS } from '../../../styles/theme/colors';


export type IIconProps = {
    name?: IIconMapper;
    color?: keyof ColorFormat;
    size?: S.ISizeVariants;
}

export default function Icon({ color = 'PRIMARY', size = 'small', name = 'logo' }: IIconProps) {
    const SVGIcon = iconMapper[name];
    if (!SVGIcon) {
        console.error(`Icon "${name}" not found.`);
        return null;
      }

    return <SVGIcon width={S.sizeMapper[size]} height={S.sizeMapper[size]} color={COLORS[color]} />;
}