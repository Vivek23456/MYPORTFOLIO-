# GitHub Repositories Configuration

## Featured Repositories
Customize which repositories you want to highlight on your portfolio:

```typescript
// In GitHubReposSection component, update the featuredRepos prop:
<GitHubReposSection
  featuredRepos={['vault-repo', 'your-other-repo', 'another-great-repo']}
  maxRepos={8}
/>
```

## Current Configuration
- **Username**: Vivek23456
- **Featured Repos**: ['vault-repo']
- **Max Repositories**: 6

## How to Customize

1. **Add Featured Repositories**: Update the `featuredRepos` array with your repository names
2. **Change Display Count**: Modify `maxRepos` to show more/less repositories
3. **Update Username**: Change the username in the `useGitHubRepos` hook if needed

## Repository Display Features
- ⭐ Featured repositories appear first with special highlighting
- 🌟 Star counts and fork counts
- 🏷️ Programming language with color coding
- 📅 Last updated date
- 🏷️ Topic tags (if available)
- 🔗 Direct links to GitHub and live demos

## API Rate Limits
- GitHub API allows 60 requests per hour for unauthenticated requests
- If you exceed the limit, fallback demo data will be shown
- Consider using a GitHub Personal Access Token for higher limits in production

## Styling
The repositories are displayed in a responsive grid with:
- Hover animations and scaling effects
- Cyber-themed styling matching your portfolio
- Featured repositories have special border styling
- Mobile-responsive design