export default function GithubIcon({
  fillColor = "white",
}: {
  fillColor?: string;
}) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9839 0.492244C8.04777 0.488226 0 8.53198 0 18.4601C0 26.311 5.03437 32.9847 12.0455 35.4355C12.9897 35.6726 12.8451 35.0016 12.8451 34.5436V31.4297C7.39286 32.0686 7.17188 28.4605 6.80625 27.8579C6.06696 26.5963 4.3192 26.2748 4.84152 25.6722C6.08304 25.0333 7.34866 25.8329 8.81518 27.9985C9.87589 29.5695 11.9451 29.3043 12.9938 29.0431C13.2228 28.0989 13.7129 27.2552 14.3879 26.6003C8.73884 25.5878 6.38438 22.1405 6.38438 18.0422C6.38438 16.0534 7.03929 14.2253 8.325 12.7507C7.50536 10.3199 8.40134 8.23867 8.52188 7.9293C10.8563 7.72037 13.283 9.60073 13.4719 9.74939C14.7978 9.3918 16.3125 9.20296 18.008 9.20296C19.7116 9.20296 21.2304 9.39983 22.5683 9.76144C23.0223 9.4159 25.2723 7.80073 27.442 7.9976C27.5585 8.30698 28.4344 10.34 27.6629 12.7387C28.9647 14.2172 29.6277 16.0614 29.6277 18.0543C29.6277 22.1605 27.2571 25.6119 21.592 26.6083C22.0772 27.0855 22.4625 27.6546 22.7253 28.2824C22.9882 28.9101 23.1233 29.584 23.1228 30.2646V34.7847C23.1549 35.1463 23.1228 35.5039 23.7254 35.5039C30.8411 33.1052 35.9638 26.3833 35.9638 18.4641C35.9638 8.53198 27.9121 0.492244 17.9839 0.492244V0.492244Z"
        fill={fillColor}
      />
    </svg>
  );
}
