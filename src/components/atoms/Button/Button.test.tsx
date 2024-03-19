import 'react-native';
import React from 'react';
import Button from './Button';

import {
  cleanup,
  fireEvent,
  screen,
  render,
  within,
} from '@testing-library/react-native';

afterEach(cleanup);

it('should render the button', () => {
  const onPress = jest.fn();
  const testText = 'click me';
  const component = render(<Button onPress={onPress} text={testText} />);
  const pressable = screen.getByRole('button');
  const text = component.getByText(testText);
  expect(pressable);
  fireEvent.press(pressable);
  expect(onPress).toHaveBeenCalledTimes(1);
  expect(text);
});
