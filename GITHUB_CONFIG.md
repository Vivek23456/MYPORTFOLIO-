# GitHub Repositories Configuration

## Current Setup
- **Username**: Vivek23456
- **Max Repositories**: 8 (increased from 6)
- **Featured Repositories**: vault-repo, portfolio-website, react-components, api-wrapper

## How to Customize

### Option 1: Quick Edit (Recommended)
Edit the `GitHubReposSection` component in `src/components/sections/GitHubReposSection.tsx`:

```typescript
<GitHubReposSection
  featuredRepos={['vault-repo', 'your-repo-1', 'your-repo-2', 'your-repo-3']}
  maxRepos={8}
/>
```

### Option 2: Environment Variables (Advanced)
Create a `.env` file in the project root:

```env
VITE_GITHUB_USERNAME=Vivek23456
VITE_GITHUB_FEATURED_REPOS=vault-repo,portfolio-website,react-components
VITE_GITHUB_MAX_REPOS=8
```

## Repository Display Features
- ⭐ **Featured Badge**: Shows for repositories in the featured list
- 🌟 **Star Count**: Number of GitHub stars
- 🍴 **Fork Count**: Number of repository forks
- 🏷️ **Language**: Primary programming language with color coding
- 📅 **Last Updated**: When the repo was last modified
- 🏷️ **Topics**: Repository tags (up to 3 shown)
- 🔗 **Links**: Direct links to GitHub and live demos

## Sorting Logic
1. **Featured repositories first** (marked with ⭐)
2. **Then sorted by star count** (highest first)
3. **Fallback data** shows if API fails (rate limited, etc.)

## API Information
- **Rate Limit**: 60 requests/hour (unauthenticated)
- **Fallback**: Shows demo data if API unavailable
- **Caching**: No caching implemented (could be added)

## Suggested Featured Repositories
Based on your current projects, consider featuring:
- vault-repo (security/encryption)
- portfolio-website (React/Three.js)
- react-components (UI library)
- api-wrapper (backend utilities)
- data-visualizer (D3.js/React)
- task-manager-cli (Python/SQLite)

## Performance Tips
- Keep `maxRepos` reasonable (6-12) for good loading times
- Featured repos load faster due to priority sorting
- API calls are made only once per page load