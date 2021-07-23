Simple paging control

```tsx
import PaginationController from "./Paging";

<PaginationController
  page={1}
  totalPages={5}
  next={{ onClick: () => null, disabled: true }}
  prev={{ onClick: () => null, disabled: true }}
/>;
```
