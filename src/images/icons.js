import React from 'react';

export const getIcon = (icon) => {
	switch(icon) {
		// triangle explimation
		case "report":
			return(<>
			<path fill="none" d="M10.5744 2.05489L1.29367 17.5483C1.10233 17.8796 1.00108 18.2553 1.00001 18.638C0.998937 19.0206 1.09808 19.3969 1.28756 19.7293C1.47705 20.0617 1.75028 20.3388 2.08007 20.5328C2.40986 20.7269 2.78472 20.8312 3.16734 20.8354H21.7287C22.1113 20.8312 22.4862 20.7269 22.816 20.5328C23.1458 20.3388 23.419 20.0617 23.6085 19.7293C23.798 19.3969 23.8971 19.0206 23.896 18.638C23.895 18.2553 23.7937 17.8796 23.6024 17.5483L14.3217 2.05489C14.1264 1.73287 13.8513 1.46662 13.5231 1.28185C13.1949 1.09707 12.8247 1 12.448 1C12.0714 1 11.7011 1.09707 11.3729 1.28185C11.0447 1.46662 10.7697 1.73287 10.5744 2.05489V2.05489Z"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			<path fill="none" d="M12.4492 7.68652V12.0694"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			<path fill="none" d="M12.4492 16.4521H12.4592"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>);
		break;
		// check mark
		case "check":
			return(<>
			<path d="M17.272 2.45508L7.27202 12.4551L2.72656 7.90962"   fill="none" strokeWidth="3.63636" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>);
		break;
		// cheveron drop down 
		case "chevron":
			return(<>
			<path d="M1 0.999999L7 7L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>);
		break;
		// calendar icon
		case "calendar":
			return(<>
			<path d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" fill="none"/>
			<path d="M14 1V5"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			<path d="M6 1V5"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			<path d="M1 9H19"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>);
		break;
		// Arrow (used for back)
		case "arrow": 
			return(<>
			<path d="M15 8H1" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			<path d="M8 15L1 8L8 1" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>)
		break;
		// Clock
		case "clock":
			return(<>
			<path fill="none" d="M10.7302 20.8373C16.022 20.8373 20.3119 16.5474 20.3119 11.2556C20.3119 5.96372 16.022 1.67383 10.7302 1.67383C5.43833 1.67383 1.14844 5.96372 1.14844 11.2556C1.14844 16.5474 5.43833 20.8373 10.7302 20.8373Z" strokeWidth="1.91635" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			<path fill="none" d="M10.7305 5.50586V11.2549L14.5632 13.1713" strokeWidth="1.91635" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>)		
		break;
		// Circled Square
		case "stop":
			return(<>
			<path fill="none" d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			<path fill="none" d="M16.6004 9.40039H9.40039V16.6004H16.6004V9.40039Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>)
		break;
	}	
}

export const getIconViewbox = (icon) => {
	switch(icon) {
		case "report":
			return ("0 0 25 22");
		break;
		case "check":
			return("0 0 20 15");
		break;
		case "chevron":
			return("0 0 14 8");
		break;
		case "calendar":
			return("0 0 20 22");
		break;
		case "arrow": 
			return("0 0 16 16");
		break;
		case "clock": 
			return("0 0 22 22");
		break;
		case "stop": 
			return("0 0 26 26");
		break;
	}
}
