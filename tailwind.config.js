/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        month1:
          'url("https://firebasestorage.googleapis.com/v0/b/next-invitation.appspot.com/o/1.jpg?alt=media&token=46f6e88f-2ce7-46c6-8498-49b036c4a0f2&_gl=1*h01cb*_ga*Njg0ODAyNDQ1LjE2ODU1MTkwODI.*_ga_CW55HF8NVT*MTY4NTUxOTA4Mi4xLjEuMTY4NTUxOTM5Mi4wLjAuMA..")',
        month2:
          'url("https://firebasestorage.googleapis.com/v0/b/next-invitation.appspot.com/o/2.jpg?alt=media&token=e8ae68f1-1163-4b48-9a29-b51e24b2f4df&_gl=1*1bj7gc*_ga*Njg0ODAyNDQ1LjE2ODU1MTkwODI.*_ga_CW55HF8NVT*MTY4NTUxOTA4Mi4xLjEuMTY4NTUxOTQxOS4wLjAuMA..")',
        month3:
          'url("https://firebasestorage.googleapis.com/v0/b/next-invitation.appspot.com/o/3.jpg?alt=media&token=b53ed4ae-dd9f-4489-ba0b-32b76551c351&_gl=1*mkpa2d*_ga*Njg0ODAyNDQ1LjE2ODU1MTkwODI.*_ga_CW55HF8NVT*MTY4NTUxOTA4Mi4xLjEuMTY4NTUxOTQyMy4wLjAuMA..")',
        month4:
          'url("https://firebasestorage.googleapis.com/v0/b/next-invitation.appspot.com/o/4.jpg?alt=media&token=e3b81e89-cf8a-4207-8f2d-2e6a0e28e2da&_gl=1*ikooly*_ga*Njg0ODAyNDQ1LjE2ODU1MTkwODI.*_ga_CW55HF8NVT*MTY4NTUxOTA4Mi4xLjEuMTY4NTUxOTQyNS4wLjAuMA..")',
        month5:
          'url("https://firebasestorage.googleapis.com/v0/b/next-invitation.appspot.com/o/5.jpg?alt=media&token=5ad4e74d-b847-4a9c-8cfb-f8757769f8e8&_gl=1*ar5qrp*_ga*Njg0ODAyNDQ1LjE2ODU1MTkwODI.*_ga_CW55HF8NVT*MTY4NTUxOTA4Mi4xLjEuMTY4NTUxOTQyNy4wLjAuMA..")',
        month6:
          'url("https://firebasestorage.googleapis.com/v0/b/next-invitation.appspot.com/o/6.jpg?alt=media&token=fc334db5-93c2-4070-a460-2a1d03e44eb1&_gl=1*amubmr*_ga*Njg0ODAyNDQ1LjE2ODU1MTkwODI.*_ga_CW55HF8NVT*MTY4NTUxOTA4Mi4xLjEuMTY4NTUxOTQzMC4wLjAuMA..")',
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [require("daisyui")],
};
