import React from 'react';
import { CanonicalRoute } from '@/app/routing';

interface CommunityRouteContext {
  route: CanonicalRoute;
  routeParams: string | null;
  protect: (component: React.ReactNode) => React.ReactNode;
  components: {
    CommunityPage: React.ComponentType;
    CommunityPostPage: React.ComponentType<{ postId: string }>;
    CommunityUserProfilePage: React.ComponentType<{ uid: string }>;
    CommunityCreatePostPage: React.ComponentType;
  };
}

export function resolveCommunityRoute({
  route,
  routeParams,
  protect,
  components,
}: CommunityRouteContext): React.ReactNode | null {
  switch (route) {
    case 'community':
      return protect(<components.CommunityPage />);
    case 'community/post':
      return routeParams ? protect(<components.CommunityPostPage postId={routeParams} />) : null;
    case 'community/user':
      return routeParams ? protect(<components.CommunityUserProfilePage uid={routeParams} />) : null;
    case 'community/create':
      return protect(<components.CommunityCreatePostPage />);
    default:
      return null;
  }
}
