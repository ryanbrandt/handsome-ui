# Handsome UI

[![ryanbrandt](https://circleci.com/gh/ryanbrandt/handsome-ui.svg?style=svg)](https://app.circleci.com/pipelines/github/ryanbrandt/handsome-ui)

A responsive and customizable React component library to simplify complex front-end development.

## Components

### Reference the [component guide](http://handsomeui-documentation.s3-website-us-east-1.amazonaws.com/)

## Exposed Hooks and Contexts

### AppContext & Context Leveraging Hooks

AppContext is an extinsible context, in the base shape of

```tsx
{
    isMobile?: boolean;
    windowSize?: WindowSize;
}
```

which is provided by default by `<AppContainer />`, if you so choose to leverage it.

Additional contexts can be provided in `AppContext` via passing in the `additionalContext` prop to `<AppContainer />` or creating your own provider.

#### useWindowSize

Provides the inner and outer window sizes via:

- if `AppContext.windowSize` is defined, providing `AppContext.windowSize`
- if `AppContext.windowSize` is undefined, adding an event listener to the window for resize events

Example

```tsx
// component that needs window size

const windowSize = useWindowSize();

return <div>inner: {window.innerWidth}</div>;
```

#### useIsMobile

Provides a configurable flag which denotes if the application is on a mobile client via:

- if `AppContext.isMobile` is defined, providing `AppContext.isMobile`
- if `AppContext.isMobile` is undefined, relying on `useWindowSize` to compute if the screen is within the mobile constraints

Example

```tsx
// component that needs mobile state

const shouldShowMobileVersion = useIsMobile();

if (shouldShowMobileVersion) {
  // ...
}
```

#### Example Configuration

```tsx
// App.tsx/root stateful node

const [someContextValue, setSomeContextValue] = useState("foo");
const [someOtherContextValue, setSomeOtherContextValue] = useState("bar");

// ...

const context: IExtensibleAppContext = {
    someContextValue,
    someOtherContextValue
}

return (
    <AppContainer additionalContext={context}>
        <OtherComponent>
    </AppContainer>
)


```

```tsx
// OtherComponent.tsx/a down stream node

// context provided is available
const someContextValue = useContext(SomeContextValue);

// base AppContext fields are exposed via hooks
const isMobile = useIsMobile();

return <div>foo</div>;
```

These hooks will also be available without using `<AppContainer />`, however, be sure to use a custom context provider to control `AppContext` to avoid the performance hit of redundant computations by `useIsMobile` and `useWindowSize`

### Other Hooks

#### useDebounce

Allows the debouncing of values-- generally meant for composition with other hooks/stateful values

Example

```tsx
// Updates from useSomeValue() are debounced by 1 second
const debouncedHookValue = useDebounce(useSomeValue(), 1000);
```
