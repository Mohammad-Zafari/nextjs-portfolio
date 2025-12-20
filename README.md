# Next.js Portfolio

Production-ready developer portfolio built with modern web stack.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- Resend (Email)
- Deployed on Vercel

## Features

- 🎨 Modern, responsive design with dark mode
- 📝 Contact form with database storage
- 📧 Email notifications for contact submissions
- 🚀 SEO optimized with metadata and sitemap
- ♿ Accessible with ARIA labels and keyboard navigation
- 🔒 Type-safe with TypeScript
- 🎯 Production-ready architecture

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for contact form)
- Resend account (optional, for email notifications)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration (Required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Configuration (Optional)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=your.email@example.com
```

4. Set up Supabase:

Run the SQL scripts in the `supabase` folder to create the required tables:
- `schema.sql` - Creates the contact_messages table
- `enhancement.sql` - Adds additional features

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Deployment on Vercel

### Required Environment Variables

In your Vercel project settings, add the following environment variables:

**Required (for contact form):**
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (for server-side operations)

**Optional (for email notifications):**
- `RESEND_API_KEY` - Your Resend API key
- `RESEND_FROM_EMAIL` - Email address to send from (e.g., onboarding@resend.dev)
- `CONTACT_EMAIL` - Your email address to receive contact form submissions

### Deployment Steps

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the environment variables in Vercel project settings
4. Deploy!

### Getting Your Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings > API
4. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon/public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - service_role key → `SUPABASE_SERVICE_ROLE_KEY`

### Getting Your Resend API Key (Optional)

1. Sign up at [Resend](https://resend.com)
2. Go to API Keys
3. Create a new API key
4. Copy it to `RESEND_API_KEY`

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── projects/          # Projects listing and detail pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── config/               # Configuration files
├── data/                 # Static data
├── lib/                  # Utility functions
│   ├── supabase/        # Supabase client setup
│   └── email.ts         # Email sending logic
└── types/               # TypeScript type definitions
```

## Troubleshooting

### Contact Form Not Working

If the contact form shows a 500 error:

1. **Check environment variables** - Ensure all required Supabase variables are set in Vercel
2. **Verify Supabase setup** - Make sure the `contact_messages` table exists
3. **Check Vercel logs** - View function logs in Vercel dashboard for detailed errors
4. **Test locally** - Run `npm run dev` with proper `.env.local` to test locally

### Email Notifications Not Sending

Email notifications are optional. If they fail:

1. Check if `RESEND_API_KEY` is set correctly
2. Verify your Resend domain is configured
3. Contact form will still work - messages are saved to database

## License

MIT

## Contact

For questions or collaboration, use the contact form on the portfolio or reach out via:
- Email: my.mohammad.zafari@gmail.com
- LinkedIn: [Mohammad Zafari](https://www.linkedin.com/in/mohammad-zafari-0b417b2b4)
- GitHub: [Mohammad-Zafari](https://github.com/Mohammad-Zafari)
