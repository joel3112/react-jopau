import React from 'react';

export type MyComponentProps = {
  name: string;
};

export default function MyComponent({ name }: MyComponentProps) {
  return <div className="my-component">{name}</div>;
}
