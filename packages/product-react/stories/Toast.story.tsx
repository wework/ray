import { storiesOf } from '@storybook/react';
import React from 'react';
import { Toast } from '../src/components/Toast/Toast';

const undoAction = () => {
  console.log('undooo stuf');
};

storiesOf('Core Comps | Toast', module)
  .add('Multi toast success', () => {
    return [1, 2, 3,4,5,6,7,8,9].map((x, index) => (
      <Toast
        key={index}
        label="hey  am Grant Component Toast Grant Component Toast Grant Component Toast"
        variant="success"
        index={index}
      />
    ));
  })
  .add('Multi toast success and action', () => {
    return [1, 2, 3].map((x, index) => (
      <Toast
        key={index}
        label="hey there,I am Grant Component Toast I am Grant Component ToastI am Grant Component Toast kjlshfkljsdhfkhjsd skjhfksljahfkjshdf fshljkfhskjfhjskdfhjksdhfjkhsdfkhksjdlfhjsfhjshdfkl  byuyuuttutyut " 
        variant="success"
        index={index}
        onClick={undoAction}
      />
    ));
  })
  .add('Multi toast success and action lallal', () => {
    return [1].map((x, index) => (
      <Toast
        key={index}
        label="hey there,I am Grant ToastI  Toast khfksjhfjks kjhfklsjahfjhaf lsajkfsjfs    sdjfkljflksjaf kjfhjsg skjhsdagkjhs gkjshgjkadhsg "
        variant="success"
        index={index}
        onClick={undoAction}
      />
    ));
  })
  .add('with error', () => {
    return <Toast label="hey  am Grant Component Toast" variant="error" />;
  })
  .add('with warning', () => {
    return <Toast label="hey  am Grant Component Toast" variant="warning" />;
  })
  .add('with default', () => {
    return <Toast label="hey  am Grant Component Toast" variant="original" />;
  });
