import { ImageSourcePropType } from 'react-native';

type imagesType = {
  backgroundImages: { [data: string]: ImageSourcePropType };
  contentImages: { [data: string]: ImageSourcePropType };
};

const images: imagesType = {
  backgroundImages: {
    bgSky: require('./backgroundImages/background-sky.jpg'),
    bgBlue: require('./backgroundImages/background-blue.jpg'),
  },
  contentImages: { drawerImage: require('./contentImages/drawer-image.jpg') },
};

export default images;
