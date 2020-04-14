import {Component, Prop, h} from '@stencil/core';
import {Size, FillStyle} from '../../typings/props';
import {calcPercentage, handleColor, handleSize} from '../../utils/helpers';

@Component({
  shadow: true,
  tag: 'giotramu-typo',
  styleUrl: './styles.css'
})
export class Typo {
  @Prop() size: Size;
  @Prop() fillColor: FillStyle;

  render(): SVGElement {
    const fill = this.getFillColor();
    const width = this.getSize();
    const paddingBottom = calcPercentage({width: 604, height: 204});

    return (
      <div class="wrapper" style={{width}} e2e-width={width}>
        <svg
          class="vector"
          fill={fill}
          preserveAspectRatio="xMidYMin slice"
          viewBox="0 0 604 204"
          style={{
            paddingBottom
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-key="giovanni">
            <path
              data-key="g"
              d="M52.64 102.96C37.7067 102.96 25.2933 98.2 15.4 88.68C5.41335 78.9733 0.420013 66.7467 0.420013 52C0.420013 37.0667 5.41335 24.84 15.4 15.32C25.2933 5.79999 37.94 1.03999 53.34 1.03999C64.6333 1.03999 74.4334 3.51333 82.74 8.46V28.34C73.6867 22.74 64.3533 19.94 54.74 19.94C44.7533 19.94 36.6334 22.9267 30.38 28.9C24.1267 34.78 21 42.62 21 52.42C21 62.1267 24.0333 69.8733 30.1 75.66C36.1667 81.4467 43.68 84.34 52.64 84.34C61.2267 84.34 67.8067 82.1933 72.38 77.9V44.16H92.54V87.42C88.34 91.9 82.74 95.5867 75.74 98.48C68.46 101.467 60.76 102.96 52.64 102.96Z"
            />
            <path
              data-key="i"
              d="M130.704 101H110.964V31.14H130.704V101ZM109.004 12.66C109.004 9.29999 110.124 6.49999 112.364 4.25999C114.698 1.92666 117.498 0.759995 120.764 0.759995C124.031 0.759995 126.784 1.92666 129.024 4.25999C131.358 6.49999 132.524 9.29999 132.524 12.66C132.524 15.9267 131.358 18.7267 129.024 21.06C126.784 23.3 124.031 24.42 120.764 24.42C117.498 24.42 114.698 23.3 112.364 21.06C110.124 18.7267 109.004 15.9267 109.004 12.66Z"
            />
            <path
              data-key="o"
              d="M165.84 66C165.84 71.6 167.66 76.2667 171.3 80C174.94 83.7333 179.56 85.6 185.16 85.6C190.76 85.6 195.38 83.7333 199.02 80C202.66 76.1733 204.48 71.5067 204.48 66C204.48 60.4 202.66 55.78 199.02 52.14C195.38 48.4067 190.76 46.54 185.16 46.54C179.56 46.54 174.94 48.4067 171.3 52.14C167.66 55.78 165.84 60.4 165.84 66ZM146.38 66C146.38 55.64 150.02 46.96 157.3 39.96C164.487 32.8667 173.773 29.32 185.16 29.32C196.547 29.32 205.833 32.8667 213.02 39.96C220.3 47.0533 223.94 55.7333 223.94 66C223.94 76.4533 220.3 85.2267 213.02 92.32C205.74 99.32 196.453 102.82 185.16 102.82C173.867 102.82 164.58 99.32 157.3 92.32C150.02 85.2267 146.38 76.4533 146.38 66Z"
            />
            <path
              data-key="v"
              d="M276.225 101.56H258.305L227.925 31.14H249.205L267.685 76.5L286.025 31.14H306.605L276.225 101.56Z"
            />
            <path
              data-key="a"
              d="M383.34 85.74C385.02 85.74 386.373 85.46 387.4 84.9V99.32C384.88 101.28 381.333 102.26 376.76 102.26C368.826 102.26 363.553 99.2733 360.94 93.3C354.78 99.6467 346.753 102.82 336.86 102.82C329.206 102.82 323 100.673 318.24 96.38C313.48 92.0867 311.1 86.44 311.1 79.44C311.1 71.9733 313.806 66.28 319.22 62.36C324.633 58.44 331.12 56.48 338.68 56.48C346.613 56.48 353.333 57.9267 358.84 60.82V58.72C358.84 49.9467 352.68 45.56 340.36 45.56C332.8 45.56 325.753 47.52 319.22 51.44V34.92C326.313 31.1867 334.946 29.32 345.12 29.32C355.2 29.32 363.226 31.7467 369.2 36.6C375.36 41.4533 378.44 48.1733 378.44 56.76V80.42C378.44 83.9667 380.073 85.74 383.34 85.74ZM358.84 80.42V73.42C354.733 70.7133 349.88 69.36 344.28 69.36C340.08 69.36 336.72 70.1533 334.2 71.74C331.773 73.3267 330.56 75.5667 330.56 78.46C330.56 81.4467 331.68 83.7333 333.92 85.32C336.16 86.8133 339.193 87.56 343.02 87.56C349.926 87.56 355.2 85.18 358.84 80.42Z"
            />
            <path
              data-key="n"
              d="M420.798 56.48V101H401.058V31.14H420.798V39.54C427.052 32.7267 434.845 29.32 444.178 29.32C452.205 29.32 458.458 31.8867 462.938 37.02C467.418 42.06 469.658 49.1067 469.658 58.16V101H449.918V62.22C449.918 57.18 448.658 53.4467 446.138 51.02C443.712 48.5933 440.538 47.38 436.618 47.38C433.632 47.38 430.645 48.2667 427.658 50.04C424.765 51.72 422.478 53.8667 420.798 56.48Z"
            />
            <path
              data-key="n"
              d="M507.341 56.48V101H487.601V31.14H507.341V39.54C513.595 32.7267 521.388 29.32 530.721 29.32C538.748 29.32 545.001 31.8867 549.481 37.02C553.961 42.06 556.201 49.1067 556.201 58.16V101H536.461V62.22C536.461 57.18 535.201 53.4467 532.681 51.02C530.255 48.5933 527.081 47.38 523.161 47.38C520.175 47.38 517.188 48.2667 514.201 50.04C511.308 51.72 509.021 53.8667 507.341 56.48Z"
            />
            <path
              data-key="i"
              d="M594.864 101H575.124V31.14H594.864V101ZM573.164 12.66C573.164 9.29999 574.284 6.49999 576.524 4.25999C578.858 1.92666 581.658 0.759995 584.924 0.759995C588.191 0.759995 590.944 1.92666 593.184 4.25999C595.518 6.49999 596.684 9.29999 596.684 12.66C596.684 15.9267 595.518 18.7267 593.184 21.06C590.944 23.3 588.191 24.42 584.924 24.42C581.658 24.42 578.858 23.3 576.524 21.06C574.284 18.7267 573.164 15.9267 573.164 12.66Z"
            />
          </g>

          <g data-key="tramutola">
            <path
              data-key="t"
              d="M45.12 202H36.24V126.04H7.32001V118H74.4V126.04H45.12V202Z"
            />
            <path
              data-key="r"
              d="M87.4613 202H78.8213V144.04H87.4613V155.08C89.6213 151.32 92.8213 148.32 97.0613 146.08C101.301 143.76 105.781 142.6 110.501 142.6V151.36C107.861 151.36 105.461 151.72 103.301 152.44C99.6213 153.4 96.3813 155.08 93.5813 157.48C90.7812 159.8 88.7412 162.44 87.4613 165.4V202Z"
            />
            <path
              data-key="a"
              d="M145.018 195.64C149.018 195.64 152.818 194.72 156.418 192.88C160.018 191.04 162.938 188.72 165.178 185.92V177.88C159.258 174.04 152.978 172.12 146.338 172.12C141.058 172.12 136.858 173.16 133.738 175.24C130.698 177.32 129.178 180.16 129.178 183.76C129.178 187.52 130.658 190.44 133.618 192.52C136.578 194.6 140.378 195.64 145.018 195.64ZM142.618 203.44C136.458 203.44 131.218 201.76 126.898 198.4C122.658 194.88 120.538 190.16 120.538 184.24C120.538 178.4 122.778 173.72 127.258 170.2C131.738 166.76 137.418 165.04 144.298 165.04C151.818 165.04 158.778 166.92 165.178 170.68V164.92C165.178 155.24 158.818 150.4 146.098 150.4C139.298 150.4 132.978 152.36 127.138 156.28V147.88C132.818 144.36 139.738 142.6 147.898 142.6C155.818 142.6 162.098 144.48 166.738 148.24C171.458 151.92 173.818 157.2 173.818 164.08V187.96C173.818 190.2 174.298 191.96 175.258 193.24C176.298 194.52 177.658 195.16 179.338 195.16C180.618 195.16 181.738 194.92 182.698 194.44V201.16C181.418 202.04 179.498 202.48 176.938 202.48C174.058 202.48 171.618 201.72 169.618 200.2C167.698 198.6 166.498 196.28 166.018 193.24C160.178 200.04 152.378 203.44 142.618 203.44Z"
            />
            <path
              data-key="m"
              d="M207.688 202H199.048V144.04H207.688V152.68C212.488 145.96 219.448 142.6 228.568 142.6C233.288 142.6 237.248 143.6 240.448 145.6C243.728 147.6 245.968 150.4 247.168 154C249.408 150.56 252.448 147.8 256.288 145.72C260.208 143.64 264.608 142.6 269.488 142.6C275.968 142.6 281.008 144.64 284.608 148.72C288.208 152.72 290.008 158.44 290.008 165.88V202H281.368V167.8C281.368 156.44 276.568 150.76 266.968 150.76C263.448 150.76 259.928 152 256.408 154.48C252.968 156.88 250.368 159.8 248.608 163.24C248.608 164.04 248.608 164.96 248.608 166C248.688 167.04 248.728 167.84 248.728 168.4C248.808 168.96 248.848 169.4 248.848 169.72V202H240.208V167.8C240.208 156.44 235.408 150.76 225.808 150.76C222.448 150.76 219.008 151.96 215.488 154.36C212.128 156.6 209.528 159.4 207.688 162.76V202Z"
            />
            <path
              data-key="u"
              d="M355.942 183.16V144.04H364.582V202H355.942V193.12C349.782 200 342.062 203.44 332.782 203.44C325.662 203.44 320.182 201.36 316.342 197.2C312.582 192.96 310.702 187 310.702 179.32V144.04H319.342V177.4C319.342 189.32 324.822 195.28 335.782 195.28C339.782 195.28 343.622 194.08 347.302 191.68C351.222 189.12 354.102 186.28 355.942 183.16Z"
            />
            <path
              data-key="t"
              d="M402.721 203.44C397.361 203.44 393.281 201.84 390.481 198.64C387.761 195.44 386.401 191.08 386.401 185.56V126.16H395.041V144.04H415.321V151.6H395.041V182.92C395.041 187.56 395.801 190.76 397.321 192.52C398.921 194.36 401.521 195.28 405.121 195.28C408.641 195.28 411.801 194.48 414.601 192.88V200.8C412.121 202.56 408.161 203.44 402.721 203.44Z"
            />
            <path
              data-key="o"
              d="M437.034 151.6C442.874 145.6 450.394 142.6 459.594 142.6C468.794 142.6 476.314 145.6 482.154 151.6C487.994 157.44 490.914 164.6 490.914 173.08C490.914 181.56 487.994 188.72 482.154 194.56C476.234 200.48 468.714 203.44 459.594 203.44C450.474 203.44 442.954 200.48 437.034 194.56C431.194 188.72 428.274 181.56 428.274 173.08C428.274 164.6 431.194 157.44 437.034 151.6ZM482.034 173.08C482.034 166.68 479.914 161.28 475.674 156.88C471.434 152.56 466.074 150.4 459.594 150.4C453.114 150.4 447.754 152.56 443.514 156.88C439.274 161.28 437.154 166.68 437.154 173.08C437.154 179.4 439.274 184.76 443.514 189.16C447.754 193.48 453.114 195.64 459.594 195.64C466.074 195.64 471.434 193.48 475.674 189.16C479.914 184.76 482.034 179.4 482.034 173.08Z"
            />
            <path
              data-key="l"
              d="M522.666 203.44C518.666 203.44 515.426 202.28 512.946 199.96C510.546 197.64 509.346 194.04 509.346 189.16V118H517.986V187.12C517.986 192.8 520.506 195.64 525.546 195.64C527.546 195.64 529.426 195.12 531.186 194.08V201.76C529.106 202.88 526.266 203.44 522.666 203.44Z"
            />
            <path
              data-key="a"
              d="M566.285 195.64C570.285 195.64 574.085 194.72 577.685 192.88C581.285 191.04 584.205 188.72 586.445 185.92V177.88C580.525 174.04 574.245 172.12 567.605 172.12C562.325 172.12 558.125 173.16 555.005 175.24C551.965 177.32 550.445 180.16 550.445 183.76C550.445 187.52 551.925 190.44 554.885 192.52C557.845 194.6 561.645 195.64 566.285 195.64ZM563.885 203.44C557.725 203.44 552.485 201.76 548.165 198.4C543.925 194.88 541.805 190.16 541.805 184.24C541.805 178.4 544.045 173.72 548.525 170.2C553.005 166.76 558.685 165.04 565.565 165.04C573.085 165.04 580.045 166.92 586.445 170.68V164.92C586.445 155.24 580.085 150.4 567.365 150.4C560.565 150.4 554.245 152.36 548.405 156.28V147.88C554.085 144.36 561.005 142.6 569.165 142.6C577.085 142.6 583.365 144.48 588.005 148.24C592.725 151.92 595.085 157.2 595.085 164.08V187.96C595.085 190.2 595.565 191.96 596.525 193.24C597.565 194.52 598.925 195.16 600.605 195.16C601.885 195.16 603.005 194.92 603.965 194.44V201.16C602.685 202.04 600.765 202.48 598.205 202.48C595.325 202.48 592.885 201.72 590.885 200.2C588.965 198.6 587.765 196.28 587.285 193.24C581.445 200.04 573.645 203.44 563.885 203.44Z"
            />
          </g>
        </svg>
      </div>
    );
  }

  private getSize(): string {
    return handleSize(this.size);
  }

  private getFillColor(): string {
    return handleColor(this.fillColor);
  }
}
