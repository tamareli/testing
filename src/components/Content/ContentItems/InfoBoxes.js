import React, { Component } from 'react';
import InfoBox from './InfoBox';

function InfoBoxes(props) {
  return props.boxes.map((item) => {
    return (
      <InfoBox
        key={item.id}
        bgColor={item.bgColor}
        title={item.title}
        icon={item.icon}
        number={item.number}
        precent={item.precent}
      />
    );
  });
}

export default InfoBoxes;
