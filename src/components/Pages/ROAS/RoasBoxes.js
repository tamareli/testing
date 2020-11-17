import React, { Component } from 'react';
import RoasBox from './RoasBox';

function RoasBoxes(props) {
  return props.boxes.map((item) => {
    return (
      <RoasBox
        key={item.id}
        bgColor={item.bgColor}
        title={item.title}
        data={item.data}
      />
    );
  });
}

export default RoasBoxes;
