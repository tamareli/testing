import React, { Component } from 'react';
import AdInfoBox from './AdInfoBox';

function AdInfoBoxes(props) {
  return props.boxes.map((item) => {
    return (
      <AdInfoBox
        key={item.id}
        bgColor={item.bgColor}
        title={item.title}
        number={item.number}
        precent={item.precent}
      />
    );
  });
}

export default AdInfoBoxes;
