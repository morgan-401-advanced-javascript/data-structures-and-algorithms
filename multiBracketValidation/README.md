
Links:
[Pull Request](https://github.com/morgan-401-advanced-javascript/data-structures-and-algorithms/pull/12)
[Travis](https://travis-ci.com/morgan-401-advanced-javascript/data-structures-and-algorithms/builds/136649574)
## Whiteboard

<!-- Photo of your whiteboard -->

## Challenge


Feature Tasks
On your main file, create a function called multiBracketValidation(input). Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}
Example
`Input	Output
{}	TRUE
{}(){}	TRUE
()[[Extra Characters]]	TRUE
(){}[[]]	TRUE
{}{Code}[Fellows](())	TRUE
[({}]	FALSE
(](	FALSE
{(})	FALSE`
Consider these small examples and why they fail.

Input	Output	Why
`{	FALSE	error unmatched opening { remaining.
)	FALSE	error closing ) arrived without corresponding opening.
[}	FALSE	error closing }. Doesn’t match opening (.`

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
