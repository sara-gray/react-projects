import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
	console.log(sublinks)
	return (
		<nav className='nav'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='strip' className='nav-logo' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					{/* <li>
						<button className='link-btn'>products</button>
					</li>
					<li>
						<button className='link-btn'>developers</button>
					</li>
					<li>
						<button className='link-btn'>company</button>
					</li> */}
					{sublinks.map((item, index) => {
						const { links, page } = item
						const id = new Date().getTime().toString()
						return (
							<li key={index}>
								<button className='link-btn'>{page}</button>
							</li>
						)
					})}
				</ul>
				<button className='btn signin-btn'>sign in</button>
			</div>
		</nav>
	)
}

export default Navbar
