const items = [
  {
    label: 'dashboard',
    href: '/dashboard',
    icon: 'mage:dashboard-2',
    hasChildren: false,
    parent: 'dashboard',
    isLink: true
  },

  // {
  //   label: 'monitors',
  //   href: '/monitors',
  //   icon: 'icon-park-outline:monitor-two',
  //   hasChildren: false,
  //   parent: "monitors",
  //   isLink: true
  // },

  {
    label: 'users',
    href: '/users',
    icon: 'ci:users',
    hasChildren: false,
    parent: 'users',
    isLink: true
  },

  {
    label: 'transactions',
    href: '/transactions',
    icon: 'icon-park-outline:transaction-order',
    hasChildren: false,
    parent: 'transactions',
    isLink: true
  },

  {
    label: 'KYC/Compliance',
    href: '/kyc',
    icon: 'charm:id',
    hasChildren: false,
    parent: 'kyc',
    isLink: true
  },

  {
    label: 'Settings',
    href: '/settings',
    icon: 'charm:id',
    hasChildren: true,
    parent: 'settings',
    isLink: true,
    children: [
      {
        label: 'Wallet Settings',
        href: '/settings/wallet-settings',
        icon: 'solar:wallet-outline',
        hasChildren: false,
        parent: 'wallet-settings',
        isLink: true
      },

      {
        label: 'Swap/Exchange Rate Settings',
        href: '/settings/swap-settings',
        icon: 'charm:swap-vertical',
        hasChildren: false,
        parent: 'swap-settings',
        isLink: true
      },

      {
        label: 'Referrals',
        href: '/settings/referrals',
        icon: 'ic:sharp-share',
        hasChildren: false,
        parent: 'referrals',
        isLink: true
      },

      {
        label: 'Staking',
        href: '/settings/staking',
        icon: 'streamline:investment-selection',
        hasChildren: false,
        parent: 'staking',
        isLink: true
      }
    ]
  },

  {
    label: 'admin actions',
    href: '/admin-actions',
    icon: 'ri:user-settings-line',
    hasChildren: true,
    parent: 'admin-actions',
    children: [
      {
        label: 'credit/debit',
        href: '/crdr',
        icon: 'ri:user-settings-line',
        hasChildren: false,
        parent: 'admin-actions',
        isLink: true
      },
      {
        label: 'edit-users',
        href: '/edit-users',
        icon: 'ri:user-settings-line',
        hasChildren: false,
        parent: 'admin-actions',
        isLink: true
      },
      {
        label: 'edit-transactions',
        href: '/edit-transactions',
        icon: 'ri:user-settings-line',
        hasChildren: false,
        parent: 'admin-actions',
        isLink: true
      }
    ]
  }
]

export default items
