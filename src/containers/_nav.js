const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: "cil-speedometer",
  },
  {
    _tag:'CSidebarNavTitle',
    _children:['Master Data']
  },
  {
    _tag:'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notulensi',
    to: '/admin/notulensi',
    icon: "cil-tags",
  },
  {
    _tag:'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Artikel',
    to: '/admin/artikel',
    icon: "cil-tags",
  },
  {
    _tag:'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kepanitiaan',
    to: '/admin/kepanitiaan',
    icon: "cil-tags",
  },
  {
    _tag:'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Galeri',
    to: '/admin/galeri',
    icon: "cil-tags",
  },
  {
    _tag:'CSidebarNavTitle',
    _children:['Data User']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'User',
    to: '/admin/user',
    icon: "cil-tags",
  },
 
]

export default _nav
