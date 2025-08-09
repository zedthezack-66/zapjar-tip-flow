# ZapJar — Lightning Tip Jar

## Setup & Run

1. Clone repo and install dependencies:

```bash
npm install
```

2. To run locally:

```bash
npm run dev
```

3. Open `http://localhost:8080` in your browser.

## How to Use

- Open the web page.
- Scan the big static LNURL-pay QR code using your Lightning wallet app.
- Your wallet will prompt you to enter any tip amount.
- Complete the payment.
- See a thank-you confirmation with confetti on the page.
- Watch recent anonymous tips appear below.

## Notes

- This app uses a static LNURL-pay QR code, so no backend invoice generation is required.
- Light and dark modes are supported; toggle in the top right.
- The spinning Bitcoin logo in the background adds a modern fintech vibe.

---

Feel free to customize the LNURL-pay URL in the QR code component with your actual static LNURL-pay link.

### Static LNURL-pay QR code placeholder
```
lnurl1dp68gurn8ghj7mrww4exctnv9hxymrww4jhyctnv9hxymrww4jhyctnv9hxymrwvdhk6tmvde6x2ctv9skx7un0w4exctn
```
