import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BlankLayout from '../layouts/BlankLayout';
import RouteFallback from './RouteFallback';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Team = lazy(() => import('../pages/Team'));
const Pricing = lazy(() => import('../pages/Pricing'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('../pages/TermsConditions'));
const NotFound = lazy(() => import('../pages/NotFound'));

function withSuspense(Component) {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Component />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'about', element: withSuspense(About) },
      { path: 'services', element: withSuspense(Services) },
      { path: 'portfolio', element: withSuspense(Portfolio) },
      { path: 'gallery', element: withSuspense(Gallery) },
      { path: 'team', element: withSuspense(Team) },
      { path: 'pricing', element: withSuspense(Pricing) },
      { path: 'faq', element: withSuspense(FAQ) },
      { path: 'contact', element: withSuspense(Contact) },
      { path: 'privacy-policy', element: withSuspense(PrivacyPolicy) },
      { path: 'terms-and-conditions', element: withSuspense(TermsConditions) },
    ],
  },
  {
    path: '*',
    element: <BlankLayout />,
    children: [{ index: true, element: withSuspense(NotFound) }],
  },
]);

export default router;
