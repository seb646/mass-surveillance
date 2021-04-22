module.exports = {
    title: 'United States of Surveillance',
    description: 'Just playing around',
    home: true,
    plugins: ['@vuepress/last-updated'],
    dest: 'public',
    markdown: {
        pageSuffix: '',
    },
    themeConfig: {
        repo: 'seb646/mass-surveillance',
        repoLabel: 'GitHub',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub!',
        lastUpdated: 'Last Updated',
        pageSuffix: '',
        sidebar: [
            {
              title: 'Introduction',
              path: '/',
              collapsable: false, 
            },
            {
              title: 'Understanding the Law',
              path: '/law/',
              collapsable: false, 
              children: [
                '/law/fisa',
                '/law/patriot-act',
                '/law/third-party-doctrine',
                '/law/unitary-executive',
              ]
            },
            {
              title: 'Surveillance Programs',
              path: '/programs/',
              collapsable: false, 
              children: [
                '/programs/xkeyscore',
                '/programs/prism',
                '/programs/mystic',
                '/programs/fascia',
                '/programs/quiet-skies',
                '/programs/five-eyes',
              ]
            },
            {
                title: 'Court Cases',
                path: '/cases/',
                collapsable: false, 
                children: [
                  '/cases/fisa2011',
                  '/cases/fisa2015',
                  '/cases/fisa2016',
                  '/cases/fisa2018',
                  '/cases/us-v-moalin',
                ]
            },
            {
                title: 'Resources',
                path: '/resources',
                collapsable: false, 
              },
        ]
    }
}