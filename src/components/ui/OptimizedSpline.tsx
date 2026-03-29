import { Suspense, lazy } from 'react';

// Lazy load Spline to avoid loading on mobile or low-end devices
const SplineLazy = lazy(() => import('@splinetool/react-spline'));

interface OptimizedSplineProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedSpline = ({ scene, className, onLoad, onError }: OptimizedSplineProps) => {
  // Check if device can handle Spline (not mobile, has WebGL support)
  const canUseSpline = () => {
    if (typeof window === 'undefined') return false;
    if (window.innerWidth < 768) return false; // Disable on mobile
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
    } catch (e) {
      return false;
    }
  };

  if (!canUseSpline()) {
    return (
      <div className={`${className} flex items-center justify-center bg-muted/20 rounded-lg`}>
        <p className="text-muted-foreground">3D preview not available on this device</p>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className={`${className} flex items-center justify-center bg-muted/20 rounded-lg`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    }>
      <SplineLazy
        scene={scene}
        className={className}
        onLoad={onLoad}
        onError={onError}
      />
    </Suspense>
  );
};