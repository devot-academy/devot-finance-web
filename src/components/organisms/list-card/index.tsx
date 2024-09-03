import React from 'react'
import Card, { ICardProps } from '../../molecules/card';

export type IListCard = {
    color: ICardProps['color'];
    listCard: Omit<ICardProps, 'color'>[];
};

export default function ListCard ({ listCard = [], color}: IListCard ) {
    return <div>
        { listCard.map((cardProps, index) => <Card key={index} {...cardProps} color={color}/>) }
    </div>
} 