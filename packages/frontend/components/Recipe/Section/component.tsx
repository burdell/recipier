import React, { ReactNode } from 'react';

import { Section as SectionContainer, SectionHeader } from './styles';

interface Props<T> {
  title: string;
  items: T[];
  renderItem?: (item: T, index: number) => ReactNode;
}

export function Section<T>({ title, items, renderItem }: Props<T>) {
  return (
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      {!renderItem && (
        <ul>
          {items.map((item, index) => (
            <li key={`${title}-${index}`}>{item}</li>
          ))}
        </ul>
      )}
      {renderItem &&
        items.map((item, index) => (
          <div key={`${title}-${index}`}>{renderItem(item, index)}</div>
        ))}
    </SectionContainer>
  );
}
