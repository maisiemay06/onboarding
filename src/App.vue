<template>
  <!-- Progress Bar -->
  <progress-bar
    v-if="
      onboardingStep > 0 &&
      onboardingStep !== 2 &&
      onboardingStep !== 6 &&
      onboardingStep < 19
    "
    :onboardingStep="onboardingStep"
  ></progress-bar>

  <!-- Logo -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="238.425"
    height="42.844"
    viewBox="0 0 238.425 42.844"
    class="absolute top-12 -right-10 h-5 md:right-12 md:h-8"
  >
    <g id="svgexport-1" transform="translate(-3.18 -4.61)">
      <path
        id="Path_562"
        data-name="Path 562"
        d="M302.348,5.8l-8.669,26.356L285.01,5.8h-9.018l-8.669,26.356L258.654,5.8H247.708l1.613,4.358A22.557,22.557,0,0,0,234.655,4.92c-11.644,0-21.715,8.228-21.715,21.189S223.011,47.56,234.655,47.56c10.775,0,20.26-7.28,21.616-18.635l6.576,17.759h8.491l9.1-27.929,9.544,27.929h8.583L313.294,5.8ZM234.662,38.108c-6.306,0-11.473-4.818-11.473-12a11.518,11.518,0,1,1,23.032,0C246.22,33.29,240.968,38.108,234.662,38.108Z"
        transform="translate(-71.689 -0.106)"
        :fill="
          onboardingStep === 2 || onboardingStep === 6 || onboardingStep === 20
            ? '#ffffff'
            : '#394ced'
        "
      />
      <path
        id="Path_563"
        data-name="Path 563"
        d="M146,25.542c0-12.783-9.2-20.925-20.925-20.925-8.524,0-16.048,4.423-19.477,11.907C102.376,9.06,95.115,4.617,86.453,4.617c-8.307,0-15.653,4.2-19.2,11.335C65.344,8.691,60.328,4.61,52.475,4.61c-4.114,0-10.505,1.573-13.744,8.057C36.368,7.414,31.464,4.61,25.507,4.61c-5.082,0-10.683,2.712-12.171,7.879v-7H3.18V46.375H13.337V24.838c0-7.793,4.726-10.42,9.459-10.42,4.377,0,7.793,3.239,7.793,9.808V46.382H40.745V25.8l.086.349c-.434-7.352,3.239-11.736,9.11-11.736,4.726,0,8.142,3.239,8.142,9.808V46.375H68.154V37.541c3.719,6.062,10.413,9.716,18.391,9.716,7.445,0,14.619-3.153,18.384-9.1l-6.74-5.167c-2.449,3.331-6.655,5.082-11.118,5.082-6.043,0-10.42-2.89-11.559-8.583H103.9c1.573,10.769,10.189,17.772,21.261,17.772,7.445,0,14.619-3.153,18.384-9.1l-6.74-5.167c-2.449,3.331-6.655,5.082-11.118,5.082-6.043,0-10.42-2.89-11.559-8.583H145.74A35.1,35.1,0,0,0,146,25.542ZM75.513,22.389c1.224-6.214,5.6-8.847,11.118-8.847,5.694,0,9.979,3.239,10.6,8.847H75.513Zm38.612,0c1.224-6.214,5.6-8.847,11.118-8.847,5.694,0,9.979,3.239,10.6,8.847H114.125Z"
        transform="translate(0 0)"
        :fill="
          onboardingStep === 2 || onboardingStep === 6 || onboardingStep === 20
            ? '#ffffff'
            : '#394ced'
        "
      />
    </g>
  </svg>

  <!-- Main Page -->
  <div
    class="
      flex flex-col
      justify-start
      items-start
      text-left
      h-[100vh]
      text-base
      p-6
      pt-32
      md:p-20 md:pt-40
    "
    :class="
      onboardingStep === 2 || onboardingStep === 6 || onboardingStep === 20
        ? 'bg-meeow-primary text-white'
        : 'white text-black'
    "
  >
    <!-- Onboarding Steps -->
    <component
      :is="comp"
      @setFirstName="(name) => (userFirstName = name)"
      :userFirstName="userFirstName"
    ></component>

    <!-- Buttons -->
    <nav-buttons
      :prevStep="prevStep"
      :nextStep="nextStep"
      :onboardingStep="onboardingStep"
    ></nav-buttons>
  </div>

  <!-- Tolstoy -->
  <img
    src="./assets/tolstoy-placeholder.png"
    alt=""
    v-if="onboardingStep === 6"
    class="absolute md:right-10 md:top-48"
  />
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import NavButtons from "./components/NavButtons.vue";
import IntroStep from "./components/IntroStep.vue";
import FirstName from "./components/Questions/1FirstName.vue";
import WelcomeFirstName from "./components/WelcomeFirstName.vue";
import LastName from "./components/Questions/2LastName.vue";
import AgeGroup from "./components/Questions/3AgeGroup.vue";
import GenderStep from "./components/Questions/4GenderStep.vue";
import AimeInfo from "./components/AIMEInfo.vue";
import GoalsStep from "./components/Questions/5GoalsStep.vue";
import InterestsStep from "./components/Questions/6InterestsStep.vue";
import EventStep from "./components/Questions/7EventStep.vue";
import LocationStep from "./components/Questions/8LocationStep.vue";
import DistanceStep from "./components/Questions/9DistanceStep.vue";
import EmploymentStatus from "./components/Questions/10EmploymentStatus.vue";
import JobTitle from "./components/Questions/11JobTitle.vue";
import AboutYou from "./components/Questions/12AboutYou.vue";
import AboutBusiness from "./components/Questions/13AboutBusiness.vue";
import SameJob from "./components/Questions/14SameJob.vue";
import LanguageStep from "./components/Questions/15LanguageStep.vue";
import ProfilePicture from "./components/Questions/16ProfilePicture.vue";
import BrowserPermissions from "./components/Questions/17BrowserPermissions.vue";
import CompletedTransition from "./components/CompletedTransition.vue";
import CompletedOnboarding from "./components/CompletedOnboarding.vue";

export default {
  name: "App",
  components: {
    ProgressBar,
    NavButtons,
    IntroStep,
    FirstName,
    WelcomeFirstName,
    LastName,
    AgeGroup,
    GenderStep,
    AimeInfo,
    GoalsStep,
    InterestsStep,
    EventStep,
    LocationStep,
    DistanceStep,
    EmploymentStatus,
    JobTitle,
    AboutYou,
    AboutBusiness,
    SameJob,
    LanguageStep,
    ProfilePicture,
    BrowserPermissions,
    CompletedTransition,
    CompletedOnboarding,
  },
  data() {
    return {
      onboardingStep: 0,
      userFirstName: "Maisie",
      userLastName: "",

      pages: [
        IntroStep,
        FirstName,
        WelcomeFirstName,
        LastName,
        AgeGroup,
        GenderStep,
        AimeInfo,
        GoalsStep,
        InterestsStep,
        EventStep,
        LocationStep,
        DistanceStep,
        EmploymentStatus,
        JobTitle,
        AboutYou,
        AboutBusiness,
        SameJob,
        LanguageStep,
        ProfilePicture,
        BrowserPermissions,
        CompletedTransition,
        CompletedOnboarding,
      ],
      comp: IntroStep,
    };
  },
  methods: {
    prevStep() {
      this.onboardingStep -= 1;
      this.comp = this.pages[this.onboardingStep];
    },
    nextStep() {
      this.onboardingStep += 1;
      this.comp = this.pages[this.onboardingStep];
    },
    setBtnState() {
      if (this.onboardingStep === 2 && this.userLastName) {
        return false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.button {
  background-color: #3843f1;
  padding: 16px 40px;
  border-radius: 9999px;
  color: white;
  font-size: 14px;
  display: inline-block;
}

.button:disabled {
  background-color: #d8d8d8;
}

input:checked + .radio-option {
  background-color: black;
  color: white;
}

.radio-option {
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
  font-size: 18px;
  box-sizing: border-box;
  height: 46px;
  width: auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4px;
}
.radio-option:hover {
  cursor: pointer;
  border: 2px solid black;
}

@media only screen and (min-width: 768px) {
  .radio-option {
    height: 51px;
    min-width: 100px;
  }
}
</style>
