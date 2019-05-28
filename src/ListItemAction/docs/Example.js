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
        title: 'Some Name',
        onClick: () => console.log('clicked')
      }),
      listItemActionBuilder({
        id: 1,
        title: 'disabled',
        onClick: () => console.log('cannot be clicked'),
        disabled: true,
      }),
      listItemActionBuilder({
        id: 2,
        title: 'Some very very long long long Name',
        prefixIcon: <Icons.Edit />,
      }),
      listItemActionBuilder({
        id: 3,
        title: 'destructive',
        skin: 'destructive',
      }),
      listItemActionBuilder({
        id: 4,
        title: 'small size',
        size: 'small',
      }),
      listItemActionBuilder({
        id: 5,
        title: 'dark',
        skin: 'dark',
      }),
    ]}
  />
</div>;
