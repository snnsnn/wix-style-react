/* eslint-disable */
<div
  style={{
    width: '284px',
  }}
>
  <DropdownLayout
    visible
    options={[
      listItemActionBuilder({
        id: 0,
        title: 'standard - default',
      }),
      listItemActionBuilder({
        id: 1,
        title: 'destructive',
        skin: 'destructive',
      }),
      listItemActionBuilder({
        id: 2,
        title: 'dark',
        skin: 'dark',
      }),
    ]}
  />
</div>;
