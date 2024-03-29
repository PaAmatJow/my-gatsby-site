// Step 1: Import React
import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
	return (
		<Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage src='../images/sung.jpg' alt='the shadow monarch' />
    </Layout>
	);
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
