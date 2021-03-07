import React from 'react';
import './HeaderComponent.css';
import { Button } from '@brandwatch/axiom-components';


// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = () => {
    return <header className={'header'}>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
     <ul className="pagelinks">
			<li><a href="">Home</a></li>
			<li><a href="">Characters</a></li>
			<li><a href="">Houses</a></li>
			<li><input className="searchBar"/></li>
			<Button className="searchButton" variant="primary">
	        	Search
	        </Button>

	</ul>
	

	
    </header>
};