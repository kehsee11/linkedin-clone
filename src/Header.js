import {
	BusinessCenter,
	Chat,
	Home,
	Notifications,
	Search,
	SupervisorAccount,
} from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';

import HeaderOption from './HeaderOption';
import { logout,selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
	const user =useSelector(selectUser);
	const dispatch = useDispatch();
	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'
					alt=''></img>

				<div className='header__search'>
					<Search />
					<input type='text' placeholder='Search'></input>
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption Icon={Home} title='Home' />
				<HeaderOption Icon={SupervisorAccount} title='My space' />
				<HeaderOption Icon={BusinessCenter} title='work
				' />
				<HeaderOption Icon={Chat} title='Messaging' />
				<HeaderOption Icon={Notifications} title='Notifications' />
				<HeaderOption
					onClick={logoutOfApp}
					avatar={true} 
					title='me'
				/>
			</div>
		</div>
	);
}

export default Header;