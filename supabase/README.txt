================================================================================
SUPABASE DATABASE SETUP GUIDE
================================================================================

STEP 1: Apply the Schema
-------------------------
1. Go to your Supabase project dashboard
2. Navigate to: SQL Editor
3. Copy the contents of schema.sql
4. Paste and run the SQL script
5. Verify tables are created in Table Editor

STEP 2: Verify Setup
---------------------
Check that these tables exist:
- projects
- contact_messages

Check that RLS (Row Level Security) is enabled:
- Public can read projects
- Public can insert contact messages

STEP 3: Test the Schema
------------------------
Run these test queries in SQL Editor:

-- Insert a test project
INSERT INTO projects (title, slug, description, tech_stack)
VALUES (
  'Test Project',
  'test-project',
  'A test project description',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS']
);

-- Query projects
SELECT * FROM projects;

-- Insert a test contact message
INSERT INTO contact_messages (name, email, message)
VALUES (
  'Test User',
  'test@example.com',
  'This is a test message'
);

-- Query contact messages
SELECT * FROM contact_messages ORDER BY created_at DESC;

STEP 4: Clean Up Test Data
---------------------------
-- Delete test records
DELETE FROM projects WHERE slug = 'test-project';
DELETE FROM contact_messages WHERE email = 'test@example.com';

================================================================================
SCHEMA FEATURES
================================================================================

Projects Table:
- UUID primary keys
- Unique slug constraint
- Array field for tech_stack
- Auto-updating updated_at timestamp
- Indexed for fast slug lookups

Contact Messages Table:
- UUID primary keys
- Email indexing for spam detection
- Timestamp tracking

Security:
- Row Level Security (RLS) enabled
- Public read access to projects
- Public insert access to contact messages
- Admin access required for updates/deletes

================================================================================
NEXT STEPS
================================================================================

After applying the schema:
1. Update your .env.local with Supabase credentials
2. Use the TypeScript types in src/types/index.ts
3. Implement server actions for database operations
4. Test with your contact form and project pages

================================================================================

