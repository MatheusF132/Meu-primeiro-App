import React from 'react';
import type { ReactNode } from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { cardInfoStyle } from './cardInfoStyle';

type Props = ButtonProps & {
  children?: ReactNode;
};

export default function CardInfo({ children, style, labelStyle, ...props }: Props) {
  return (
    <Button
      {...props}
      style={[cardInfoStyle.button, style]}
      labelStyle={labelStyle}
    >
      {children}
    </Button>
  );
}