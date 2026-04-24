/* Inject animated SVG icons at runtime into the card .icon containers.
   This lives in a separate JS file so the SMIL <animate> markup survives
   the HTML canonicalizer (which strips <animate> from static .svg files). */
(function () {
  const ICONS = {
    studio: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <filter id="s-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="1.8" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <linearGradient id="s-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2030"/>
      <stop offset="100%" stop-color="#2a1830"/>
    </linearGradient>
    <linearGradient id="s-road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2a2838"/>
      <stop offset="100%" stop-color="#161622"/>
    </linearGradient>
    <linearGradient id="s-cursor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#007FFF" stop-opacity="0"/>
      <stop offset="50%" stop-color="#007FFF" stop-opacity="1"/>
      <stop offset="100%" stop-color="#007FFF" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="s-frame"><rect x="14" y="14" width="172" height="172" rx="6"/></clipPath>
  </defs>
  <g clip-path="url(#s-frame)">
    <rect x="14" y="14" width="172" height="172" rx="6" fill="url(#s-sky)"/>
    <rect x="14" y="110" width="172" height="76" fill="url(#s-road)"/>
    <g stroke="#444860" stroke-width="1.2" stroke-dasharray="6 6" opacity="0.6">
      <line x1="14" y1="130" x2="186" y2="130"/><line x1="14" y1="155" x2="186" y2="155"/>
    </g>
    <g fill="#4a5270">
      <rect x="38" y="118" width="44" height="22" rx="4"/>
      <rect x="44" y="110" width="32" height="12" rx="3"/>
      <circle cx="48" cy="142" r="4" fill="#2a2e40"/><circle cx="74" cy="142" r="4" fill="#2a2e40"/>
    </g>
    <g fill="#5a4a70">
      <circle cx="110" cy="108" r="5"/><rect x="105" y="114" width="10" height="22" rx="3"/>
      <rect x="102" y="136" width="4" height="12" rx="1"/><rect x="114" y="136" width="4" height="12" rx="1"/>
    </g>
    <g fill="#4a5060">
      <rect x="148" y="106" width="2" height="30"/><circle cx="149" cy="102" r="7" fill="#6a5a40"/>
    </g>
    <rect x="0" y="14" width="2" height="172" fill="url(#s-cursor)" opacity="0.95">
      <animate attributeName="x" values="0;186;186" keyTimes="0;0.55;1" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.1;0.55;0.65" dur="4s" repeatCount="indefinite"/>
    </rect>
    <g filter="url(#s-glow)">
      <rect x="36" y="107" width="48" height="39" fill="none" stroke="#007FFF" stroke-width="2" rx="2" stroke-dasharray="200" stroke-dashoffset="200">
        <animate attributeName="stroke-dashoffset" values="200;200;0;0;0;200" keyTimes="0;0.12;0.22;0.85;0.92;1" dur="4s" repeatCount="indefinite"/>
      </rect>
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.22;0.32;0.85;0.95" dur="4s" repeatCount="indefinite"/>
        <rect x="36" y="93" width="34" height="12" rx="2" fill="#007FFF"/>
        <text x="53" y="102" font-family="Inter, -apple-system, sans-serif" font-size="8" font-weight="700" fill="#FFFFFF" text-anchor="middle">car</text>
      </g>
    </g>
    <g filter="url(#s-glow)">
      <rect x="100" y="101" width="20" height="51" fill="none" stroke="#D72483" stroke-width="2" rx="2" stroke-dasharray="200" stroke-dashoffset="200">
        <animate attributeName="stroke-dashoffset" values="200;200;0;0;0;200" keyTimes="0;0.42;0.52;0.85;0.92;1" dur="4s" repeatCount="indefinite"/>
      </rect>
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.52;0.6;0.85;0.95" dur="4s" repeatCount="indefinite"/>
        <rect x="100" y="87" width="50" height="12" rx="2" fill="#D72483"/>
        <text x="125" y="96" font-family="Inter, -apple-system, sans-serif" font-size="8" font-weight="700" fill="#FFFFFF" text-anchor="middle">person</text>
      </g>
    </g>
    <g filter="url(#s-glow)">
      <circle cx="149" cy="102" r="0" fill="none" stroke="#F59E0B" stroke-width="2">
        <animate attributeName="r" values="0;0;12;12;12;0" keyTimes="0;0.68;0.78;0.85;0.92;1" dur="4s" repeatCount="indefinite"/>
      </circle>
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.78;0.84;0.85;0.95" dur="4s" repeatCount="indefinite"/>
        <rect x="131" y="80" width="36" height="12" rx="2" fill="#F59E0B"/>
        <text x="149" y="89" font-family="Inter, -apple-system, sans-serif" font-size="8" font-weight="700" fill="#14141a" text-anchor="middle">sign</text>
      </g>
    </g>
  </g>
  <rect x="14" y="178" width="172" height="8" fill="#0f0f15"/>
  <rect x="14" y="178" width="0" height="8" fill="#007FFF" opacity="0.7">
    <animate attributeName="width" values="0;172;172;0" keyTimes="0;0.85;0.95;1" dur="4s" repeatCount="indefinite"/>
  </rect>
</svg>`,
    gen: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <filter id="g-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="g-core" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
      <stop offset="40%" stop-color="#007FFF" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#007FFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g fill="none" stroke="#007FFF" stroke-width="1.2" filter="url(#g-glow)">
    <circle cx="100" cy="100" r="20" opacity="0">
      <animate attributeName="r" values="18;70" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="100" r="20" opacity="0">
      <animate attributeName="r" values="18;70" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="100" r="20" opacity="0">
      <animate attributeName="r" values="18;70" dur="2.4s" begin="1.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="1.6s" repeatCount="indefinite"/>
    </circle>
  </g>
  <circle cx="100" cy="100" r="18" fill="url(#g-core)" filter="url(#g-glow)">
    <animate attributeName="r" values="16;22;16" dur="1.8s" repeatCount="indefinite"/>
  </circle>
  <g filter="url(#g-glow)">
    <g>
      <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="5s" repeatCount="indefinite"/>
      <circle cx="140" cy="100" r="3" fill="#FFFFFF"/>
      <circle cx="100" cy="60"  r="3" fill="#D72483"/>
      <circle cx="60"  cy="100" r="3" fill="#FFFFFF"/>
      <circle cx="100" cy="140" r="3" fill="#D72483"/>
    </g>
    <g>
      <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="7s" repeatCount="indefinite"/>
      <circle cx="162" cy="100" r="2.2" fill="#007FFF"/>
      <circle cx="100" cy="38"  r="2.2" fill="#FFFFFF"/>
      <circle cx="38"  cy="100" r="2.2" fill="#007FFF"/>
      <circle cx="100" cy="162" r="2.2" fill="#FFFFFF"/>
    </g>
    <g>
      <animateTransform attributeName="transform" type="rotate" from="45 100 100" to="405 100 100" dur="9s" repeatCount="indefinite"/>
      <circle cx="178" cy="100" r="1.8" fill="#D72483"/>
      <circle cx="22"  cy="100" r="1.8" fill="#D72483"/>
    </g>
  </g>
  <g fill="#FFFFFF" filter="url(#g-glow)">
    <circle cx="100" cy="100" r="1.8" opacity="0">
      <animate attributeName="cx" values="100;155" dur="1.4s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="100;80"  dur="1.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0" dur="1.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="100" r="1.8" opacity="0">
      <animate attributeName="cx" values="100;45"  dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="100;120" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="100" r="1.8" opacity="0">
      <animate attributeName="cx" values="100;130" dur="1.4s" begin="0.7s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="100;155" dur="1.4s" begin="0.7s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0" dur="1.4s" begin="0.7s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="100" r="1.8" opacity="0">
      <animate attributeName="cx" values="100;70"  dur="1.4s" begin="1.0s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="100;45"  dur="1.4s" begin="1.0s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0" dur="1.4s" begin="1.0s" repeatCount="indefinite"/>
    </circle>
  </g>
</svg>`,
    detector: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <filter id="d-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="d-sweep-grad" cx="0" cy="0.5" r="1">
      <stop offset="0%" stop-color="#D72483" stop-opacity="0.9"/>
      <stop offset="60%" stop-color="#D72483" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#D72483" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g fill="none" stroke="#FFFFFF" stroke-opacity="0.22">
    <circle cx="100" cy="100" r="30"/><circle cx="100" cy="100" r="55"/><circle cx="100" cy="100" r="80"/>
  </g>
  <g stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="1">
    <line x1="20" y1="100" x2="180" y2="100"/><line x1="100" y1="20" x2="100" y2="180"/>
  </g>
  <g fill="none" stroke="#D72483" filter="url(#d-glow)">
    <circle cx="100" cy="100" r="30" stroke-width="2" opacity="0">
      <animate attributeName="r" values="30;85" dur="2.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0" dur="2.6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="100" r="30" stroke-width="2" opacity="0">
      <animate attributeName="r" values="30;85" dur="2.6s" begin="1.3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0" dur="2.6s" begin="1.3s" repeatCount="indefinite"/>
    </circle>
  </g>
  <g transform="translate(100 100)" filter="url(#d-glow)">
    <g>
      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3.2s" repeatCount="indefinite"/>
      <path d="M 0 0 L 82 0 A 82 82 0 0 0 41 -71 Z" fill="url(#d-sweep-grad)"/>
      <line x1="0" y1="0" x2="82" y2="0" stroke="#D72483" stroke-width="1.6" opacity="0.95"/>
    </g>
  </g>
  <circle cx="100" cy="100" r="3" fill="#FFFFFF" filter="url(#d-glow)"/>
  <g filter="url(#d-glow)">
    <circle cx="150" cy="77" r="3" fill="#D72483">
      <animate attributeName="r" values="3;6;3" dur="3.2s" begin="0.22s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" begin="0.22s" repeatCount="indefinite"/>
    </circle>
    <circle cx="55" cy="135" r="3" fill="#007FFF">
      <animate attributeName="r" values="3;6;3" dur="3.2s" begin="1.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" begin="1.6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="45" cy="70" r="3" fill="#D72483">
      <animate attributeName="r" values="3;6;3" dur="3.2s" begin="2.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" begin="2.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="130" r="3" fill="#FFFFFF">
      <animate attributeName="r" values="3;6;3" dur="3.2s" begin="0.9s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" begin="0.9s" repeatCount="indefinite"/>
    </circle>
  </g>
</svg>`,
    analytics: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <filter id="a-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <linearGradient id="a-bar" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#007FFF" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#D72483" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <line x1="28" y1="160" x2="172" y2="160" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" filter="url(#a-glow)"/>
  <g filter="url(#a-glow)">
    <rect x="36" width="14" y="130" height="30" fill="url(#a-bar)" rx="2">
      <animate attributeName="y"      values="140;115;125;130;140" dur="3.2s" repeatCount="indefinite"/>
      <animate attributeName="height" values="20;45;35;30;20"       dur="3.2s" repeatCount="indefinite"/>
    </rect>
    <rect x="60" width="14" y="120" height="40" fill="url(#a-bar)" rx="2">
      <animate attributeName="y"      values="130;95;110;120;130" dur="3.2s" begin="0.2s" repeatCount="indefinite"/>
      <animate attributeName="height" values="30;65;50;40;30"     dur="3.2s" begin="0.2s" repeatCount="indefinite"/>
    </rect>
    <rect x="84" width="14" y="110" height="50" fill="url(#a-bar)" rx="2">
      <animate attributeName="y"      values="120;80;95;110;120" dur="3.2s" begin="0.4s" repeatCount="indefinite"/>
      <animate attributeName="height" values="40;80;65;50;40"    dur="3.2s" begin="0.4s" repeatCount="indefinite"/>
    </rect>
    <rect x="108" width="14" y="100" height="60" fill="url(#a-bar)" rx="2">
      <animate attributeName="y"      values="110;65;85;100;110" dur="3.2s" begin="0.6s" repeatCount="indefinite"/>
      <animate attributeName="height" values="50;95;75;60;50"    dur="3.2s" begin="0.6s" repeatCount="indefinite"/>
    </rect>
    <rect x="132" width="14" y="90" height="70" fill="url(#a-bar)" rx="2">
      <animate attributeName="y"      values="100;50;75;90;100" dur="3.2s" begin="0.8s" repeatCount="indefinite"/>
      <animate attributeName="height" values="60;110;85;70;60"  dur="3.2s" begin="0.8s" repeatCount="indefinite"/>
    </rect>
  </g>
  <polyline fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            filter="url(#a-glow)" points="43,120 67,95 91,85 115,65 139,45"
            stroke-dasharray="180" stroke-dashoffset="180">
    <animate attributeName="stroke-dashoffset" values="180;0;0;180" keyTimes="0;0.35;0.85;1" dur="4s" repeatCount="indefinite"/>
  </polyline>
  <circle r="4" fill="#FFFFFF" filter="url(#a-glow)" cx="43" cy="120" opacity="0">
    <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.35;0.4;0.82;0.9" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="43;67;91;115;139;139" keyTimes="0;0.5;0.62;0.74;0.85;1" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="120;95;85;65;45;45"    keyTimes="0;0.5;0.62;0.74;0.85;1" dur="4s" repeatCount="indefinite"/>
  </circle>
</svg>`
  };

  function inject() {
    const map = [
      ['.card--studio    .icon', ICONS.studio],
      ['.card--gen       .icon', ICONS.gen],
      ['.card--detector  .icon', ICONS.detector],
      ['.card--analytics .icon', ICONS.analytics],
    ];
    for (const [sel, markup] of map) {
      const el = document.querySelector(sel);
      if (el) el.innerHTML = markup;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
