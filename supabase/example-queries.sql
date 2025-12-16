-- =============================================
-- Example Queries for Developer Portfolio
-- =============================================

-- =============================================
-- PROJECTS TABLE QUERIES
-- =============================================

-- Insert a new project
INSERT INTO projects (title, slug, description, tech_stack)
VALUES (
  'E-Commerce Platform',
  'ecommerce-platform',
  'A full-stack e-commerce solution with payment integration',
  ARRAY['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL']
);

-- Get all projects (ordered by newest first)
SELECT * FROM projects
ORDER BY created_at DESC;

-- Get a single project by slug
SELECT * FROM projects
WHERE slug = 'ecommerce-platform';

-- Get projects by technology
SELECT * FROM projects
WHERE 'Next.js' = ANY(tech_stack)
ORDER BY created_at DESC;

-- Update a project
UPDATE projects
SET 
  title = 'Updated Title',
  description = 'Updated description',
  tech_stack = ARRAY['Next.js', 'TypeScript', 'Supabase']
WHERE slug = 'ecommerce-platform';

-- Delete a project
DELETE FROM projects
WHERE slug = 'ecommerce-platform';

-- Count total projects
SELECT COUNT(*) as total_projects FROM projects;

-- Get projects with specific tech stack size
SELECT title, array_length(tech_stack, 1) as tech_count
FROM projects
WHERE array_length(tech_stack, 1) >= 3
ORDER BY tech_count DESC;

-- =============================================
-- CONTACT MESSAGES TABLE QUERIES
-- =============================================

-- Insert a new contact message
INSERT INTO contact_messages (name, email, message)
VALUES (
  'John Doe',
  'john@example.com',
  'I would like to discuss a potential project collaboration.'
);

-- Get all contact messages (ordered by newest first)
SELECT * FROM contact_messages
ORDER BY created_at DESC;

-- Get messages from the last 7 days
SELECT * FROM contact_messages
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Get messages by email
SELECT * FROM contact_messages
WHERE email = 'john@example.com'
ORDER BY created_at DESC;

-- Count total messages
SELECT COUNT(*) as total_messages FROM contact_messages;

-- Count messages per email (spam detection)
SELECT email, COUNT(*) as message_count
FROM contact_messages
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY message_count DESC;

-- Get recent messages with name search
SELECT * FROM contact_messages
WHERE name ILIKE '%john%'
ORDER BY created_at DESC
LIMIT 10;

-- Delete old messages (older than 1 year)
DELETE FROM contact_messages
WHERE created_at < NOW() - INTERVAL '1 year';

-- =============================================
-- COMBINED QUERIES
-- =============================================

-- Get statistics
SELECT 
  (SELECT COUNT(*) FROM projects) as total_projects,
  (SELECT COUNT(*) FROM contact_messages) as total_messages,
  (SELECT COUNT(*) FROM contact_messages WHERE created_at >= NOW() - INTERVAL '30 days') as messages_last_month;

-- =============================================
-- MAINTENANCE QUERIES
-- =============================================

-- Vacuum tables (optimize storage)
VACUUM ANALYZE projects;
VACUUM ANALYZE contact_messages;

-- Check table sizes
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE tablename IN ('projects', 'contact_messages')
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

