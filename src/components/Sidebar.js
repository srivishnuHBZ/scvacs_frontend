// import Logo from '../assets/img/logo.png';
// import calculator from '../assets/img/calculator.png';
// import articles from '../assets/img/articles.png';
// import tests from '../assets/img/tests.png';
// import learn from '../assets/img/learn.png';
// import settings from '../assets/img/settings.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				{/* <img src={Logo} className='sidebar__logo' /> */}
				<h6 className='sidebar__text'>
					<b>Generational</b>
				</h6>
				<h5 className='sidebar__sub-text'>
					<span>Dashboard</span>
				</h5>
			</div>
			<Link
				to='/calculators'
				className={`sidebar__item ${
					window.location.pathname == '/calculators'
						? 'sidebar__item--active'
						: ''
				} mt-3`}
			>
				{/* <img className='sidebar__item__image' src={calculator} /> */}
				<span className='sidebar__item__text'>Calculators</span>
			</Link>
			<Link
				to='/articles'
				className={`sidebar__item ${
					window.location.pathname == '/articles'
						? 'sidebar__item--active'
						: ''
				}`}
			>
				{/* <img className='sidebar__item__image' src={articles} /> */}
				<span className='sidebar__item__text'>Articles</span>
			</Link>
			<Link
				to='/tests'
				className={`sidebar__item ${
					window.location.pathname == '/tests'
						? 'sidebar__item--active'
						: ''
				}`}
			>
				{/* <img className='sidebar__item__image' src={tests} /> */}
				<span className='sidebar__item__text'>Tests</span>
			</Link>
			<Link
				to='/learn'
				className={`sidebar__item ${
					window.location.pathname == '/learn'
						? 'sidebar__item--active'
						: ''
				}`}
			>
				{/* <img className='sidebar__item__image' src={learn} /> */}
				<span className='sidebar__item__text'>Learn</span>
			</Link>
			<div className='sidebar__item'>
				{/* <img className='sidebar__item__image' src={settings} /> */}
				<span className='sidebar__item__text'>Settings</span>
			</div>
			<Link to='/auth/logout' className='sidebar__item'>
				<span className='sidebar__item__text'>Logout</span>
			</Link>
		</div>
	);
};

export default Sidebar;
