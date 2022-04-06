# Mandril Lykkehjulet Terminal Style

Ever wanted to guess Mandril quotes in a 'Lykkehjulet' type way??
Well, here ya go then ..

## Prerequisites

In order to play the game you'll need to have Node.js and Git installed. So, go get 'em here:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

If you plan on using Docker then please go get it here:

- [Docker](https://www.docker.com/)

## Clone this repo

Firstly, clone this repo to your computer:

```git
git clone https://github.com/jbakchr/mandril-lykkehjulet-terminal-style.git
```

## Play the game
Secondly, choose whether you'll want to play the game by use of your local Node.js runtime or by use of Docker

### The local way
Using your local Node.js runtime, do this

#### Installation
Install dependencies:

```npm
npm i
```

#### Play the game

Play the game by running:

```npm
npm start
```

### The Docker way
Using Docker? Do this

#### Build an image
Like this, replacing username and tag (or whatever the latter is called)
```docker
docker build -t <username>/<tag> .
```

#### Run the image
Run your newly created image
```docker
docker run -it <image>
```

## Enjoy yourself

Well .. of course you did ..
