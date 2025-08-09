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

## Customization

### Updating the LNURL-pay String

To use your own Lightning tip address:

1. Open `src/pages/Index.tsx`
2. Find the `LNURL` constant (around line 13)
3. Replace the string with your static LNURL-pay link:

```javascript
const LNURL = "your_lnurl_pay_string_here";
```

### How to Get a Static LNURL-pay String

1. Use a Lightning service provider that offers static LNURL-pay (like LNbits, BTCPay Server, or Alby)
2. Generate a static LNURL-pay link from your Lightning node
3. The string should start with `lnurl1` and be bech32 encoded

### Testing the QR Code

1. Save your changes and the app will automatically reload
2. Use any Lightning wallet that supports LNURL-pay to scan the QR code:
   - Phoenix Wallet
   - Breez
   - Wallet of Satoshi
   - Alby Extension
   - Zeus
3. Your wallet should prompt you to enter a tip amount
4. Complete the payment to test the full flow
