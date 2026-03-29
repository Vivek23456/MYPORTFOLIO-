import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github, Star, GitFork, Calendar, Loader2, AlertCircle } from 'lucide-react';
import { useGitHubRepos, type GitHubRepo } from '../../hooks/useGitHubRepos';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

// Language color mapping
const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Rust: '#000000',
  Go: '#00ADD8',
  Java: '#ED8B00',
  'C++': '#f34b7d',
  'C#': '#239120',
  PHP: '#777BB4',
  Ruby: '#701516',
  Swift: '#ffac45',
  Kotlin: '#F18E33',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#1572B6',
  Shell: '#89e051',
  default: '#586069'
};

interface GitHubReposSectionProps {
  featuredRepos?: string[];
  maxRepos?: number;
}

export const GitHubReposSection = ({
  featuredRepos = ['vault-repo', 'portfolio-website', 'react-components', 'api-wrapper'],
  maxRepos = 8
}: GitHubReposSectionProps) => {
  const { repos, loading, error } = useGitHubRepos('Vivek23456', featuredRepos);

  const displayRepos = repos.slice(0, maxRepos);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string | null) => {
    return language ? languageColors[language] || languageColors.default : languageColors.default;
  };

  if (loading) {
    return (
      <section className="py-20 relative">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-slate-50 md:text-6xl">
              GitHub Repositories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Loading my latest projects and contributions...
            </p>
          </motion.div>

          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error && repos.length === 0) {
    return (
      <section className="py-20 relative">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-slate-50 md:text-6xl">
              GitHub Repositories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out my projects on GitHub
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-6">Unable to load repositories right now</p>
            <a
              href="https://github.com/Vivek23456"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-cyber">
                Visit GitHub Profile
                <Github className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative">
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-slate-50 md:text-6xl">
            GitHub Repositories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my open source projects and contributions
          </p>
        </motion.div>

        {/* Repositories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {displayRepos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={item}
              className={`group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] relative ${
                repo.featured
                  ? 'border-primary/50 bg-card/80 shadow-cyber'
                  : 'border-border/50 bg-card/50'
              }`}
            >
              {/* Featured Badge */}
              {repo.featured && (
                <div className="absolute -top-2 -right-2">
                  <Badge variant="cyber" className="text-xs px-2 py-1">
                    ⭐ Featured
                  </Badge>
                </div>
              )}

              {/* Repository Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-50 text-lg group-hover:text-primary transition-colors line-clamp-1">
                  {repo.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground ml-2">
                  <Star className="w-3 h-3" />
                  <span>{repo.stargazers_count}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                {repo.description || 'No description available'}
              </p>

              {/* Language & Stats */}
              <div className="flex items-center justify-between mb-4">
                {repo.language && (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span className="text-xs text-muted-foreground">{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(repo.updated_at)}</span>
                  </div>
                </div>
              </div>

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs px-2 py-0">
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 relative group w-full px-3 py-2 bg-background rounded text-sm font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 bg-card/80 backdrop-blur-sm border border-border/50 rounded flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Vivek23456"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline-cyber" size="lg" className="text-slate-50">
              View All Repositories on GitHub
              <Github className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};