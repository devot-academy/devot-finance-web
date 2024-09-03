'use client';
import styled from 'styled-components';
import React from 'react';
import ListCard from '../../components/organisms/list-card';


export default function test() {

  return (
    <div>
      <ListCard 
        color='GREEN'
        listCard={[
          {
            title: 'Raissa',
            value: '200',
          },
          {
            title: 'Álefe',
            value: '300',
          },
        ]}
        />
    </div>
  );
}
