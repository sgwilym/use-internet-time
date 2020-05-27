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
    fractional?: boolean,
    ssr?: boolean
  }
): string
```

`useInternetTime` accepts an options argument with two values:

### `fractional`

> Default: `false` 

When true, returns a string formatted in long internet time (e.g. `@230.21`). When false, returns a string formatted in short internet time (e.g. `@230`)

### `ssr`

> Default: `false` 

When true, `useInternetTime` will return an empty string on initial render instead of the current time. This makes `useInternetTime` server-side rendering-safe.

This prevents mis-match issues in server-side-rendered environments like Gatsby and Next, where network latency can result in webpage delivery between fractional beats. For example, the server might evaluate to `@230.21` but the client might evaluate to `@230.22`, causing React to error. Enabling this option will prevent this behavior.

