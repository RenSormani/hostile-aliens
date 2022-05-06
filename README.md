# hostile-aliens-v2
This is an alternative take on version 1 of the Hostile Aliens game I created with JavaScript, HTML and CSS, in which aliens were randomly targeted until the motherShip was destroyed. In this version the enemy aliens' health is diminished by bullets, rather than a random generator. You control the player and shoot the targets. Once the motherSHip is destroyed, so too is the whole fleet.

# What I used:
•	JavaScript
•	HTML
•	CSS
•	SCSS
•	BEM
•	GitHub

# The Functionality
When it came to creating this updated version of the game Hostile Aliens, I wanted to give it a more of a Space Invaders feel to it. The main difference came about from eliminating the random nature of the hits and adding the "bullets". I took a step-by-step process as outlined below:

1.	Instead of using CSS Grid I used Canvas to set up the gameboard.
2.	As in my original version I created a Class of EnemyShip, and then an enemy array to form multiple alien ships and then display them on screen. Each possessed their own specific key/values. I designed the enemy ships to possess a "glowing" forcefield that disappeared when they had 10 health points remaining.
3.	Likewise I created a class of Player, which rendered Earth's defender, and all its key/values. Keypresses were created to control and limit the player's movements/actions with the directional keys. 
4.	I created a bullet Class and bulletController, which looked at collision with objects, speed of the bullets and damage. Firing the bullet is done by pressing the space bar.
5.	•	The game is over when the motherShip is destroyed (ie. when its health points reach zero) regardless of whether the rest of the fleet has been destroyed. A "Winner winner" notice comes up when the motherShip is defeated.
6.	Press the rest button to restart the game.

# Hostile Aliens version 2
<img width="957" alt="hostile-aliens-version-2" src="https://user-images.githubusercontent.com/93707792/167153384-5d5017f4-48ea-4de1-883a-ff0f4b66f00f.png">
