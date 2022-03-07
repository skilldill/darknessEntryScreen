import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 2.44824H14C7.37258 2.44824 2 7.82083 2 14.4482V22.9482M46 2.44824H54C60.6274 2.44824 66 7.82082 66 14.4482V22.9482M46 66.4482H54C60.6274 66.4482 66 61.0757 66 54.4482V44.6982M24 66.4482H14C7.37258 66.4482 2 61.0757 2 54.4482V44.6982" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.5 24.4482V28.9482" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
        <path d="M49.5 24.4482V28.9482" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
        <path d="M37.5 24.4482V38.5413C37.5 39.9937 36.4596 41.2376 35.03 41.4941L32.5 41.9482" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.5 49.4482L26.9055 50.3763C32.8107 54.2755 40.576 53.8325 45.9994 49.2869L47 48.4482" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`

export const FaceIdIosIcon = ({ width = 50, height = 50 }) => (
    <SvgXml xml={xml} width={width} height={height} />
)