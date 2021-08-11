import { RectButtonProps } from 'react-native-gesture-handler';

export default interface HomeCardProps extends RectButtonProps {
  data: {
    weather?: [
      {
        icon?: string;
      }
    ]
    main?: {
      temp?: number;
    }
    sys?: {
      country?: string;
    }
    name?: string;
  }
}
