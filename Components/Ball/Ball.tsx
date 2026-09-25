import type { ReactNode } from 'react';
import { View } from 'react-native';
import { BallStyle } from './BallStyle';

type BallProps = {
  children?: ReactNode;
};

export default function Ball({ children }: BallProps) {
  return <View style={BallStyle.ball}>{children}</View>;
}