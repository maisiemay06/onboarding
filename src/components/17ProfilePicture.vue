<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    Let's upload a picture to your profile, {{ userFirstName }}, so people can
    recognise you
  </h1>
  <p class="mb-10">You'll need to have a JPG or PNG file.</p>

  <div class="flex flex-col md:flex-row items-center justify-center w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="153"
      height="143"
      viewBox="0 0 153 143"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_1101"
            data-name="Rectangle 1101"
            width="82.133"
            height="90.065"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g
        id="Group_2380"
        data-name="Group 2380"
        transform="translate(-172 -390)"
      >
        <path
          id="Rectangle_1176"
          data-name="Rectangle 1176"
          d="M12,0H153a0,0,0,0,1,0,0V131a12,12,0,0,1-12,12H0a0,0,0,0,1,0,0V12A12,12,0,0,1,12,0Z"
          transform="translate(172 390)"
          fill="#d8d8d8"
        />
        <g
          id="Group_2379"
          data-name="Group 2379"
          transform="translate(207.434 416.614)"
        >
          <g id="Group_1807" data-name="Group 1807" clip-path="url(#clip-path)">
            <path
              id="Path_737"
              data-name="Path 737"
              d="M22.714,499.48h36.7a23.314,23.314,0,0,1,22.714,18.4A52.033,52.033,0,0,1,0,517.887,23.3,23.3,0,0,1,22.714,499.48"
              transform="translate(0 -447.896)"
              fill="#fff"
            />
            <path
              id="Path_738"
              data-name="Path 738"
              d="M200.042,0a22.75,22.75,0,1,1-22.75,22.75A22.75,22.75,0,0,1,200.042,0"
              transform="translate(-158.982)"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </svg>

    <button class="button h-[50px] mt-8 md:mt-0 md:ml-10">
      Upload your pic now
    </button>
  </div>
</template>

<script>
export default {
  name: "ProfilePicture",
  props: ["userFirstName"],
};
</script>