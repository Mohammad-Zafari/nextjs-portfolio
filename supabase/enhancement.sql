-- =============================================
-- Enhancement 1: Add featured flag and URLs
-- Run this in Supabase SQL Editor
-- =============================================

-- Add featured flag to projects
ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS featured BOOLEAN NOT NULL DEFAULT false;

-- Add project URLs
ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS live_url TEXT,
ADD COLUMN IF NOT EXISTS github_url TEXT;

-- Add image/thumbnail URL
ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS image_url TEXT,
ADD COLUMN IF NOT EXISTS thumbnail_url TEXT;

-- Index for featured projects
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured) WHERE featured = true;

-- Add column comments
COMMENT ON COLUMN projects.featured IS 'Highlight project on homepage';
COMMENT ON COLUMN projects.live_url IS 'URL to live project';
COMMENT ON COLUMN projects.github_url IS 'URL to GitHub repository';
COMMENT ON COLUMN projects.image_url IS 'Main project image URL';
COMMENT ON COLUMN projects.thumbnail_url IS 'Thumbnail image URL for cards';

