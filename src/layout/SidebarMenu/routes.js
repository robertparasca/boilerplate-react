export default [
    {
        path: '/',
        icon: 'pie-chart',
        name: 'Home',
        exact: true,
        key: '/',
        guards: []
    },
    {
        path: '/tickets',
        icon: 'desktop',
        name: 'Adeverințe',
        exact: true,
        key: '/tickets|/tickets/new',
        guards: ['TicketController_index']
    },
    {
        path: '/users',
        icon: 'desktop',
        name: 'Utilizatori',
        exact: true,
        key: '/users',
        guards: ['UserController_index']
    }
]