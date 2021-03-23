export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6059331d4a38cc353e9deb0d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3ytp6q4t',
                  apiId: '5ec0a9f5-daa6-42fb-bc47-deb6320c25a3'
                },
                {
                  buildHookId: '6059331e4923c11bbc51a92a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tbtmtevn',
                  apiId: '5d8ded90-8539-45ff-9fb8-2b962af60b87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thiagodemellobueno/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tbtmtevn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
