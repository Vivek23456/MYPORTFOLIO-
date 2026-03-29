export const StaticBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Simple static gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--accent)) 0%, transparent 50%)
          `,
        }}
      />

      {/* Minimal static elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full blur-sm" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/20 rounded-full blur-sm" />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent/20 rounded-full blur-sm" />
    </div>
  );
};