import {createGlobalStyle} from 'styled-components';

import GrinchedRegular from './GrinchedRegular.otf';
import IndieFlowerRegular from './IndieFlower-Regular.ttf';
import NunitoLight from './Nunito-Light.ttf';
import NunitoRegular from './Nunito-Regular.ttf';
import HollyAndBerries from './HollyAndBerries.ttf';
import LangarRegular from './Langar-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'GrinchedRegular';
        src: local('GrinchedRegular'), local('Grinched Regular'),
        url(${GrinchedRegular}), 
        format('otf');
    }

    @font-face {
        font-family: 'LangarRegular';
        src: local('LangarRegular'),
        url(${LangarRegular}), 
        format('truetype');
    }

    @font-face {
        font-family: 'IndieFlowerRegular';
        src:  local('IndieFlowerRegular'),  
        url(${IndieFlowerRegular}),
        format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'NunitoLight';
        src:  local('NunitoLight'),  
        url(${NunitoLight}),
        format('truetype');
    }

    @font-face {
        font-family: 'NunitoRegular';
        src:  local('NunitoRegular'),  
        url(${NunitoRegular}),
        format('truetype');
    }

    @font-face {
        font-family: 'HollyAndBerries';
        src:  local('HollyAndBerries'),  
        url(${HollyAndBerries}),
        format('truetype');
    }
`;