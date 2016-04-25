## Website Performance Optimization portfolio project

####Part 1: Optimize PageSpeed Insights score for index.html
  View project at http://ncabelin.github.io/udperf and run url at PageSpeed.

1. Made CSS inline
2. Removed google Font, the default Sans-serif font almost looks the same as Open Sans.
3. Google analytics code made async, along with perfmatters.js
4. Used print media query on print.css

####Part 2: Optimize Frames per Second in pizza.html
  Check console and devtools at http://ncabelin.github.io/udperf/views/pizza.html

1. Called requestAnimationFrame() on updatePositions.
2. Moved background pizza height and weight to style.css.
3. Removed changePizzaSizes layout reading of offsetWidth.
    Just went straight to setting percentages of Pizza size.
4. Reduced background pizzas number to 20 instead of 200.
5. Used translateX instead to reduce steps to only compositing.
