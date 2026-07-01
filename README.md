# Whatilike
What I like 

Open `index.html` in a browser to view the tiered list app.

## Save Items To Google Sheets

1. Create a Google Sheet with a tab named `Entries`.
2. Add these headers in row 1: `Timestamp`, `Item`, `Tier`, `Action`.
3. In Google Sheets, open Extensions > Apps Script.
4. Paste the code from `google-apps-script.gs`.
5. Deploy it as a Web App:
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Copy the Web App URL.
7. Open `index.html`, paste that URL into "Google Sheets save URL", and click "Save URL".
