import type { ComponentProps, ReactNode } from 'react';
import { Button } from 'react-native-paper';
import { saveButtonStyle } from './saveButtonStyle';

type Props = ComponentProps<typeof Button> & {
  children?: ReactNode;
};

export default function SaveButton({ children, style, labelStyle, ...props }: Props) {
  return (
    <Button
      {...props}
      style={[saveButtonStyle.button, style]}
      labelStyle={[saveButtonStyle.text, labelStyle]}
    >
      {children ?? 'Salvar Alterações'}
    </Button>
  );
}