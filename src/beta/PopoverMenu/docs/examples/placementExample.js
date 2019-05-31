export default `
    <Layout cols={4} gap={0} justifyItems="center">
      <PopoverMenu 
        placement="top"
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
      }> 
        <PopoverMenu.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenu.MenuItem 
          text="Edit" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Edit/>}           
        />
        <PopoverMenu.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />
    </PopoverMenu>
      <PopoverMenu 
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
      }> 
        <PopoverMenu.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenu.MenuItem 
          text="Edit" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Edit/>}           
        />
        <PopoverMenu.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />
    </PopoverMenu>
      <PopoverMenu 
        placement="left"
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
      }> 
        <PopoverMenu.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenu.MenuItem 
          text="Edit" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Edit/>}           
        />
        <PopoverMenu.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />
    </PopoverMenu>
      <PopoverMenu 
        placement="right"
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
      }> 
        <PopoverMenu.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenu.MenuItem 
          text="Edit" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Edit/>}           
        />
        <PopoverMenu.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />
    </PopoverMenu>            
  </Layout>
`;
