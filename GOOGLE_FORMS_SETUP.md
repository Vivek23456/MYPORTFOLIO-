# Google Forms Contact Form Setup Guide

## Step 1: Create a Google Form
1. Go to [Google Forms](https://forms.google.com)
2. Click 'Blank' to create a new form
3. Add these questions in order:
   - Name (Short answer)
   - Email (Short answer) 
   - Project Type (Short answer, optional)
   - Message (Paragraph)

## Step 2: Get Form ID and Entry IDs
1. In your form, click the 'Send' button
2. Click the link icon to get the form URL
3. Copy the form ID from the URL: `https://docs.google.com/forms/d/FORM_ID/edit`

## Step 3: Get Entry IDs
1. View the form source code (Ctrl+U in browser)
2. Search for 'entry.' to find the entry IDs
3. Note down the entry IDs for each field

## Step 4: Update ContactSection.tsx
Replace the placeholder values:
- YOUR_FORM_ID → Your actual form ID
- entry.1234567890 → Name field entry ID
- entry.0987654321 → Email field entry ID  
- entry.1122334455 → Project field entry ID
- entry.5566778899 → Message field entry ID

## Step 5: Test the Form
1. Deploy your site
2. Submit a test message
3. Check your Google Form responses

## Benefits of This Approach:
✅ No backend required
✅ Google handles all infrastructure  
✅ Unlimited scalability
✅ Free and reliable
✅ Easy data management
✅ Automatic spam protection
✅ Mobile-friendly responses
