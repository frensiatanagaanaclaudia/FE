import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Notulensi = React.lazy(() => import('./views/notulensi/Notulensi'));
const User = React.lazy(() => import('./views/user/User'));
const Artikel = React.lazy(() => import('./views/artikel/Artikel'));
const Kepanitiaan = React.lazy(() => import('./views/kepanitiaan/Kepanitiaan'));
const Galeri = React.lazy(() => import('./views/galeri/Galeri'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/notulensi', name: 'Notulensi', component: Notulensi },
  { path: '/admin/artikel', name: 'Artikel', component: Artikel },
  { path: '/admin/user', name: 'User', component: User },
  { path: '/admin/galeri', name: 'Galeri', component: Galeri },
  { path: '/admin/kepanitiaan', name: 'Kepanitiaan', component: Kepanitiaan }
 
];

export default routes;
