export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6155121b1f503d63e0097311',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s2fdq2rc',
                  apiId: '9119a347-c968-48cd-80f8-ede83a716c7d'
                },
                {
                  buildHookId: '6155121bd5d5445a5f936fc4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-axbo6syw',
                  apiId: 'b79ee812-8efb-47cc-890e-bba4db124bc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xuanhanhnguyen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-axbo6syw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
