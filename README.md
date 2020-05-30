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

```jsx
import useInternetTime from 'use-internet-time';

const InternetClock = () => {
  const time = useInternetTime();

  return <div>{`It's currently ${time} all over the world!`}</div>;
};
```

## Usage

```jsx
useInternetTime(
  options?: {
    fractional?: boolean,
  }
): string
```

`useInternetTime` accepts an options argument with a single value:

### `fractional`

> Default: `false`

When true, returns a string formatted in long internet time (e.g. `@230.21`). When false, returns a string formatted in short internet time (e.g. `@230`)

## Server-side rendering usage

If you use `useInternetTime` with a server-side rendering framework like Gatsby or Next with `fractional` set to true, you're likely to see warnings in your console from React regarding mismatching text or mismatching values. You can silence these by setting `suppressHydrationWarning={true}` on the element where you're using `time`. For example:

```jsx
import useInternetTime from 'use-internet-time';

const SSRClock = () => {
  const time = useInternetTime({ fractional: true });

  return <div suppressHydrationWarning={true}>The time is: {time}</div>;
};
```

This is an escape hatch from React DOM to help suppress mismatching values that cannot be avoided (e.g. timestamps), and it only works one element deep. See the [React DOM `hydrate` docs]("https://reactjs.org/docs/react-dom.html#hydrate") for more information.
