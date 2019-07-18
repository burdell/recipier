import React, { ReactNode } from 'react';

import {
  Section as SectionContainer,
  SectionHeader,
  SectionItem,
  ListNumber
} from './styles';

interface Props<T> {
  title: string;
  items: T[];
  renderItem?: (item: T, index: number) => ReactNode;
  type?: 'number';
}

export function Section<T>({ title, items, renderItem, type }: Props<T>) {
  return (
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      {!renderItem && (
        <ul>
          {items.map((item, index) => (
            <SectionItem>
              {type === 'number' && <ListNumber>{index + 1}</ListNumber>}
              <li key={`${title}-${index}`}>{item}</li>
            </SectionItem>
          ))}
        </ul>
      )}
      {renderItem &&
        items.map((item, index) => (
          <SectionItem key={`${title}-${index}`}>
            {renderItem(item, index)}
          </SectionItem>
        ))}
    </SectionContainer>
  );
}
