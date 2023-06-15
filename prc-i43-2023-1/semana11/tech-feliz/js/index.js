'use strict';

import faq from "./modules/faq.js";
import header from "./modules/header.js";
import slider from "./modules/slider.js";

window.addEventListener('DOMContentLoaded', () => {
  header();
  slider();
  faq();
});