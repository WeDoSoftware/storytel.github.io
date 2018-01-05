import React from 'react';
import image from '../assets/tslint-config-storytel.jpg';
import { Card, CardTitle, CardText, Media, MediaOverlay } from 'react-md';

export default () => (
  <Card onClick={() => window.open('https://npmjs.com/tslint-config-storytel', '_blank')} className="os-component">
    <Media>
      <img src={image} alt="" />
      <MediaOverlay>
        <CardTitle title="tslint-config-storytel" />
      </MediaOverlay>
    </Media>
  </Card>
);
