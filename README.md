<br>
SVG Icon Store
<br><br>
SVG Icon Store allows for the dynamic store of all your projects SVG icons in one location to aid in maintainability. 

## Overview

key | value
---|---
name | svg-icon-store
desc | store all your projects SVG icons in one place
author | gradient-here
version | 1.1.0

## Features

*single file for all icons
*only pull the icons you need for your project
*simple maintainability with single source of truth
*dynamic icon resizing based on css

## Quick Start

Create icons.js file with two methods
*getIcon
*getIconViewbox

import an SVG
```
1) add new case to getIcon and getIconViewbox methods with the name of your icon
2) open SVG in IDE 
3) copy all nested data inside SVG tags and paste into getIcon return method
4) copy the viewbox data from the SVG and paste into the getIconViewbox return method
```

use and icon in the project
```
1) import getIcon and getIconViewbox into file
2) add fixIcon method to file
3) call fixIcon method passing it the icon you want (make sure it has the exact same name as specificed in the case statments in icons.js)
4) ensure that you have your css set up correctly displaying the stroke, fill, height, and width
```

## Usage
single file containing parsed SVG data to be dynamically displayed when called. 
```
|-- src
    |-- components/
    |-- images/
	        |-- icons.js
    |-- pages/
```

## Version

version | desc
---|---
1.1.0 | init 

## License

[MIT](https://opensource.org/licenses/MIT)
