module.exports = {
	title            : 'Juan Estrella',
	tagline          : 'Personal blog of Juan Estrella',
	url              : 'https://your-docusaurus-test-site.com',
	baseUrl          : '/',
	favicon          : 'img/favicon.ico',
	organizationName : 'TheJuanAndOnly99', // Usually your GitHub org/user name.
	projectName      : 'My-blog', // Usually your repo name.
	themeConfig      : {
		navbar : {
			title : 'Juan Estrella',
			logo  : {
				alt : 'My Site Logo',
				src : 'img/logo.svg'
			},
			links : [
				{
					to             : 'docs/',
					activeBasePath : 'docs',
					label          : 'Docs',
					position       : 'left'
				},
				{ to: 'blog', label: 'Blog', position: 'left' },
				{
					href     : 'https://github.com/thejuanandonly99/',
					label    : 'GitHub',
					position : 'right'
				}
			]
		},
		footer : {
			style     : 'dark',
			links     : [
				{
					title : 'Docs',
					items : [
						{
							label : 'Style Guide',
							to    : 'docs/'
						}
					]
				},
				{
					title : 'Community',
					items : [
						{
							label : 'Stack Overflow',
							href  : 'https://stackoverflow.com/questions/tagged/docusaurus'
						},
						{
							label : 'Discord',
							href  : 'https://discordapp.com/invite/docusaurus'
						},
						{
							label : 'Twitter',
							href  : 'https://twitter.com/docusaurus'
						}
					]
				},
				{
					title : 'More',
					items : [
						{
							label : 'Blog',
							to    : 'blog'
						},
						{
							label : 'GitHub',
							href  : 'https://github.com/thejuanandonly99/'
						}
					]
				}
			],
			copyright : `Copyright © ${new Date().getFullYear()} Juan Estrella, Inc. Built with Docusaurus.`
		}
	},
	presets          : [
		[
			'@docusaurus/preset-classic',
			{
				docs  : {
					// It is recommended to set document id as docs home page (`docs/` path).
					homePageId  : 'doc1',
					sidebarPath : require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl     : 'https://github.com/facebook/docusaurus/edit/master/website/'
				},
				blog  : {
					showReadingTime : true,
					// Please change this to your repo.
					editUrl         :
						'https://github.com/facebook/docusaurus/edit/master/website/blog/'
				},
				theme : {
					customCss : require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
