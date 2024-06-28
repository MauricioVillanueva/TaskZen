"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const UGrad = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const RGrad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const RGrad = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "50%",
    y2: "50%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "100%", "100%"],
    y1: ["50%", "50%", "0%"],
    y2: ["50%", "50%", "0%"],
  },
};

const grad4 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad5 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const BGrad = {
  initial: {
    x1: "100%",
    x2: "0%",
    y1: "0%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "0%", "0%"],
    x2: ["20%", "0%", "0%"],
    y1: ["0%", "0%", "160%"],
    y2: ["0%", "20%", "200%"],
  },
};

// LEFT SIDE
const LGrad1 = {
  initial: {
    x1: "100%",
    x2: "0%",
    y1: "100%",
    y2: "0%",
  },
  animate: {
    x1: ["100%", "100%", "0%"],
    x2: ["200%", "0%", "0%"],
    y1: ["100%", "100%", "0%"],
    y2: ["100%", "100%", "0%"],
  },
};

const LGrad2 = {
  initial: {
    x1: "100%",
    x2: "100%",
    y1: "50%",
    y2: "50%",
  },
  animate: {
    x1: ["100%", "20%", "0%"],
    x2: ["100%", "0%", "0%"],
    y1: ["50%", "50%", "50%"],
    y2: ["50%", "50%", "50%"],
  },
};
export const PulseBeams = () => {
  return (
    <div className="flex h-[1080px] w-full relative items-center justify-center antialiased overflow-hidden">
      {/* Core SVGs component */}
      <div className="absolute inset-0 flex items-center justify-center w-full">
        <div
          style={{ boxShadow: "inset 0px 0px 200px 130px #000" }}
          className="absolute z-10 w-[1920px] h-[1080px]"
        />
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs: React.FC = () => {
  useEffect(() => {
    const paths = document.querySelectorAll<SVGPathElement>(".propagation");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.transition = "none";
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = length.toString();
      path.getBoundingClientRect();
      path.style.transition = "stroke-dashoffset 5s ease-in-out";
      path.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0 overflow-visible"
    >
      {/* RIGHT SIDE */}
      <path
        className="propagation"
        d="M1239.3 355.512L1269.91 324.906H1383.91"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1239.3 381.239H1345.32L1372.82 353.738H1404.31L1404.31 353.738L1460.64 297.404H1500.57L1500.57 297.404H1605.69L1639.85 331.559H1693.52L1693.52 331.559H1880.71L1899.34 350.189M1693.52 331.559L1748.08 277L1919.5 277M1500.57 297.404L1532.95 329.785H1593.27M1404.31 353.738H1446.45L1456.21 343.979"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1240 476.797L1308.94 407.853H1440.24L1485.93 362.165H1530.73L1530.73 362.165H1848.32L1530.73 362.165L1571.98 403.417H1634.08L1634.08 403.417H1760.5L1634.08 403.417L1656.26 425.596H1739.21"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1238 481.929H1314.27L1314.27 481.929H1420.72L1420.72 481.929L1461.09 441.564L1461.09 441.564H1582.18L1591.94 451.323M1314.27 481.929L1345.76 450.436H1389.67M1461.09 441.564L1481.94 420.717"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1221.4 530L1243.3 508.1H1379.91"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1221.4 571.692L1264.59 528.504H1494.8"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1235.43 610L1294.75 550.682H1413.63L1413.63 550.682H1556.9L1657.15 450.436H1788.89L1788.89 450.436L1816.83 422.491H1919.5M1413.63 550.682L1442.9 579.958H1466.41L1466.41 579.958H1594.6L1691.3 483.26H1725.9L1725.9 483.26H1821.71L1725.9 483.26L1760.94 518.302H1919.5M1466.41 579.958L1486.81 600.362H1577.3M1788.89 450.436H1919.5"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1240 653.337L1315.6 577.74H1378.58"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1248.17 685.084L1310.72 622.541H1368.83L1368.83 622.54H1603.92L1680.65 545.803H1901.55M1624.56 601.895H1666.46L1701.7 566.651H1753.4M1368.83 622.541L1406.09 659.801H1662.91L1722.35 600.362"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1240 685.084H1248.17M1248.17 685.084H1445.12L1516.53 685.084H1680.65L1787.56 578.184H1919.5M1714.37 651.373H1782.68L1819.05 615H1887.8M1445.12 685.084L1509.88 749.845H1640.73M1516.53 685.084L1554.24 722.787H1757.84L1827.03 653.591"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M1238.85 725L1297.85 784H1739.65L1807.96 715.69H1878.04L1878.04 715.69L1919.73 674L1878.04 715.69M1238.85 725H1243.74L1426.93 725L1448.67 751.619M1878.04 715.69H1919.73"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      {/* LEFT SIDE */}

      <path
        className="propagation"
        d="M679.183 354.22L621.962 297H180.167L111.857 365.31H41.7733L0 407.083M41.7733 365.31H0.5"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M676.078 351.116H492.884L471.149 329.381"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M680 395.916H239.162L132.261 502.816H0.5 M205.45 429.627H137.141L100.768 466H32.0148M403.283 395.916L365.579 358.213H161.981L92.7838 427.409M474.697 395.916L409.936 331.155H279.083"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M671.642 395.916L609.099 458.459H315.899L239.162 535.197H18.2641M295.253 479.105H253.356L218.112 514.349H166.416M550.991 458.459L513.731 421.199H256.905L197.466 480.638"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M680 427.479L604.22 503.26H541.233
          "
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M679.885 475.5L625.067 530.318H506.191L506.191 530.318H362.918L262.671 630.564H130.931L130.931 630.564L102.986 658.509H0.5M130.931 630.564H0.5M506.191 530.318L476.915 501.042H325.214L228.516 597.74H98.1066L193.918 597.74L158.876 562.698H0.5M453.406 501.042L433.002 480.638H342.513"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M698.227 509.5L655.23 552.496H425.017
          "
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M698.227 551.195L676.521 572.9H539.902
          "
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M698.227 599.071H605.55L605.55 599.071H499.094L458.729 639.436L458.729 639.436H337.634L327.876 629.677M605.55 599.071L574.057 630.564H530.143M458.729 639.436L437.881 660.283"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M684.949 599.071L610.873 673.147H479.576L433.889 718.835H389.088L389.088 718.835H71.4924L389.088 718.835L347.836 677.583H285.737L159.319 677.583H285.737L285.737 677.583L263.558 655.404H180.611"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M680.514 699.761H574.5L546.999 727.262H515.506L515.506 727.262L459.172 783.596H419.251L419.251 783.596H314.125L279.97 749.441H226.298L226.298 749.441H39.1119L20.4819 730.811M226.298 749.441L171.739 804H0.5M515.506 727.262H473.366L463.608 737.021M419.251 783.596L386.87 751.215H326.545"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M680.514 725.488L649.907 756.094H535.91
          "
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      {/* UPPER SIDE */}

      <path
        className="propagation"
        d="M710.06 355.001L677.752 322.001L677.752 223.144"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M745.748 355.001L745.748 250.652L709.405 223.144L709.405 191.644L709.405 191.644L634.961 135.297L634.961 0.5M709.405 191.644 L709.405 149.495L696.509 139.734M634.961 95.3661L677.752 62.9779L677.752 0.499998"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M870.997 355.001L780.919 287.034L780.919 155.706L720.543 110.008L720.543 0.499996M720.543 65.1962L775.057 23.9346L775.057 0.499994"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M878.81 355.359L878.81 175.228L825.468 134.853L825.468 134.853L825.468 23.9346L838.364 14.1738M878.81 281.709L837.192 250.209L837.192 206.285M825.468 134.853 L797.918 114.001"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M930 355.001L910 340 L910 216.046"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M970.497 355.001L940.359 331.401L940.359 101.134"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1039.5 355L969.668 301.231L969.668 182.326L969.668 182.326L969.668 39.0195L918.776 0.499988M1008.36 129.529L1035.32 109.12L1035.32 18.6105M969.668 182.326L1008.36 153.044L1008.36 0.500014"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1104 355L1005.42 280.378L1005.42 217.377"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1147.28 347.817L1064.63 285.259L1064.63 0.499981M1064.63 227.138L1113.87 189.869L1113.87 0.499979"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1147.28 354.472L1147.28 347.817M1147.28 347.817L1147.28 0.499978M1147.28 150.826L1232.86 86.0489L1232.86 0.499974M1147.28 79.3938L1197.1 41.6815L1197.1 0.499975"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1206.48 352.254L1206.48 169.016L1235.21 147.276"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1203.74 355L1206.48 352.254M1206.48 352.254L1278 282.501L1278 0.499972"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      {/* BOTTOM SIDE */}

      <path
        className="propagation"
        d="M712.263 725.359L709.517 728.106M709.517 728.106L638.003 807L638.003 1079.69"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M709.517 728.106L709.517 911.343L680.794 933.083"
        stroke="#4FC1FF"
        strokeWidth="2"
      />
      <path
        className="propagation"
        d="M768.721 725.887L768.721 1079.5M768.721 929.534L683.139 994.31L683.139 1079.69M768.721 1000.97L718.896 1038.68L718.896 1079.69"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M768.721 732.542L851.371 795.1L851.371 1079.5M851.371 853.222L802.133 890.49L802.133 1079.5"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M812.003 725.359L910.575 799.981L910.575 862.983"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M876.503 725.359L946.332 779.128L946.332 898.033L946.332 898.033L946.332 1041.34L997 1079.69M946.332 898.033L907.644 927.315L907.644 1079.05M907.644 950.83L880.68 971.239L880.68 1061.75"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M945.503 725.359L975.641 748.958L975.641 979.225"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M988 725.358L1008 740L1008 864.314"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1037.19 725L1037.19 905.132L1090.53 945.506L1090.53 945.506L1090.53 1056.42L1081.5 1063.26M1037.19 798.65L1078.81 830.151L1078.81 874.074M1090.53 945.506L1118.08 966.359"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1045 725.359L1135.08 793.326L1135.08 924.653L1195.46 970.352L1195.46 1015.16L1195.46 1015.16L1195.46 1080M1195.46 1015.16L1140.94 1056.42L1140.94 1080"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1170.25 725.359L1170.25 829.707L1206.59 857.215L1206.59 888.716L1206.59 888.716L1281.04 945.062L1281.04 1080M1281.04 984.993L1238.25 1017.38L1238.25 1079.5M1206.59 888.716L1206.59 930.865L1219.49 940.626"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      <path
        className="propagation"
        d="M1205.94 725.359L1238.25 758.359L1238.25 857.215"
        stroke="#4FC1FF"
        strokeWidth="2"
      />

      {/* PROPAGATION */}

      <path
        className="propagation"
        d="M561 126.82V1H1V126.82L19.4453 139.253V246.175L1 258.608V371H561V258.608L542.555 246.175V139.253L561 126.82Z"
        stroke="#4FC1FF"
        strokeWidth="2"
        transform="translate(678, 354)"
      />

      {/* PULSEBEAMS */}

      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" overflow-visible"
      >
        <defs>
          <filter
            id="neonGlow"
            x="-10%"
            y="-50%"
           width="120%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="7" result="blur1" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* RIGHT SIDE */}
        <path
          d="M1239.3 355.512L1269.91 324.906H1383.91"
          stroke="url(#grad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1239.3 381.239H1345.32L1372.82 353.738H1404.31L1404.31 353.738L1460.64 297.404H1500.57L1500.57 297.404H1605.69L1639.85 331.559H1693.52L1693.52 331.559H1880.71L1899.34 350.189M1693.52 331.559L1748.08 277L1919.5 277M1500.57 297.404L1532.95 329.785H1593.27M1404.31 353.738H1446.45L1456.21 343.979"
          stroke="url(#RGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1240 476.797L1308.94 407.853H1440.24L1485.93 362.165H1530.73L1530.73 362.165H1848.32L1530.73 362.165L1571.98 403.417H1634.08L1634.08 403.417H1760.5L1634.08 403.417L1656.26 425.596H1739.21"
          stroke="url(#RGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1238 481.929H1314.27L1314.27 481.929H1420.72L1420.72 481.929L1461.09 441.564L1461.09 441.564H1582.18L1591.94 451.323M1314.27 481.929L1345.76 450.436H1389.67M1461.09 441.564L1481.94 420.717"
          stroke="url(#RGrad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1221.4 530L1243.3 508.1H1379.91"
          stroke="url(#grad4)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1221.4 571.692L1264.59 528.504H1494.8"
          stroke="url(#grad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1235.43 610L1294.75 550.682H1413.63L1413.63 550.682H1556.9L1657.15 450.436H1788.89L1788.89 450.436L1816.83 422.491H1919.5M1413.63 550.682L1442.9 579.958H1466.41L1466.41 579.958H1594.6L1691.3 483.26H1725.9L1725.9 483.26H1821.71L1725.9 483.26L1760.94 518.302H1919.5M1466.41 579.958L1486.81 600.362H1577.3M1788.89 450.436H1919.5"
          stroke="url(#RGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1240 653.337L1315.6 577.74H1378.58"
          stroke="url(#grad5)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1248.17 685.084L1310.72 622.541H1368.83L1368.83 622.54H1603.92L1680.65 545.803H1901.55M1624.56 601.895H1666.46L1701.7 566.651H1753.4M1368.83 622.541L1406.09 659.801H1662.91L1722.35 600.362"
          stroke="url(#RGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1240 685.084H1248.17M1248.17 685.084H1445.12L1516.53 685.084H1680.65L1787.56 578.184H1919.5M1714.37 651.373H1782.68L1819.05 615H1887.8M1445.12 685.084L1509.88 749.845H1640.73M1516.53 685.084L1554.24 722.787H1757.84L1827.03 653.591"
          stroke="url(#RGrad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1238.85 725H1243.74L1426.93 725L1448.67 751.619"
          stroke="url(#grad10)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1238.85 725L1297.85 784H1739.65L1807.96 715.69H1878.04L1878.04 715.69L1919.73 674L1878.04 715.69M1878.04 715.69H1919.73"
          stroke="url(#RGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        {/* LEFT SIDE */}
        <path
          d="M679.183 354.22L621.962 297H180.167L111.857 365.31H41.7733L0 407.083M41.7733 365.31H0.5"
          stroke="url(#LGrad5)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M676.078 351.116H492.884L471.149 329.381"
          stroke="url(#LGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M680 395.916H239.162L132.261 502.816H0.5 M205.45 429.627H137.141L100.768 466H32.0148M403.283 395.916L365.579 358.213H161.981L92.7838 427.409M474.697 395.916L409.936 331.155H279.083"
          stroke="url(#LGrad6)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M671.642 395.916L609.099 458.459H315.899L239.162 535.197H18.2641M295.253 479.105H253.356L218.112 514.349H166.416M550.991 458.459L513.731 421.199H256.905L197.466 480.638"
          stroke="url(#LGrad4)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M680 427.479L604.22 503.26H541.233"
          stroke="url(#LGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M679.885 475.5L625.067 530.318H506.191L506.191 530.318H362.918L262.671 630.564H130.931L130.931 630.564L102.986 658.509H0.5M130.931 630.564H0.5M506.191 530.318L476.915 501.042H325.214L228.516 597.74H98.1066L193.918 597.74L158.876 562.698H0.5M453.406 501.042L433.002 480.638H342.513"
          stroke="url(#LGrad5)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M698.227 509.5L655.23 552.496H425.017"
          stroke="url(#LGrad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M698.227 551.195L676.521 572.9H539.902"
          stroke="url(#LGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M698.227 599.071H605.55L605.55 599.071H499.094L458.729 639.436L458.729 639.436H337.634L327.876 629.677M605.55 599.071L574.057 630.564H530.143M458.729 639.436L437.881 660.283"
          stroke="url(#LGrad5)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M684.949 599.071L610.873 673.147H479.576L433.889 718.835H389.088L389.088 718.835H71.4924L389.088 718.835L347.836 677.583H285.737L159.319 677.583H285.737L285.737 677.583L263.558 655.404H180.611"
          stroke="url(#LGrad4)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M680.514 699.761H574.5L546.999 727.262H515.506L515.506 727.262L459.172 783.596H419.251L419.251 783.596H314.125L279.97 749.441H226.298L226.298 749.441H39.1119L20.4819 730.811M226.298 749.441L171.739 804H0.5M515.506 727.262H473.366L463.608 737.021M419.251 783.596L386.87 751.215H326.545"
          stroke="url(#LGrad5)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M680.514 725.488L649.907 756.094H535.91"
          stroke="url(#LGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        {/* UPPER SIDE */}
        <path
          d="M710.06 355.001L677.752 322.001L677.752 223.144"
          stroke="url(#UGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M745.748 355.001L745.748 250.652L709.405 223.144L709.405 191.644L709.405 191.644L634.961 135.297L634.961 0.5M709.405 191.644 L709.405 149.495L696.509 139.734M634.961 95.3661L677.752 62.9779L677.752 0.499998"
          stroke="url(#UGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M870.997 355.001L780.919 287.034L780.919 155.706L720.543 110.008L720.543 0.499996M720.543 65.1962L775.057 23.9346L775.057 0.499994"
          stroke="url(#UGrad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M878.81 355.359L878.81 175.228L825.468 134.853L825.468 134.853L825.468 23.9346L838.364 14.1738M878.81 281.709L837.192 250.209L837.192 206.285M825.468 134.853 L797.918 114.001"
          stroke="url(#UGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M930 355.001L910 340 L910 216.046"
          stroke="url(#UGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M970.497 355.001L940.359 331.401L940.359 101.134"
          stroke="url(#UGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1039.5 355L969.668 301.231L969.668 182.326L969.668 182.326L969.668 39.0195L918.776 0.499988M1008.36 129.529L1035.32 109.12L1035.32 18.6105M969.668 182.326L1008.36 153.044L1008.36 0.500014"
          stroke="url(#UGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1104 355L1005.42 280.378L1005.42 217.377"
          stroke="url(#UGrad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1147.28 347.817L1064.63 285.259L1064.63 0.499981M1064.63 227.138L1113.87 189.869L1113.87 0.499979"
          stroke="url(#UGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1147.28 354.472L1147.28 347.817M1147.28 347.817L1147.28 0.499978M1147.28 150.826L1232.86 86.0489L1232.86 0.499974M1147.28 79.3938L1197.1 41.6815L1197.1 0.499975"
          stroke="url(#UGrad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1206.48 352.254L1206.48 169.016L1235.21 147.276"
          stroke="url(#UGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1203.74 355L1206.48 352.254M1206.48 352.254L1278 282.501L1278 0.499972"
          stroke="url(#UGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        {/* BOTTOM SIDE */}
        <path
          d="M712.263 725.359L709.517 728.106M709.517 728.106L638.003 807L638.003 1079.69"
          stroke="url(#BGrad4)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M709.517 728.106L709.517 911.343L680.794 933.083"
          stroke="url(#BGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M768.721 725.887L768.721 1079.5M768.721 929.534L683.139 994.31L683.139 1079.69M768.721 1000.97L718.896 1038.68L718.896 1079.69"
          stroke="url(#BGrad6)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M768.721 732.542L851.371 795.1L851.371 1079.5M851.371 853.222L802.133 890.49L802.133 1079.5"
          stroke="url(#BGrad5)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M812.003 725.359L910.575 799.981L910.575 862.983"
          stroke="url(#BGrad3)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M876.503 725.359L946.332 779.128L946.332 898.033L946.332 898.033L946.332 1041.34L997 1079.69M946.332 898.033L907.644 927.315L907.644 1079.05M907.644 950.83L880.68 971.239L880.68 1061.75"
          stroke="url(#BGrad4)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M945.503 725.359L975.641 748.958L975.641 979.225"
          stroke="url(#BGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M988 725.358L1008 740L1008 864.314"
          stroke="url(#BGrad2)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1037.19 725L1037.19 905.132L1090.53 945.506L1090.53 945.506L1090.53 1056.42L1081.5 1063.26M1037.19 798.65L1078.81 830.151L1078.81 874.074M1090.53 945.506L1118.08 966.359"
          stroke="url(#BGrad4)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1045 725.359L1135.08 793.326L1135.08 924.653L1195.46 970.352L1195.46 1015.16L1195.46 1015.16L1195.46 1080M1195.46 1015.16L1140.94 1056.42L1140.94 1080"
          stroke="url(#BGrad5)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1170.25 725.359L1170.25 829.707L1206.59 857.215L1206.59 888.716L1206.59 888.716L1281.04 945.062L1281.04 1080M1281.04 984.993L1238.25 1017.38L1238.25 1079.5M1206.59 888.716L1206.59 930.865L1219.49 940.626"
          stroke="url(#BGrad4)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
        <path
          d="M1205.94 725.359L1238.25 758.359L1238.25 857.215"
          stroke="url(#BGrad1)"
          strokeWidth="3"
          filter="url(#neonGlow)"
        />
      </svg>

      <defs>
        <motion.linearGradient
          variants={UGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="UGrad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={UGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 3,
          }}
          id="UGrad2"
        >
          <GradientColorsTwo />
        </motion.linearGradient>
        <motion.linearGradient
          variants={UGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 3,
          }}
          id="UGrad3"
        >
          <GradientColorsThree />
        </motion.linearGradient>
        <motion.linearGradient
          variants={RGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="RGrad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={RGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 3,
          }}
          id="RGrad2"
        >
          <GradientColorsTwo />
        </motion.linearGradient>
        <motion.linearGradient
          variants={RGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="RGrad3"
        >
          <GradientColorsThree />
        </motion.linearGradient>
        <motion.linearGradient
          variants={RGrad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColorsTwo />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <GradientColorsThree />
        </motion.linearGradient>
        <motion.linearGradient
          variants={BGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="BGrad1"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={BGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 3,
          }}
          id="BGrad2"
        >
          <InvertedGradientColorsTwo />
        </motion.linearGradient>
        <motion.linearGradient
          variants={BGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 3,
          }}
          id="BGrad3"
        >
          <InvertedGradientColorsThree />
        </motion.linearGradient>
        <motion.linearGradient
          variants={BGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="BGrad4"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={BGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 3,
          }}
          id="BGrad5"
        >
          <InvertedGradientColorsTwo />
        </motion.linearGradient>
        <motion.linearGradient
          variants={BGrad}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="BGrad6"
        >
          <InvertedGradientColorsThree />
        </motion.linearGradient>
        {/* LEFT SIDE */}
        <motion.linearGradient
          variants={LGrad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="LGrad1"
        >
          <InvertedGradientColorsTwo />
        </motion.linearGradient>
        <motion.linearGradient
          variants={LGrad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 3,
          }}
          id="LGrad2"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={LGrad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="LGrad3"
        >
          <LeftGradientColorsThree />
        </motion.linearGradient>
        <motion.linearGradient
          variants={LGrad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            delay: Math.random() * 2,
          }}
          id="LGrad4"
        >
          <InvertedGradientColorsTwo />
        </motion.linearGradient>
        <motion.linearGradient
          variants={LGrad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 3,
          }}
          id="LGrad5"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={LGrad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="LGrad6"
        >
          <LeftGradientColorsThree />
        </motion.linearGradient>
      </defs>

      {/* CIRCLES */}
      <circle cx="468" cy="326" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="275" cy="331" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="89" cy="431" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="27" cy="466" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="194" cy="485" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="161" cy="514" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="14" cy="535" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="94" cy="598" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="536" cy="503" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="338" cy="480" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="325" cy="626" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="435" cy="664" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="525" cy="631" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="421" cy="552" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="535" cy="573" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="460" cy="741" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="322" cy="751" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="17" cy="728" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="66" cy="719" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="176" cy="655" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="154" cy="677" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="530" cy="756" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="676" cy="936" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="881" cy="1066" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="976" cy="984" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1077" cy="1067" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1122" cy="970" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1224" cy="944" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1079" cy="879" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1008" cy="870" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="910" cy="868" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1238" cy="862" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1384" cy="578" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1385" cy="508" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1395" cy="451" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1389" cy="325" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1460" cy="340" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1598" cy="330" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1903" cy="353" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1854" cy="362" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1766" cy="404" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1745" cy="426" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1827" cy="483" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1485" cy="418" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1596" cy="455" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1583" cy="601" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1500" cy="528" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1759" cy="567" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1726" cy="597" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1907" cy="546" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1893" cy="615" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1830" cy="650" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1646" cy="750" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1452" cy="755" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1239" cy="144" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1005" cy="212" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="837" cy="201" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="910" cy="211" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="678" cy="218" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="692" cy="138" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="794" cy="111" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="842" cy="12" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="940" cy="96" r="5" stroke="#4FC1FF" strokeWidth="2" />
      <circle cx="1035" cy="13" r="5" stroke="#4FC1FF" strokeWidth="2" />
    </svg>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor="#ff0000" stopOpacity="0"></stop>
      <stop stopColor="#ff0000"></stop>
      <stop offset="0.325" stopColor="#ff0088"></stop>
      <stop offset="1" stopColor="#ff0088" stopOpacity="0"></stop>
    </>
  );
};

const GradientColorsTwo = () => {
  return (
    <>
      <stop stopColor="#ffea00" stopOpacity="0"></stop>
      <stop stopColor="#ffea00"></stop>
      <stop offset="0.325" stopColor="#4dff00"></stop>
      <stop offset="1" stopColor="#4dff00" stopOpacity="0"></stop>
    </>
  );
};

const GradientColorsThree = () => {
  return (
    <>
      <stop stopColor="#ff7b00" stopOpacity="0"></stop>
      <stop stopColor="#ff7b00"></stop>
      <stop offset="0.325" stopColor="#fbff00"></stop>
      <stop offset="1" stopColor="#fbff00" stopOpacity="0"></stop>
    </>
  );
};

const InvertedGradientColors = () => {
  return (
    <>
      <stop offset="0" stopColor="#ff0088" stopOpacity="0"></stop>
      <stop offset="0.675" stopColor="#ff0088"></stop>
      <stop offset="1" stopColor="#ff0000"></stop>
      <stop offset="1" stopColor="#ff0000" stopOpacity="0"></stop>
    </>
  );
};

const InvertedGradientColorsTwo = () => {
  return (
    <>
      <stop offset="0" stopColor="#4dff00" stopOpacity="0"></stop>
      <stop offset="0.675" stopColor="#4dff00"></stop>
      <stop offset="1" stopColor="#ffea00"></stop>
      <stop offset="1" stopColor="#ffea00" stopOpacity="0"></stop>
    </>
  );
};

const InvertedGradientColorsThree = () => {
  return (
    <>
      <stop stopColor="#ff7b00" stopOpacity="0"></stop>
      <stop stopColor="#ff7b00"></stop>
      <stop offset="0.325" stopColor="#fbff00"></stop>
      <stop offset="1" stopColor="#fbff00" stopOpacity="0"></stop>
    </>
  );
};

const LeftGradientColorsThree = () => {
  return (
    <>
      <stop offset="0" stopColor="#fbff00" stopOpacity="0"></stop>
      <stop offset="0.675" stopColor="#fbff00"></stop>
      <stop offset="1" stopColor="#ff7b00"></stop>
      <stop offset="1" stopColor="#ff7b00" stopOpacity="0"></stop>
    </>
  );
};
