import Dashboard from '@/pages/index.vue'
import KYC from '@/pages/kyc.vue'
import Transactions from '@/pages/transactions.vue'

import Users from '@/pages/users.vue'
import UserDetails from '@/pages/users/_uuid.vue'

// Settings Pages
import Settings from '@/pages/settings.vue'
import WalletSettings from '@/pages/settings/wallet.vue'
import Referrals from '@/pages/settings/referrals.vue'
import Staking from '@/pages/settings/staking.vue'
import Swap from '@/pages/settings/swap.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'dashboard',
      parent: 'dashboard'
    }
  },

  {
    path: '/kyc',
    name: 'kyc',
    component: KYC,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'KYC/compliance',
      parent: 'kyc'
    }
  },

  {
    path: '/settings',
    name: 'settings',
    redirect: '/settings/wallet-settings',
    component: Settings,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'settings',
      parent: 'settings'
    },
    children: [
      {
        path: 'wallet-settings',
        name: 'wallet-settings',
        component: WalletSettings,
        meta: {
          layout: 'dashboard',
          requiresAuth: false,
          name: 'wallet-settings',
          parent: 'wallet-settings'
        }
      },
      {
        path: 'referrals',
        name: 'referrals',
        component: Referrals,
        meta: {
          layout: 'dashboard',
          requiresAuth: false,
          name: 'referrals',
          parent: 'referrals'
        }
      },
      {
        path: 'swap-settings',
        name: 'swap-settings',
        component: Swap,
        meta: {
          layout: 'dashboard',
          requiresAuth: false,
          name: 'swap-settings',
          parent: 'swap-settings'
        }
      },
      {
        path: 'staking',
        name: 'staking',
        component: Staking,
        meta: {
          layout: 'dashboard',
          requiresAuth: false,
          name: 'staking',
          parent: 'staking'
        }
      }
    ]
  },

  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'users',
      parent: 'users'
    }
  },

  {
    path: '/user/:id',
    name: 'userideatils',
    component: UserDetails,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'users',
      parent: 'users'
    }
  },

  {
    path: '/transactions',
    name: 'transactions',
    component: Transactions,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      name: 'transactions',
      parent: 'transactions'
    }
  }
]

export default routes
