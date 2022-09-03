const menuData = [
    {
        title: 'Home',
        path: '/',
    },

    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Services',
        path: '/services',
        subNav: [
            {
                title: 'Home One',
                path: '/',
            },
            {
                title: 'Home Two',
                path: '/home-2',
            },

            {
                title: 'Home Three',
                path: '/home-3',
            },
        ],
    },

    {
        title: 'Gallery',
        path: '/projects',
    },

    {
        title: 'Contact',
        path: '/contact',
    },
];

export default menuData;
