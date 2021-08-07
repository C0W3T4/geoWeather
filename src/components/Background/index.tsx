import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type BackgroundProps = {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  
  const { background } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[background, 'transparent']}
    >
      {children}
    </LinearGradient>
  );
}
