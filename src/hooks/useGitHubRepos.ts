import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  featured?: boolean; // Custom field for highlighting
}

export const useGitHubRepos = (username: string, featuredRepos: string[] = []) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // GitHub API endpoint for user repositories
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20&type=public`);

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();

        // Mark featured repositories
        const reposWithFeatured = data.map(repo => ({
          ...repo,
          featured: featuredRepos.includes(repo.name)
        }));

        // Sort featured repos first, then by stars
        const sortedRepos = reposWithFeatured.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.stargazers_count - a.stargazers_count;
        });

        setRepos(sortedRepos);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        // Set fallback data for demo purposes
        setRepos([
          {
            id: 1,
            name: 'vault-repo',
            description: 'A secure vault for storing sensitive data and secrets with encryption',
            html_url: 'https://github.com/Vivek23456/vault-repo',
            homepage: null,
            language: 'TypeScript',
            stargazers_count: 25,
            forks_count: 8,
            updated_at: new Date().toISOString(),
            topics: ['security', 'encryption', 'vault', 'typescript'],
            featured: true
          },
          {
            id: 2,
            name: 'portfolio-website',
            description: 'Modern portfolio website built with React, Three.js, and Tailwind CSS',
            html_url: 'https://github.com/Vivek23456/portfolio-website',
            homepage: 'https://vivek-portfolio.vercel.app',
            language: 'TypeScript',
            stargazers_count: 18,
            forks_count: 5,
            updated_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            topics: ['react', 'threejs', 'tailwindcss', 'portfolio'],
            featured: true
          },
          {
            id: 3,
            name: 'react-components',
            description: 'Reusable React components library with TypeScript and Storybook',
            html_url: 'https://github.com/Vivek23456/react-components',
            homepage: 'https://react-components-storybook.vercel.app',
            language: 'TypeScript',
            stargazers_count: 32,
            forks_count: 12,
            updated_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            topics: ['react', 'typescript', 'storybook', 'ui-components'],
            featured: true
          },
          {
            id: 4,
            name: 'api-wrapper',
            description: 'Lightweight API wrapper for RESTful services with automatic retry logic',
            html_url: 'https://github.com/Vivek23456/api-wrapper',
            homepage: null,
            language: 'JavaScript',
            stargazers_count: 15,
            forks_count: 3,
            updated_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
            topics: ['api', 'javascript', 'rest', 'axios'],
            featured: true
          },
          {
            id: 5,
            name: 'data-visualizer',
            description: 'Interactive data visualization tool using D3.js and React',
            html_url: 'https://github.com/Vivek23456/data-visualizer',
            homepage: 'https://data-viz-demo.vercel.app',
            language: 'JavaScript',
            stargazers_count: 28,
            forks_count: 9,
            updated_at: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
            topics: ['d3js', 'react', 'data-visualization', 'charts'],
            featured: false
          },
          {
            id: 6,
            name: 'task-manager-cli',
            description: 'Command-line task manager with SQLite database and priority scheduling',
            html_url: 'https://github.com/Vivek23456/task-manager-cli',
            homepage: null,
            language: 'Python',
            stargazers_count: 22,
            forks_count: 6,
            updated_at: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
            topics: ['python', 'cli', 'sqlite', 'productivity'],
            featured: false
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username, featuredRepos]);

  return { repos, loading, error };
};