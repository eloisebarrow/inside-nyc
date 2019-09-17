import React from 'react';
// import SingleDestination from './SingleDestination';

function Destinations(props) {
  return (
    <div className="destinations">
      Destinations
      CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it's never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox helped out, but it's intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.

There are two primary things that inspired me to create this guide. The first is Rachel Andrew's awesome book Get Ready for CSS Grid Layout. It's a thorough, clear introduction to Grid and is the basis of this entire article. I highly encourage you to buy it and read it. My other big inspiration is Chris Coyier's A Complete Guide to Flexbox, which has been my go-to resource for everything flexbox. It's helped a ton of people, evident by the fact that it's the top result when you Google "flexbox." You'll notice many similarities between his post and mine, because why not steal from the best?

My intention with this guide is to present the Grid concepts as they exist in the very latest version of the specification. So I won't be covering the out of date IE syntax, and I'll do my best to update this guide regularly as the spec matures.

Basics and Browser Support
To get started you have to define a container element as a grid with display: grid, set the column and row sizes with grid-template-columns and grid-template-rows, and then place its child elements into the grid with grid-column and grid-row. Similarly to flexbox, the source order of the grid items doesn't matter. Your CSS can place them in any order, which makes it super easy to rearrange your grid with media queries. Imagine defining the layout of your entire page, and then completely rearranging it to accommodate a different screen width all with only a couple lines of CSS. Grid is one of the most powerful CSS modules ever introduced.

As of March 2017, most browsers shipped native, unprefixed support for CSS Grid: Chrome (including on Android), Firefox, Safari (including on iOS), and Opera. Internet Explorer 10 and 11 on the other hand support it, but it's an old implementation with an outdated syntax. The time to build with grid is now!


    </div>
  );
}

export default Destinations;
