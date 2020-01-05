import { writable } from 'svelte/store';

export const quizSettings = writable([
  {
    "hiragana": true,
    "katakana": false,
    "diacritics": false
  }
]);