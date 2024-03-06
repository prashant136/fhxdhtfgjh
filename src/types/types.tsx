import React from 'react';

type headerProps = {
    id: string;
    name: string;
    text: { msg: 'start' | 'end' };
}
export default function types(props: headerProps) {
  return (
    <div>types</div>
  )
}
