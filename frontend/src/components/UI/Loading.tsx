import { FC, useEffect, useState } from 'react';

type LoadingProps = {
  size?: number;
  color?: string;
};

const Loading: FC<LoadingProps> = ({ size, color = 'white', ...props }) => {
  const [currentState, setCurrentState] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentState(7 > currentState ? currentState + 1 : 0);
    }, 200);
  }, [currentState]);

  return (
    <svg
      width={size ?? 200}
      height={size ?? 200}
      viewBox="0 0 205 233"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <g style={{ display: currentState == 0 ? 'block' : 'none' }}>
          <path
            id="Vector"
            d="M66.501 66.6695V99.9159H166.247V166.415H133.001V199.661C169.73 199.661 199.5 169.89 199.5 133.161C199.5 96.4326 169.73 66.6621 133.001 66.6621H66.501V66.6695Z"
            fill={color}
          />
          <path
            id="Vector_2"
            d="M33.2469 133.17V66.6695H66.5001V33.4157H0.000488281V232.916H33.2469V166.415H133.001V133.17H33.2469Z"
            fill={color}
          />
        </g>
        <g style={{ display: currentState == 1 ? 'block' : 'none' }}>
          <path
            id="Vector_3"
            d="M33.1676 132.75V66.409H66.3421V33.235H0.000976562V232.257H33.1676V165.917H66.9623V132.75H33.1676Z"
            fill={color}
          />
          <path
            id="Vector_4"
            d="M132.412 33.4277V66.5943H171.592V132.935H132.98V166.102H138.426C175.066 166.102 204.766 136.402 204.766 99.7614C204.766 63.1201 175.066 33.4203 138.426 33.4203"
            fill={color}
          />
          <path
            id="Vector_5"
            d="M99.5428 33.174V33.1666V0H66.3677V33.174H99.5428Z"
            fill={color}
          />
          <path
            id="Vector_6"
            d="M132.524 33.174V33.1666V0H99.3491V33.174H132.524Z"
            fill={color}
          />
          <path
            id="Vector_7"
            d="M99.8045 132.929V132.921V99.7546H66.6294V132.929H99.8045Z"
            fill={color}
          />
          <path
            id="Vector_8"
            d="M132.785 132.929V132.921V99.7546H99.6113V132.929H132.785Z"
            fill={color}
          />
        </g>
        <g style={{ display: currentState == 2 ? 'block' : 'none' }}>
          <path
            id="Vector_9"
            d="M33.2822 132.815V66.3862H66.5001V33.1689H0.0722656V232.452H33.2822V166.024H67.1214V132.815H33.2822Z"
            fill={color}
          />
          <path
            id="Vector_10"
            d="M132.178 0.130523V33.3404H171.409V99.7688H132.747V132.978H138.199C174.888 132.978 204.627 103.24 204.627 66.5503C204.627 29.8612 174.888 0.122543 138.199 0.122543"
            fill={color}
          />
          <path
            id="Vector_11"
            d="M99.7448 66.1377V66.1303V32.9203H66.5264V66.1377H99.7448Z"
            fill={color}
          />
          <path
            id="Vector_12"
            d="M132.769 66.1377V66.1303V32.9203H99.5508V66.1377H132.769Z"
            fill={color}
          />
          <path
            id="Vector_13"
            d="M100.007 166.023V166.015V132.805H66.7886V166.023H100.007Z"
            fill={color}
          />
          <path
            id="Vector_14"
            d="M133.031 166.023V166.015V132.805H99.8125V166.023H133.031Z"
            fill={color}
          />
        </g>
        <g style={{ display: currentState == 3 ? 'block' : 'none' }}>
          <path
            id="Vector_15"
            d="M33.4661 132.581V65.9986H66.7615V32.7032H0.178711V232.452H33.4661V165.868H66.7302V132.581H33.4661Z"
            fill={color}
          />
          <path
            id="Vector_16"
            d="M66.7623 65.9986V99.286H166.632V165.868H66.731V199.156H133.345C170.12 199.156 199.927 169.348 199.927 132.573C199.927 95.7988 170.12 65.9906 133.345 65.9906H66.7623V65.9986Z"
            fill={color}
          />
        </g>
        <g style={{ display: currentState == 4 ? 'block' : 'none' }}>
          <path
            id="Vector_17"
            d="M134.1 199.297V199.289V166.079H100.881V199.297H134.1Z"
            fill={color}
          />
          <path
            id="Vector_18"
            d="M34.1013 132.742V66.242H67.3551V32.9882H0.855469V232.488H34.1013V165.988L100.796 165.893V132.647L34.1013 132.742Z"
            fill={color}
          />
          <path
            id="Vector_19"
            d="M67.3564 66.242V99.4884H167.102V165.988H133.857V199.234C170.586 199.234 200.356 169.463 200.356 132.734C200.356 96.0051 170.586 66.2346 133.857 66.2346H67.3564V66.242Z"
            fill={color}
          />
        </g>
        <g style={{ display: currentState == 5 ? 'block' : 'none' }}>
          <path
            id="Vector_20"
            d="M34.071 132.651V66.2118V32.9888H0.855957V232.305H34.071V165.866H133.734H100.468L99.898 132.651H34.071Z"
            fill={color}
          />
          <path
            id="Vector_21"
            d="M133.734 65.6344H100.324L100.376 65.6423L100.324 98.858H166.949V165.297H133.734V198.512C170.429 198.512 200.172 168.768 200.172 132.074C200.172 95.3781 170.429 65.6344 133.734 65.6344Z"
            fill={color}
          />
          <path
            id="Vector_22"
            d="M67.295 66.2118V66.2044V32.9888H34.0708V66.2118H67.295Z"
            fill={color}
          />
          <path
            id="Vector_23"
            d="M100.324 66.2118V66.2044V32.9888H67.1001V66.2118H100.324Z"
            fill={color}
          />
          <path
            id="Vector_24"
            d="M133.78 198.468V198.46V165.294H100.605V198.468H133.78Z"
            fill={color}
          />
        </g>
        <g style={{ display: currentState == 6 ? 'block' : 'none' }}>
          <path
            id="Vector_25"
            d="M34.071 132.651V66.2118V32.9888H0.855957V232.305H34.071V165.866H133.734H100.468L99.898 132.651H34.071Z"
            fill={color}
          />
          <path
            id="Vector_26"
            d="M134.553 65.5648L133.918 65.5682L133.258 65.5677L133.384 98.9873L166.949 98.8579V165.297H133.734V198.512C170.429 198.512 200.172 168.768 200.172 132.074C200.172 95.3781 171.248 65.5648 134.553 65.5648Z"
            fill={color}
          />
          <path
            id="Vector_27"
            d="M67.295 66.2118V66.2044V32.9888H34.0708V66.2118H67.295Z"
            fill={color}
          />
          <path
            id="Vector_28"
            d="M100.324 66.2118V66.2044V32.9888H67.1001V66.2118H100.324Z"
            fill={color}
          />
          <path
            id="Vector_29"
            d="M133.576 66.2118V66.2044V32.9888H98.5625V66.2118H133.576Z"
            fill={color}
          />
          <path
            id="Vector_30"
            d="M133.555 165.812V165.804V132.638H99.6899V165.812H133.555Z"
            fill={color}
          />
        </g>
        <g style={{ display: currentState == 7 ? 'block' : 'none' }}>
          <path
            id="Vector_31"
            d="M33.9284 132.651V66.2118V32.9888H0.713379V232.305H33.9284V165.866H133.592H100.325L99.7554 132.651H33.9284Z"
            fill={color}
          />
          <path
            id="Vector_32"
            d="M134.41 32.8417L133.776 32.8451L133.115 32.8446L133.242 66.2642L166.806 66.1348V132.573H133.591V165.789C170.286 165.789 200.03 136.045 200.03 99.3504C200.03 62.655 171.105 32.8417 134.41 32.8417Z"
            fill={color}
          />
          <path
            id="Vector_33"
            d="M70.1791 66.2118V66.2044V32.9888H30.9019V66.2118H70.1791Z"
            fill={color}
          />
          <path
            id="Vector_34"
            d="M100.182 66.2118V66.2044V32.9888H66.9575V66.2118H100.182Z"
            fill={color}
          />
          <path
            id="Vector_35"
            d="M133.394 66.2118V66.2044V32.9888H100.169V66.2118H133.394Z"
            fill={color}
          />
          <path
            id="Vector_36"
            d="M133.775 165.812V165.804V132.638H99.1846V165.812H133.775Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

export default Loading;
