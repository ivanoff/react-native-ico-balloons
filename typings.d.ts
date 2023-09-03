declare module 'react-native-ico-balloons' {
    import { ReactNode } from 'react';

    type iconNames = 'Groups' |
      'Quiz' |
      'Words' |
      'speech-bubble-1' |
      'speech-bubble-10' |
      'speech-bubble-11' |
      'speech-bubble-12' |
      'speech-bubble-13' |
      'speech-bubble-14' |
      'speech-bubble-15' |
      'speech-bubble-16' |
      'speech-bubble-17' |
      'speech-bubble-18' |
      'speech-bubble-19' |
      'speech-bubble-2' |
      'speech-bubble-20' |
      'speech-bubble-21' |
      'speech-bubble-22' |
      'speech-bubble-3' |
      'speech-bubble-4' |
      'speech-bubble-5' |
      'speech-bubble-6' |
      'speech-bubble-7' |
      'speech-bubble-8' |
      'speech-bubble-9' |
      'speech-bubble';

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

