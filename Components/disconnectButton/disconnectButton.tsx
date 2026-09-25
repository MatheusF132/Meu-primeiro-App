import type { ComponentProps, ReactNode } from 'react';
import { Button } from 'react-native-paper';
import { disconnectButtonStyle } from './disconnectButtonStyle';

type Props = ComponentProps<typeof Button> & {
  children?: ReactNode;
};

export default function DisconnectButton({ children, style, labelStyle, ...props }: Props) {
  return (
    <Button
      {...props}
      style={[disconnectButtonStyle.button, style]}
      labelStyle={[disconnectButtonStyle.text, labelStyle]}
    >
      {children ?? 'Desconectar da conta'}
    </Button>
  );
}