/** @type {import('tailwindcss').Config} */
// used to customise tailwind
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      yellow: {
        "yellow-50": "#fff8eb",
        "yellow-100": "#ffecc6",
        "yellow-200": "rgb(255,214,136)",
        "yellow-300": "#ffb437",
        "yellow-400": "#ffa220",
        "yellow-500": "#f97d07",
        "yellow-600": "#dd5802",
        "yellow-700": "#b73a06",
        "yellow-800": "#942c0c",
        "yellow-900": "#7a260d",
        "yellow-950": "#461002",
      },

      pink: {
        'pink-50': '#fef1f7',
        'pink-100': '#fee5f1',
        'pink-200': '#ffcae5',
        'pink-300': '#ff9fcd',
        'pink-400': '#ff63aa',
        'pink-500': '#ff3186',
        'pink-600': '#f01263',
        'pink-700': '#d10549',
        'pink-800': '#ad073d',
        'pink-900': '#8f0c36',
        'pink-950': '#58001b',
      },

      orange: {
        'orange-50': '#fff3f1',
        'orange-100': '#ffe5e1',
        'orange-200': '#ffcfc7',
        'orange-300': '#ffada0',
        'orange-400': '#ff725c',
        'orange-500': '#f8553b',
        'orange-600': '#e5381d',
        'orange-700': '#c12b14',
        'orange-800': '#a02714',
        'orange-900': '#842718',
        'orange-950': '#481007',
      },

      mustard: {
        'mustard-50': '#fef9ec',
        'mustard-100': '#fcebc9',
        'mustard-200': '#f9d388',
        'mustard-300': '#f6ba53',
        'mustard-400': '#f4a12b',
        'mustard-500': '#ed7e13',
        'mustard-600': '#d25c0d',
        'mustard-700': '#ae3e0f',
        'mustard-800': '#8e3012',
        'mustard-900': '#752912',
        'mustard-950': '#431305',
      },

      peach: {
        'peach-50': '#fef2f2',
        'peach-100': '#ffe1e1',
        'peach-200': '#ffc8c8',
        'peach-300': '#ff8f8f',
        'peach-400': '#fd6c6c',
        'peach-500': '#f53e3e',
        'peach-600': '#e22020',
        'peach-700': '#be1717',
        'peach-800': '#9d1717',
        'peach-900': '#821a1a',
        'peach-950': '#470808',
      },
    },
  },
  plugins: [],
};
