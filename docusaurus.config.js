// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Code on Wheels Documentation',
	tagline: 'Resources for our educators, students, and families.',
	url: 'https://cow-documentation.vercel.app',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Code On Wheels', // Usually your GitHub org/user name.
	projectName: 'COW Documentation', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/CodeonWheels-GR/COW-Documentation/docs',
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://github.com/CodeonWheels-GR/COW-Documentation/blog',
					feedOptions: {
						type: 'all',
						copyright: `Copyright © ${new Date().getFullYear()} Code on Wheels.`,
					},
					blogSidebarCount: 'ALL',
					blogSidebarTitle: 'All our posts',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			sidebar: {
				hideable: true,
				autoCollapseCategories: true,
			},
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			navbar: {
				hideOnScroll: true,
				title: 'Code on Wheels Documentation',
				logo: {
					alt: 'CoW Logo Icon',
					src: '/img/logo-black_icon.png',
					srcDark: '/img/logo-white_icon.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'our-approach/cow-mission',
						position: 'left',
						label: 'Our Mission',
					},
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://www.paypal.com/donate/?hosted_button_id=K8E9R5KF2G44G',
						label: 'Donate',
						position: 'right',
					},
					{
						href: 'https://github.com/CodeonWheels-GR/COW-Documentation',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Our Approach',
						items: [
							{
								label: 'CoW Mission',
								to: '/docs/our-approach/cow-mission',
							},
							{
								label: 'Programs',
								to: '/docs/category/programs',
							},
							{
								label: 'TPACK',
								to: '/docs/category/tpack',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Facebook',
								href: 'https://www.facebook.com/Codeonwheelsorg',
							},
							{
								label: 'Instagram',
								href: 'https://www.instagram.com/codeonwheels/',
							},
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/company/code-on-wheels/',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/CodeonWheels-GR/COW-Documentation',
							},
							{
								label: 'Donate',
								href: 'https://www.paypal.com/donate/?hosted_button_id=K8E9R5KF2G44G',
							},
						],
					},
				],
				logo: {
					alt: 'Code on Wheels Logo',
					src: '/img/logo-white.png',
					href: 'https://codeonwheels.org',
					width: 256,
					height: 256,
				},
				copyright: `Copyright © ${new Date().getFullYear()} Code on Wheels, Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;