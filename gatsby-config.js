module.exports = {
	pathPrefix: '/psicologia',
	plugins: [
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-graph`,
						options: { language: 'mermaid', theme: 'forrest' },
					},
					{
						resolve: `gatsby-remark-images`,
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				custom: {
					families: ['SFCartoonistHand', 'SFArchRival'],
          urls: ['../fonts/fonts.css'],
				},
			},
    },
    `gatsby-plugin-styled-components`,
	],
};
