import {Path, Svg} from 'react-native-svg';

const Calender = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 51 51" fill="none">
      <Path
        d="M3 20.5H48M13 3V8M38 3V8M11 48H40C42.8002 48 44.2005 48 45.27 47.455C46.2108 46.9757 46.9757 46.2108 47.455 45.27C48 44.2005 48 42.8002 48 40V16C48 13.1997 48 11.7996 47.455 10.7301C46.9757 9.78923 46.2108 9.02432 45.27 8.54497C44.2005 8 42.8002 8 40 8H11C8.19975 8 6.7996 8 5.73005 8.54497C4.78923 9.02432 4.02432 9.78923 3.54497 10.7301C3 11.7996 3 13.1997 3 16V40C3 42.8002 3 44.2005 3.54497 45.27C4.02432 46.2108 4.78923 46.9757 5.73005 47.455C6.7996 48 8.19972 48 11 48Z"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Calender;
