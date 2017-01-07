## Website Performance Optimization portfolio project

###Part 1: Optimize PageSpeed Insights score for index.html
####Steps to run App :
View project at http://ncabelin.github.io/udperf and run url
at Google PageSpeed Insights to check out improvements.

####List of Code Changes :
1. Made CSS inline.
2. Removed google Font, the default Sans-serif font almost looks the same as Open Sans.
3. Google analytics code made async, along with perfmatters.js.
4. Used print media query on print.css.

####Part 2: Optimize Frames per Second in views/pizza.html
####Steps to run App :
View project part at http://ncabelin.github.io/udperf/views/pizza.html.
Use devtools and console to view fps. Hit Timeline record while scrolling.
Scroll down while recording Timeline on Chrome Devtools to see fps.

####List of Code Changes :
1. Called requestAnimationFrame() on updatePositions.
2. Moved background pizza height and weight to style.css.
3. Removed changePizzaSizes layout reading of offsetWidth.
    Just went straight to setting percentages of Pizza size.
4. Dynamic pizza background number dependent on window height and width.
5. Created phases array to do 5 pre made calculations instead of for the whole sum of pizza backgrounds.
6. Took pizzasDiv out of for loop since it is doesn't need to be repeated (id only).
7. Replaced all instances of querySelectorAll with getElementsByClassName for speed.
