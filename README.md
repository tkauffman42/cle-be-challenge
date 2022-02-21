
## Setup

#### Vercel

- Create a free [Vercel](https://vercel.com/) account
- Install [Vercel CLI](https://vercel.com/cli)



---

### Provided Endpoint Documentation

 - https://cle-be-challenge-tkauffman.vercel.app/api

## `/players`

#### Query Params

`playerId` - optional

#### Description

If no query param is passed, returns a list of playerOverviews

```js
// return object
{
  players: [];
}
```

If a playerId is passed, returns detailed playerDetails

```js
// return object
{
  playerDetails: {
  }
}
```

## `/pitches`

#### Query Params

`playerId` - required

#### Description

Returns a list of pitches for the passed in playerId

```js
// return object
{
  pitches: [];
}
```
