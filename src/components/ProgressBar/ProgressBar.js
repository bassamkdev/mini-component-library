/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8+'px',
    '--borderRadius': 4+'px',
    '--padding': 0,
  },
  medium: {
    '--height': 12+'px',
    '--borderRadius': 4+'px',
    '--padding': 0,
  }, 
  large: {
    '--height': 24+'px',
    '--borderRadius': 8+'px',
    '--padding': 4+'px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return <Wrapper role='progressbar' aria-valuemax='100' aria-valuemin='0' aria-valuenow={value} style={styles}>
    <Progress value={value} style={styles}></Progress>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
const Progress = styled.div`
  width: calc(${p => (p.value/100)*(370)+'px'} - var(--padding)*2);
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius:4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => p.value >= 99.5 ? '4px' : 0 };
  border-bottom-right-radius: ${p => p.value >= 99.5 ? '4px' : 0 };
` 

export default ProgressBar;
