# Email Configuration Setup

This contact form uses Nodemailer to send emails through Gmail. Follow these steps to set it up:

## 1. Gmail Account Setup

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on 2-Step Verification

2. **Generate App Password**:
   - In your Google Account settings, go to Security
   - Select "2-Step Verification"
   - At the bottom, select "App passwords"
   - Select "Mail" and generate a password
   - Copy the 16-character password (remove spaces)

## 2. Environment Variables

Update the `.env.local` file with your credentials:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important**: Use the app-specific password, NOT your regular Gmail password.

## 3. How It Works

When someone submits the contact form:

1. **You receive an email** with:
   - Sender's name and email
   - Project type
   - Message content
   - Professional formatting
   - Reply button

2. **Sender receives auto-reply** with:
   - Thank you message
   - Confirmation of their inquiry
   - 24-hour response promise
   - Professional branding

## 4. Alternative Email Services

If you prefer not to use Gmail, you can modify the transporter configuration in `/app/api/contact/route.ts`:

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 5. Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/connect`

3. Fill out and submit the form

4. Check your email for the received message and verify the auto-reply was sent

## 6. Security Notes

- Never commit `.env.local` to version control
- Use app-specific passwords, not your main account password
- Consider using a dedicated email for contact forms
- The API route includes validation for all required fields

## 7. Customization

You can customize the email templates in `/app/api/contact/route.ts`:
- Update the HTML styling
- Modify the subject lines
- Change the auto-reply message
- Add additional fields to the form

The email templates use inline CSS for maximum compatibility across email clients.