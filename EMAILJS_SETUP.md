# EmailJS Setup Instructions

To enable email functionality in your contact form, follow these steps:

## 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID**



## 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**



## 4. Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** in the API Keys section



## 5. Update Environment Variables
Update the `.env` file in your project root with your actual values:

```
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Restart Development Server
After updating the `.env` file, restart your development server:

```bash
npm start
```

## Important Notes
- Emails will be sent to: zephchizulu@gmail.com
- The `.env` file is already added to `.gitignore` to keep your credentials secure
- EmailJS free tier allows 200 emails per month
- Make sure your email template variables match the ones used in the code:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{message}}`
  - `{{to_email}}`

## Testing
1. Fill out the contact form on your website
2. Check your email (zephchizulu@gmail.com) for the message
3. Check the browser console for any error messages
