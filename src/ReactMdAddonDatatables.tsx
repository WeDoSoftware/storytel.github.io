import React from 'react';
import image from '../assets/react-md-addon-datatables.gif';
import { Card, CardTitle, CardText, Media, MediaOverlay } from 'react-md';

export default () => (
  <Card onClick={() => window.open('https://storytel.github.io/react-md-addon-datatables', '_blank')} className="os-component">
    <Media>
      <img src={image} alt="" />
      <MediaOverlay>
        <CardTitle title="react-md-addon-datatables" />
      </MediaOverlay>
    </Media>
  </Card>
);
