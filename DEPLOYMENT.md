# GoDaddy cPanel Deployment Guide

## Build & Extract Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Find your build:**
   - The static files will be in the `out` folder

3. **Upload to GoDaddy:**
   - Compress the `out` folder contents (not the folder itself) into a ZIP file
   - Login to cPanel
   - Go to File Manager
   - Navigate to `public_html`
   - Upload the ZIP file
   - Extract it in cPanel

4. **Alternative - Direct Upload:**
   - Upload all files from the `out` folder directly to `public_html`

## Important:
- Make sure to upload the CONTENTS of the `out` folder, not the folder itself
- Your `index.html` should be directly in `public_html`
