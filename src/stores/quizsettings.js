import { writable } from 'svelte/store';

export const quizSettings = writable([
  {
    "hiragana": true,
    "hiraganaDouble": false,
    "katakana": false,
    "katakanaDouble": false,
    "quizLength": 5
  }
]);