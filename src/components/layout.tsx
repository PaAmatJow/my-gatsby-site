import * as React from 'react';
import { Link } from 'gatsby';

interface Props {
	children: React.ReactNode;
  pageTitle: string;
}

const Layout = ({ pageTitle, children }: Props) => {
	return (
		<div className='m-auto max-w-[500px] font-sans'>
			<nav>
				<ul className='flex'>
					<li className='pr-[2rem]'>
						<Link to='/' className='text-[#141516]' >Home</Link>
					</li>
					<li className='pr-[2rem]'>
						<Link to='/about' className='text-[#141516]' >About</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className='text-purple-500 text-3xl font-bold'>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
