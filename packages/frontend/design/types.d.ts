export interface Color {
  name: string;
  color: string;
}

export interface ColorGroup {
  name: string;
  colors: Color[];
}

declare module '@storybook/react' {
  const storiesOf: any;
  export { storiesOf };
}
