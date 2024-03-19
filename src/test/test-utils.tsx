import React, {ComponentType} from 'react';
import {render as rtlRender} from '@testing-library/react-native';

import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

const render = (ui: any, {theme = 'light', ...options} = {}) => {
  // @ts-ignore
  const Wrapper = ({children}): ComponentType => <View>{children}</View>;
  // @ts-ignore
  return rtlRender(ui, {wrapper: Wrapper, ...options});
};

export * from '@testing-library/react-native';
// override React Testing Library's render with our own
export {render};

export const useNavigationMock = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;
