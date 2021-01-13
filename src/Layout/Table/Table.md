Simple table component for composition with TableCell and TableRow.

```tsx
import Table from "./Table";
import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";

const SomeComponent = () => {
  return (
    <Table headers={["One", "Two", "Three"]}>
      <TableRow>
        <TableCell>foo</TableCell>
        <TableCell>foo</TableCell>
        <TableCell>foo</TableCell>
      </TableRow>
      <TableRow darkened>
        <TableCell>bar</TableCell>
        <TableCell>bar</TableCell>
        <TableCell />
      </TableRow>
      <TableRow>
        <TableCell>yar</TableCell>
      </TableRow>
    </Table>
  );
};

<SomeComponent />;
```
