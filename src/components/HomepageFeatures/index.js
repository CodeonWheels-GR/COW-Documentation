import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Knowledge for building material',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				Applying the proven Nine Step TPACK Process to level up the Code on
				Wheels experience has allowed our students to come away with evidence of
				their knowledge, created by them.
			</>
		),
	},
	{
		title: 'Technologies to use in the classroom',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				We leverage the tools of today with interactive MIT App builder
				projects, writing code that gets saved to the cloud, and testing builds
				natively on our phones.
			</>
		),
	},
	{
		title: 'Activities for students',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				In a Code on Wheels classroom, there are many ways for students to be
				involved in their education. We strive to create projects that allow
				freedom to be creative and comfortably paced progress.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
