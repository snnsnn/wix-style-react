export default `
    <Layout  cols={2} gap={0} justifyItems="center">
      <PopoverMenu 
          triggerElement={
              <IconButton priority="secondary"><Icons.More /></IconButton>
      }> 
        <PopoverMenu.MenuItem 
          text="option 1" 
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenu.MenuItem 
          text="option 2" 
          onClick={e => console.log(e)} 
        />
        <PopoverMenu.MenuItem 
          text="option 3" 
          onClick={e => console.log(e)} 
        />

    </PopoverMenu>
    <PopoverMenu 
          triggerElement={
              <TextButton priority="secondary">Actions</TextButton>
      }> 
        <PopoverMenu.MenuItem 
          text="option 1" 
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenu.MenuItem 
          text="option 2" 
          onClick={e => console.log(e)} 
        />
        <PopoverMenu.MenuItem 
          text="option 3" 
          onClick={e => console.log(e)} 
        />
    </PopoverMenu>  
  </Layout>
`;
