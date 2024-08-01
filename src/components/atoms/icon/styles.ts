import styled, { css } from 'styled-components'
export type ISizeVariants = keyof typeof sizeMapper;

import { ColorFormat } from '../../../styles/theme/colors';

export type IIconProps = {
    color: keyof ColorFormat;
    size: ISizeVariants;
}


export const sizeMapper = {
    small: 38,
    medium: 115,
    large: 150,
}


