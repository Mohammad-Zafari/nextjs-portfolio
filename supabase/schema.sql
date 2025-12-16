-- =============================================
-- Developer Portfolio Database Schema
-- PostgreSQL / Supabase Compatible
-- =============================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- Table: projects
-- Description: Stores portfolio projects
-- =============================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  tech_stack TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);

-- Index for ordering by creation date
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- =============================================
-- Table: contact_messages
-- Description: Stores contact form submissions
-- =============================================
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for ordering by creation date
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Index for email lookups (useful for spam detection)
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- =============================================
-- Function: Update updated_at timestamp
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- Trigger: Auto-update updated_at on projects
-- =============================================
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- Row Level Security (RLS) Policies
-- =============================================

-- Enable RLS on projects table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Public can view projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- Enable RLS on contact_messages table
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous and authenticated users to insert contact messages
-- 'anon' is the role Supabase uses for unauthenticated requests
CREATE POLICY "Public can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- =============================================
-- Comments for documentation
-- =============================================
COMMENT ON TABLE projects IS 'Portfolio projects showcase';
COMMENT ON TABLE contact_messages IS 'Contact form submissions from visitors';

COMMENT ON COLUMN projects.slug IS 'URL-friendly unique identifier';
COMMENT ON COLUMN projects.tech_stack IS 'Array of technologies used';
COMMENT ON COLUMN projects.updated_at IS 'Auto-updated on record modification';

