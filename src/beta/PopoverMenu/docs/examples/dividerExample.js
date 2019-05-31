export default `
    <Layout cols={1} gap={0} justifyItems="center">
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
        <PopoverMenu.Divider/>
        <PopoverMenu.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenu.MenuItem 
        text="Delete" 
        onClick={e => console.log(e)}
        prefixIcon={<Icons.Delete/>}           
        />
        <PopoverMenu.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />                         
    </PopoverMenu>    
  </Layout>
`;
