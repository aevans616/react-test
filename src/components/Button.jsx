import React from 'react';

export default function Button(props) {
  return (
    <button
      onClick={() => {
        alert('Clicked');
      }}
    >
      {props.name}
    </button>
  );
}
