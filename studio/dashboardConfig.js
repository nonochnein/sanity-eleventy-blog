export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '63a867ac2f267950c177cfe8',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-djvnesze',
                  apiId: 'b02a0233-2dfa-4ed7-9f61-b0308dacea77'
                },
                {
                  buildHookId: '63a867acb865f3543a51c4dd',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-i72rbhd2',
                  apiId: 'fe182627-02a8-49f2-a05f-34e8270af51d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nonochnein/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-i72rbhd2.netlify.app', category: 'apps'}
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
