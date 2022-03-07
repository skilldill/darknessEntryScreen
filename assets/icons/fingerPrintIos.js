import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.6354 0.943398C34.1521 -0.174912 29.4346 -0.334713 24.8441 0.656273C24.4894 0.732859 24.2639 1.08253 24.3404 1.43729C24.417 1.79205 24.7667 2.01756 25.1215 1.94097C29.5176 0.991934 34.0461 1.14842 38.3536 2.22802C48.6547 4.80983 57.229 12.5548 60.4947 22.6718C61.7577 26.5843 62.2942 30.7505 62.4016 35.1167C62.4106 35.4795 62.7119 35.7664 63.0747 35.7575C63.4376 35.7485 63.7245 35.4472 63.7155 35.0843C63.6066 30.6582 63.0638 26.3849 61.7697 22.3432C58.3782 11.7515 49.4166 3.63265 38.6354 0.943398Z" fill="#fff"/>
        <path d="M21.5092 2.93163C21.8591 2.83511 22.0645 2.47325 21.968 2.12339C21.8714 1.77352 21.5096 1.56815 21.1597 1.66466C16.359 2.98903 9.6059 7.56519 5.43239 13.6786C5.43076 13.681 5.42915 13.6834 5.42756 13.6858C1.76295 19.2083 -0.534244 26.1484 0.107126 32.8828C0.107736 32.8892 0.108441 32.8956 0.10924 32.902C0.26295 34.1317 0.520993 35.3591 0.779338 36.5879C1.32346 39.1761 1.86893 41.7706 1.44377 44.4064C1.38597 44.7647 1.62958 45.102 1.98788 45.1598C2.34618 45.2176 2.6835 44.974 2.74129 44.6157C3.18572 41.8605 2.63388 39.173 2.08192 36.4851C1.82665 35.2419 1.57137 33.9987 1.41459 32.7486C0.811365 26.3851 2.98413 19.7466 6.5203 14.416C10.535 8.5373 17.0362 4.16562 21.5092 2.93163Z" fill="#fff"/>
        <path d="M30.1327 4.39985C38.3832 3.89603 46.632 7.26314 52.1717 13.7139C52.4082 13.9893 52.3766 14.4042 52.1013 14.6406C51.826 14.8771 51.4111 14.8455 51.1746 14.5702C45.9066 8.43576 38.0571 5.23144 30.2088 5.71195C30.206 5.71212 30.2032 5.71227 30.2004 5.71241C20.2754 6.19265 10.9804 12.9257 7.56159 22.3603C7.43794 22.7016 7.06109 22.8779 6.71987 22.7543C6.37865 22.6306 6.20227 22.2538 6.32592 21.9126C9.92755 11.9735 19.6878 4.90702 30.1327 4.39985Z" fill="#fff"/>
        <path d="M54.1737 16.5848C53.9714 16.2836 53.5631 16.2033 53.2618 16.4057C52.9605 16.608 52.8803 17.0163 53.0827 17.3176C56.1537 21.8904 57.4235 26.8665 57.9255 32.7717C57.9563 33.1333 58.2743 33.4016 58.636 33.3708C58.9976 33.3401 59.2658 33.022 59.2351 32.6604C58.7221 26.6261 57.4126 21.4076 54.1737 16.5848Z" fill="#fff"/>
        <path d="M58.7958 35.4504C59.158 35.4277 59.47 35.703 59.4926 36.0653C59.7403 40.0279 59.7426 44.5112 59.3042 47.8243C59.2566 48.1841 58.9263 48.4372 58.5666 48.3896C58.2068 48.342 57.9537 48.0117 58.0013 47.6519C58.4238 44.4586 58.4261 40.0704 58.1809 36.1473C58.1582 35.785 58.4335 35.473 58.7958 35.4504Z" fill="#fff"/>
        <path d="M6.56923 25.5432C6.65441 25.1904 6.43746 24.8354 6.08467 24.7502C5.73187 24.665 5.37682 24.882 5.29164 25.2348C4.80931 27.2325 4.55892 29.2847 4.549 31.3388C4.53877 33.4559 4.93354 35.5225 5.32845 37.5899C5.65151 39.2811 5.97467 40.9728 6.07632 42.6932C6.20984 44.9531 5.7345 47.2163 4.91309 49.3703C4.78378 49.7094 4.95385 50.0891 5.29296 50.2184C5.63207 50.3477 6.01181 50.1777 6.14113 49.8386C7.00937 47.5617 7.53566 45.1092 7.38832 42.6157C7.28737 40.9071 6.96424 39.2252 6.64123 37.5439C6.2471 35.4925 5.85315 33.442 5.86328 31.3451C5.8727 29.3933 6.11067 27.4425 6.56923 25.5432Z" fill="#fff"/>
        <path d="M23.8126 10.94C23.9478 11.2768 23.7844 11.6595 23.4476 11.7947C16.6348 14.5307 11.5188 20.7047 10.4752 27.9852C10.0391 31.0269 10.5102 34.0398 10.9812 37.052C11.2464 38.7483 11.5116 40.4443 11.6147 42.1451C11.8382 45.833 11.4182 49.8839 9.01803 53.5696C8.81998 53.8737 8.41289 53.9597 8.10875 53.7617C7.80462 53.5636 7.71863 53.1565 7.91668 52.8524C10.1034 49.4944 10.5174 45.7644 10.3028 42.2246C10.1982 40.499 9.93464 38.7833 9.67128 37.0686C9.19876 33.9923 8.72678 30.9195 9.17416 27.7987C10.2885 20.025 15.7371 13.4748 22.9579 10.5751C23.2946 10.4399 23.6773 10.6032 23.8126 10.94Z" fill="#fff"/>
        <path d="M46.8823 14.6814C41.5077 9.64741 33.7178 7.89046 26.6382 9.4433C26.2836 9.52105 26.0593 9.87147 26.1371 10.226C26.2148 10.5805 26.5652 10.8048 26.9197 10.7271C33.6236 9.25665 40.9587 10.934 45.9839 15.6406C50.2194 19.6077 52.6789 25.38 53.3227 31.6779C53.3597 32.0389 53.6823 32.3017 54.0433 32.2648C54.4044 32.2279 54.6671 31.9053 54.6302 31.5442C53.9617 25.0047 51.3983 18.9111 46.8823 14.6814Z" fill="#fff"/>
        <path d="M54.4927 34.6738C54.8538 34.6368 55.1765 34.8994 55.2136 35.2604C55.8377 41.337 55.5687 47.9003 54.6265 54.2496C54.5732 54.6086 54.239 54.8565 53.88 54.8032C53.521 54.7499 53.2732 54.4157 53.3265 54.0567C54.2555 47.7957 54.5172 41.3439 53.9062 35.3947C53.8691 35.0336 54.1317 34.7109 54.4927 34.6738Z" fill="#fff"/>
        <path d="M31.582 13.3553C21.512 13.3553 13.3301 21.3892 13.3301 31.3219C13.3301 32.3829 13.4242 33.4225 13.6037 34.4334C13.6672 34.7907 14.0083 35.029 14.3656 34.9655C14.723 34.9021 14.9612 34.561 14.8978 34.2036C14.7316 33.2677 14.6444 32.305 14.6444 31.3219C14.6444 22.1352 22.2176 14.6696 31.582 14.6696C35.8139 14.6696 39.6803 16.1949 42.648 18.7152C42.9247 18.9501 43.3394 18.9163 43.5743 18.6396C43.8092 18.363 43.7754 17.9483 43.4988 17.7134C40.3008 14.9975 36.1349 13.3553 31.582 13.3553Z" fill="#fff"/>
        <path d="M44.9712 20.1635C45.2331 19.9123 45.6491 19.921 45.9003 20.183C48.8004 23.2072 49.7288 27.9605 50.343 31.9494C51.0349 36.4426 51.1406 40.826 51.1406 42.8585C51.1406 43.2214 50.8463 43.5156 50.4834 43.5156C50.1205 43.5156 49.8263 43.2214 49.8263 42.8585C49.8263 40.8589 49.7216 36.5497 49.044 32.1494C48.4738 28.4462 47.6517 23.9082 44.9517 21.0927C44.7005 20.8307 44.7092 20.4147 44.9712 20.1635Z" fill="#fff"/>
        <path d="M50.9737 46.6219C51.0025 46.2601 50.7326 45.9435 50.3709 45.9146C50.0091 45.8858 49.6924 46.1557 49.6636 46.5175C49.3408 50.5654 48.9191 54.6088 48.0635 58.3439C47.9824 58.6977 48.2035 59.0502 48.5573 59.1312C48.911 59.2123 49.2635 58.9912 49.3446 58.6374C50.2228 54.8039 50.6501 50.6806 50.9737 46.6219Z" fill="#fff"/>
        <path d="M14.6615 36.852C15.0176 36.7819 15.3631 37.0137 15.4332 37.3698C16.8227 44.4257 15.8628 50.8355 12.1833 56.4502C11.9844 56.7537 11.577 56.8385 11.2735 56.6396C10.9699 56.4407 10.8851 56.0333 11.084 55.7298C14.5461 50.4469 15.4778 44.3985 14.1437 37.6238C14.0736 37.2677 14.3054 36.9221 14.6615 36.852Z" fill="#fff"/>
        <path d="M31.582 17.631C25.0452 17.631 18.6326 22.691 17.9781 29.0504C17.6915 31.8345 18.0941 34.5769 18.4968 37.3204C18.8484 39.7159 19.2002 42.1124 19.0934 44.5381C18.8489 50.0898 17.22 54.6726 14.4211 58.4471C14.2049 58.7386 14.266 59.1502 14.5575 59.3663C14.8491 59.5825 15.2607 59.5214 15.4768 59.2299C18.4454 55.2266 20.1515 50.386 20.4064 44.5959C20.5127 42.1811 20.1599 39.7923 19.8073 37.4051C19.4041 34.6752 19.0012 31.9473 19.2855 29.1849C19.8605 23.5983 25.6107 18.9453 31.582 18.9453C34.3671 18.9453 41.5731 20.4534 43.8653 27.9205C45.3017 32.5998 45.6935 38.9326 45.3456 45.0849C44.9977 51.2364 43.9155 57.12 42.4603 60.8928C42.3297 61.2314 42.4983 61.6118 42.8369 61.7424C43.1755 61.873 43.5559 61.7044 43.6865 61.3658C45.209 57.4186 46.3057 51.386 46.6578 45.1591C47.0099 38.9329 46.6229 32.4249 45.1217 27.5348C42.5773 19.2461 34.6012 17.631 31.582 17.631Z" fill="#fff"/>
        <path d="M21.4691 56.4512C21.773 56.6494 21.8587 57.0566 21.6605 57.3606C21.253 57.9854 20.8945 58.6391 20.536 59.2928C20.1775 59.9465 19.819 60.6004 19.4114 61.2253C19.2131 61.5293 18.806 61.615 18.502 61.4167C18.198 61.2184 18.1123 60.8113 18.3105 60.5073C18.718 59.8825 19.0765 59.2288 19.435 58.5751C19.7935 57.9213 20.1521 57.2675 20.5596 56.6426C20.7579 56.3386 21.1651 56.2529 21.4691 56.4512Z" fill="#fff"/>
        <path d="M27.096 24.4525C27.3977 24.2508 27.4786 23.8426 27.2769 23.541C27.0751 23.2393 26.667 23.1583 26.3653 23.3601C23.7631 25.1006 22.1666 27.494 22.1666 31.0002C22.1666 33.088 22.5365 34.7946 22.9158 36.5449C23.4835 39.1641 23.8685 41.7777 23.7993 44.468C23.7153 47.7349 23.0761 50.7201 21.8474 53.564C21.7034 53.8971 21.8568 54.2839 22.19 54.4278C22.5232 54.5718 22.9099 54.4184 23.0539 54.0852C24.353 51.0784 25.0251 47.9266 25.1132 44.5018C25.1851 41.7062 24.7894 38.9892 24.2006 36.267C23.8204 34.509 23.4809 32.9394 23.4809 31.0002C23.4809 27.9961 24.8025 25.9866 27.096 24.4525Z" fill="#fff"/>
        <path d="M29.6609 22.1436C32.3878 21.5877 35.3223 22.2746 37.4822 24.0228C41.3402 27.1455 41.8533 32.8403 42.2691 37.4549L42.2903 37.69C42.8276 43.6385 42.2126 49.4163 40.9736 55.2186C40.8978 55.5736 40.5487 55.7999 40.1937 55.7241C39.8388 55.6483 39.6125 55.2991 39.6883 54.9442C40.9087 49.2288 41.5034 43.5885 40.9813 37.8082C40.964 37.6169 40.9468 37.4228 40.9295 37.2264L40.9292 37.2235C40.5599 33.0534 40.0973 27.8304 36.6553 25.0444C34.8087 23.5498 32.276 22.9518 29.9234 23.4314C29.5678 23.5039 29.2207 23.2744 29.1482 22.9188C29.0757 22.5632 29.3052 22.2161 29.6609 22.1436Z" fill="#fff"/>
        <path d="M40.0448 58.4885C40.1344 58.1368 39.9219 57.7791 39.5701 57.6896C39.2184 57.6 38.8607 57.8126 38.7712 58.1643C38.3739 59.7247 37.7617 61.1333 36.9856 62.4301C36.7992 62.7415 36.9005 63.145 37.2119 63.3314C37.5233 63.5178 37.9269 63.4165 38.1133 63.1051C38.9498 61.7075 39.6138 60.1816 40.0448 58.4885Z" fill="#fff"/>
        <path d="M36.8313 48.9521C37.1918 48.9948 37.4494 49.3215 37.4067 49.682C36.7861 54.9267 35.3849 59.6042 33.1366 63.6613C32.9607 63.9787 32.5608 64.0934 32.2433 63.9175C31.9259 63.7416 31.8111 63.3417 31.9871 63.0242C34.1387 59.1416 35.4972 54.6339 36.1015 49.5275C36.1442 49.1671 36.4709 48.9095 36.8313 48.9521Z" fill="#fff"/>
        <path d="M36.6959 30.6556C36.2403 28.2212 34.151 26.3591 31.6146 26.3591C28.1799 26.3591 25.7701 29.8212 26.6193 33.0422C28.0562 38.7279 28.292 44.2077 27.3193 49.4855L27.3186 49.4893C26.4745 54.228 24.8535 58.4908 22.6424 62.1031C22.453 62.4127 22.5503 62.8172 22.8598 63.0067C23.1694 63.1962 23.5739 63.0988 23.7634 62.7893C26.0649 59.0292 27.7411 54.6109 28.6122 49.7218C29.6222 44.2403 29.3719 38.5684 27.8926 32.7168L27.8909 32.7099C27.2539 30.3005 29.0294 27.6734 31.6146 27.6734C33.4802 27.6734 35.0554 29.0459 35.4032 30.8929C36.3597 36.4411 36.858 41.5862 36.5032 46.016C36.4742 46.3778 36.744 46.6945 37.1058 46.7235C37.4676 46.7525 37.7843 46.4827 37.8133 46.1209C38.181 41.5294 37.662 36.2576 36.6976 30.6648C36.697 30.6617 36.6965 30.6586 36.6959 30.6556Z" fill="#fff"/>
        <path d="M29.6537 59.1171C29.9765 59.283 30.1037 59.6792 29.9378 60.002L28.1965 63.3906C28.0307 63.7134 27.6345 63.8406 27.3117 63.6747C26.9889 63.5088 26.8617 63.1127 27.0275 62.7899L28.7688 59.4013C28.9347 59.0785 29.3309 58.9513 29.6537 59.1171Z" fill="#fff"/>
        <path d="M32.1033 31.2892C32.0203 30.9359 31.6666 30.7168 31.3133 30.7998C30.96 30.8828 30.7409 31.2365 30.8239 31.5898C33.0399 41.0232 32.7356 49.3066 30.0363 56.363C29.9066 56.702 30.0763 57.0819 30.4152 57.2115C30.7542 57.3412 31.1341 57.1715 31.2638 56.8326C34.0783 49.475 34.3644 40.9141 32.1033 31.2892Z" fill="#fff"/>
    </svg>
`

export const FingerPrintIosIcon = ({ width = 50, height = 50 }) => (
    <SvgXml xml={xml} width={width} height={height} />
)