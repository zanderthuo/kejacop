export default {
    items : [
        {
            id: 'navigation',
            title: '',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'fa fa-home'
                },
                {
                    id: 'properties',
                    title: 'Properties',
                    type: 'collapse',
                    icon: 'fa fa-building',
                    children: [
                        {
                            id: 'properties',
                            title: 'View Properties',
                            type: 'item',
                            url: '/properties',
                        },
                        {
                            id: 'addproperty',
                            title: 'Add Property',
                            type: 'item',
                            url: '/addproperty',
                        },
                        ],
                },
                  {
                    id: 'accounts',
                    title: 'Accounts',
                    type: 'collapse',
                    icon: 'fa fa-money',
                    children: [
                      {
                        id: 'accounts',
                        title: 'View Accounts',
                        type: 'item',
                        url: '/accounts',
                      },
                      {
                        id: 'payments',
                        title: 'Payments',
                        type: 'item',
                        url: '/payments',
                    },
                    ]
                  },
            {
                id: 'tenants',
                title: 'Tenants',
                type: 'collapse',
                icon: 'fa fa-users',
                children: [
                    {
                        id: 'tenantsPage',
                        title: 'Tenants Page',
                        type: 'item',
                        url: '/tenantspage',
                    },
                    {
                        id: 'lease',
                        title: 'Add Lease',
                        type: 'item',
                        url: '/lease',
                    },
                ],
            },

            {
                id: 'maintenance',
                title: 'Maintenance',
                type: 'item',
                url: '/maintenance',
                icon: 'fa fa-wrench',
            },
            {
                id: 'screening',
                title: 'Screening',
                type: 'item',
                url: '/screening',
                icon: 'fa fa-desktop',
            },
            {
                id: 'application',
                title: 'Application',
                type: 'item',
                url: '/application',
                icon: 'fa fa-wpforms',
            },
            {
                id: 'propertymanager',
                title: 'Property Managers',
                type: 'item',
                url: '/propertymanager',
                icon: 'fa fa-user',
            },
            ],
        }
    ],
}
