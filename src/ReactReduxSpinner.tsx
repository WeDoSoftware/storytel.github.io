import React from 'react';
import image from '../assets/react-redux-spinner.gif';
import { Card, CardTitle, CardText, Media, MediaOverlay } from 'react-md';

export default () => (
  <Card onClick={() => window.open('https://storytel.github.io/react-redux-spinner', '_blank')} className="os-component">
    <Media>
      <img src={image} alt="" />
      <MediaOverlay>
        <CardTitle title="react-redux-spinner" />
      </MediaOverlay>
    </Media>
  </Card>
);
