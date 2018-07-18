/* tslint:disable-next-line  */
import * as React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { Hello } from '../../src/components/Hello';
it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Hello compiler="TypeScript" framework="React" />, div);
  unmountComponentAtNode(div);
});