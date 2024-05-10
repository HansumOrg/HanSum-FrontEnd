import React from 'react';
import { Svg, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { View } from 'react-native';

interface Props {
  size?: number;
  color?: string;
}

const Check: React.FC<Props> = ({ size = 20, color = '#39C3C5' }) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Defs>
        <ClipPath id="clip0_1_1513">
          <Rect width="20" height="20" fill={color} />
        </ClipPath>
      </Defs>
      <Path
        d="M10.0009 19.9973C8.13992 19.9973 6.2795 20.0055 4.41849 19.995C2.34118 19.9834 0.618934 18.6298 0.123365 16.6396C0.0329969 16.2782 -0.000235347 15.911 -0.000235347 15.539C0.00151372 11.8467 -0.00315046 8.15439 0.00209674 4.46206C0.00559488 2.14197 1.61241 0.323205 3.91534 0.0229925C4.09491 -0.000324958 4.27798 0.00258973 4.45989 0.00258973C8.15217 0.00142386 11.845 -0.00149083 15.5373 0.00258973C17.6519 0.00550442 19.3876 1.36083 19.8814 3.37955C19.9683 3.73397 19.9992 4.09481 19.9992 4.45973C19.9974 8.15205 20.0027 11.8444 19.9968 15.5367C19.9934 17.7385 18.5498 19.4937 16.4072 19.9268C16.0993 19.9892 15.7874 19.9985 15.4743 19.9985C13.6501 19.9973 11.8252 19.9985 10.0009 19.9985V19.9973Z"
        fill={color}
      />
      <Path
        d="M8.7466 13.3639C8.49298 13.3668 8.27843 13.2706 8.10178 13.094C7.26805 12.2627 6.43258 11.4337 5.60644 10.5955C5.23272 10.2166 5.24555 9.65171 5.61344 9.28446C5.97433 8.9242 6.54569 8.92187 6.92465 9.29378C7.47969 9.83825 8.03123 10.3862 8.57286 10.9441C8.71512 11.0904 8.78974 11.105 8.94308 10.9505C10.2974 9.58234 11.6617 8.22293 13.0242 6.86235C13.3554 6.53183 13.7618 6.45488 14.1372 6.64258C14.6736 6.91073 14.8205 7.6056 14.4381 8.06961C14.4013 8.1145 14.3594 8.15531 14.3185 8.19611C12.7053 9.80968 11.0909 11.4221 9.47946 13.0374C9.27482 13.2426 9.04511 13.3738 8.74776 13.3644L8.7466 13.3639Z"
        fill="white"
        clip-path="url(#clip0_1_1513)"
      />
    </Svg>
  </View>
);

export default Check;