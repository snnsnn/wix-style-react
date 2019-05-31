export default `
    <Layout cols={3} gap={0} justifyItems="center">
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
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
    }> 
        <PopoverMenu.MenuItem 
          text="default dark skin" 
          onClick={e => console.log(e)} 
        />     
        <PopoverMenu.MenuItem 
          text="destructive skin" 
          onClick={e => console.log(e)} 
          skin="destructive"
        /> 
        <PopoverMenu.MenuItem 
          text="disabled option" 
          disabled
        />         
    </PopoverMenu>  
    <PopoverMenu 
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
    }> 
        <PopoverMenu.MenuItem 
          text="small size"
          textSize= "small" 
          onClick={e => console.log(e)} 
        />     
        <PopoverMenu.MenuItem 
          text="small size"
          textSize= "small"
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenu.MenuItem 
          text="normal size" 
          onClick={e => console.log(e)}
        /> 
        <PopoverMenu.MenuItem 
          text="normal size" 
          onClick={e => console.log(e)}
        />                     
    </PopoverMenu>      
  </Layout>
`;
