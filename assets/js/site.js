/* Gift City Trader — shared site scripts */
(function () {
  'use strict';

  /* ---- mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- current year in footer ---- */
  var years = document.querySelectorAll('.js-year');
  for (var i = 0; i < years.length; i++) {
    years[i].textContent = new Date().getFullYear();
  }


  /* ---- hide ad placeholders until a real ad unit is added ---- */
  var slots = document.querySelectorAll('.ad-slot');
  for (var s = 0; s < slots.length; s++) {
    if (!slots[s].querySelector('ins')) slots[s].style.display = 'none';
  }

  /* ---- cookie / ads consent notice ----
     Stores the visitor's choice locally. "Decline" is respected by not
     loading any non-essential script for this browser. */
  var KEY = 'gct_consent_v1';
  var bar = document.getElementById('cookieBar');
  if (!bar) return;

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { stored = 'unavailable'; }

  if (!stored) {
    bar.classList.add('show');
  }

  function decide(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
    bar.classList.remove('show');
  }

  var accept = document.getElementById('cookieAccept');
  var decline = document.getElementById('cookieDecline');
  if (accept) accept.addEventListener('click', function () { decide('accepted'); });
  if (decline) decline.addEventListener('click', function () { decide('declined'); });
})();
