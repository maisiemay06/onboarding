// Step 15

<template>
  <h1 class="font-semibold text-2xl md:text-[40px] mb-10 md:mb-20">
    What languages are you fluent in?
  </h1>
  <p class="mb-10">
    Please make sure you only include languages you can hold a good conversation
    in.
  </p>
  <input
    type="text"
    placeholder="Start typing..."
    @keyup.enter="handleLanguage"
    v-model="langInput"
    list="languages-list"
    class="
      border-b
      focus:border-black
      w-full
      text-2xl
      md:text-[40px]
      pb-3
      outline-0
    "
  />
  <datalist id="languages-list">
    <option value="Afrikaans"></option>
    <option value="Albanian"></option>
    <option value="Arabic"></option>
    <option value="Armenian"></option>
    <option value="Basque"></option>
    <option value="Bengali"></option>
    <option value="Bulgarian"></option>
    <option value="Catalan"></option>
    <option value="Cambodian"></option>
    <option value="Chinese (Mandarin)"></option>
    <option value="Croatian"></option>
    <option value="Czech"></option>
    <option value="Danish"></option>
    <option value="Dutch"></option>
    <option value="English"></option>
    <option value="Estonian"></option>
    <option value="Fiji"></option>
    <option value="Finnish"></option>
    <option value="French"></option>
    <option value="Georgian"></option>
    <option value="German"></option>
    <option value="Greek"></option>
    <option value="Gujarati"></option>
    <option value="Hebrew"></option>
    <option value="Hindi"></option>
    <option value="Hungarian"></option>
    <option value="Icelandic"></option>
    <option value="Indonesian"></option>
    <option value="Irish"></option>
    <option value="Italian"></option>
    <option value="Japanese"></option>
    <option value="Javanese"></option>
    <option value="Korean"></option>
    <option value="Latin"></option>
    <option value="Latvian"></option>
    <option value="Lithuanian"></option>
    <option value="Macedonian"></option>
    <option value="Malay"></option>
    <option value="Malayalam"></option>
    <option value="Maltese"></option>
    <option value="Maori"></option>
    <option value="Marathi"></option>
    <option value="Mongolian"></option>
    <option value="Nepali"></option>
    <option value="Norwegian"></option>
    <option value="Persian"></option>
    <option value="Polish"></option>
    <option value="Portuguese"></option>
    <option value="Punjabi"></option>
    <option value="Quechua"></option>
    <option value="Romanian"></option>
    <option value="Russian"></option>
    <option value="Samoan"></option>
    <option value="Serbian"></option>
    <option value="Slovak"></option>
    <option value="Slovenian"></option>
    <option value="Spanish"></option>
    <option value="Swahili"></option>
    <option value="Swedish "></option>
    <option value="Tamil"></option>
    <option value="Tatar"></option>
    <option value="Telugu"></option>
    <option value="Thai"></option>
    <option value="Tibetan"></option>
    <option value="Tonga"></option>
    <option value="Turkish"></option>
    <option value="Ukrainian"></option>
    <option value="Urdu"></option>
    <option value="Uzbek"></option>
    <option value="Vietnamese"></option>
    <option value="Welsh"></option>
    <option value="Xhosa"></option>
  </datalist>

  <div class="flex flex-wrap w-full gap-x-4">
    <div v-for="userLang in userLangs" :key="userLang">
      <input
        type="checkbox"
        name="languages"
        :id="userLang.replace(/\s+/g, '-')"
        class="opacity-5"
        checked
      />
      <label :for="userLang.replace(/\s+/g, '-')" class="radio-option">{{
        userLang
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguagesStep",
  data() {
    return {
      userLangs: [],
      langInput: "",
    };
  },
  methods: {
    handleLanguage(event) {
      let userLang = event.target.value;
      let capLang = userLang.charAt(0).toUpperCase() + userLang.slice(1);
      this.langInput = "";
      this.userLangs.unshift(capLang);
    },
  },
};
</script>
