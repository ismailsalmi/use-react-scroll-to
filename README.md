# React hook scroll to any component

## Built to be used with create-react-app, nextjs, gatsby, or react-static.

[See it in demo]( https://use-react-scroll-to-demo.vercel.app)

## import and how to use

```
import { useScroll } from "use-react-scroll-to";

export default () => {
    const { scrollTo } = useScroll();
    return (
      <div>
        <button onClick={() => scrollTo({ elementId: "element id", behavior: "auto" })}>go t</button
      </div>
    )
}
```