import React from 'react';
import image from '../assets/eslint-config-storytel.png';
import { Card, CardTitle, CardText, Media, MediaOverlay } from 'react-md';

export default () => (
  <Card onClick={() => window.open('https://npmjs.com/eslint-config-storytel', '_blank')} className="os-component">
    <Media>
      <img src={image} alt="" />
      <MediaOverlay>
        <CardTitle title="eslint-config-storytel" />
      </MediaOverlay>
    </Media>
  </Card>
);
