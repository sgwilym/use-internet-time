# use-internet-time

A React hook for using internet time, using [dot-beat-time](https://github.com/sgwilym/dot-beat-time) under the hood. Can display fractional (e.g. @456.35) and non-fractional (e.g. @456) internet time. Updates every hundredth of a beat, or 864ms.

## Motivation

[dot-beat-time](https://github.com/sgwilym/dot-beat-time)'s README:

> The millennium is upon us. The age of the internet arrived long ago. Why are we still coordinating meetings across timezones? Fortunately internet time — which splits the day into 1000 beats and which is consistent across the world — is here to fix all that.

> Example: you are in central Europe and wish to organise a meeting with your friend in Tokyo during your lunch. Instead of calculating what time it is in Tokyo then, just tell your friend: "let's talk at @500!".

And now you can easily bring the future of time to your React apps!

## Installation

`yarn add use-internet-time`

## Example usage

```
import useInternetTime from 'use-internet-time';

const InternetClock = () => {
  const time = useInternetTime();

  return <div>{`It's currently ${time} all over the world!`}</div>
}
```

## Usage

```
useInternetTime(
  options?: {
    fractional?: boolean
  }
): string
```

`useInternetTime` accepts an options argument with one option: `fractional`, which when set to `true` will return with long internet time, e.g. `@230.21`.
