# GIFTCityTrader

Learn Trading from Basics to Advanced with Practical Approach — the source for
[giftcitytrader.com](https://giftcitytrader.com).

Static HTML site. No build step: every file in this repository is served as-is.

## Structure

```
index.html                 Course landing page (home)
blog.html                  Learning library index
blog/*.html                9 long-form educational articles
about.html                 About us
contact.html               Contact details
privacy-policy.html        Privacy policy (cookies, AdSense, data rights)
terms-and-conditions.html  Terms of use
disclaimer.html            Risk disclaimer / SEBI status
refund-policy.html         Refund & cancellation policy
404.html                   Not-found page
ads.txt                    Authorized Digital Sellers
robots.txt                 Crawler rules + sitemap pointer
sitemap.xml                17 URLs
assets/css/site.css        Shared stylesheet (all pages except index)
assets/js/site.js          Shared scripts (nav, cookie notice, ad slots)
```

`index.html` keeps its own inline CSS/JS; every other page uses the shared assets.

## Before going live: three things to replace

Search the repository for `XXXXXXXXXXXXXXXX` — every occurrence must be replaced
with your real Google AdSense publisher ID.

1. **`ads.txt`** — replace `pub-XXXXXXXXXXXXXXXX` with your publisher ID
   (AdSense → Account → Settings → Account information). Must be reachable at
   `https://giftcitytrader.com/ads.txt`.

2. **AdSense script tag** — every page has this in `<head>`:

   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```

   Replace the client ID. One command does all files:

   ```bash
   grep -rl 'ca-pub-XXXXXXXXXXXXXXXX' . | xargs sed -i 's/ca-pub-XXXXXXXXXXXXXXXX/ca-pub-YOUR_ID/g'
   sed -i 's/pub-XXXXXXXXXXXXXXXX/pub-YOUR_ID/' ads.txt
   ```

3. **Contact details** — `contact@giftcitytrader.com` is used across the site.
   Make sure that mailbox exists and is monitored. `contact.html` also has a
   `TODO` comment where a full postal address should go.

## After AdSense approval

Each page has one or more `<div class="ad-slot">` blocks containing a commented-out
`<ins class="adsbygoogle">` unit. Placeholder slots are hidden by JavaScript until a
real unit is present, so nothing looks broken before approval.

To enable a slot: create an ad unit in AdSense, paste its `data-ad-slot` id into the
block, and remove the surrounding `<!--` / `-->`.

Alternatively, turn on **Auto ads** in AdSense — the `<head>` script above is all
that needs, and no further edits are required.

## Content policy notes

This site sits in a YMYL (Your Money or Your Life) category, so the following are
deliberate and should not be reverted without thought:

- No buy/sell recommendations, price targets, or signal-selling anywhere.
- No guaranteed-return, fee-recovery, or income claims.
- A risk-disclosure band and SEBI-registration statement on every page.
- Advertising is labelled and separated from editorial content.
