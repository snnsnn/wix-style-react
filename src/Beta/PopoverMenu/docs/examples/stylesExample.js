export default `
    <Layout cols={3} gap={0} justifyItems="center">
      <PopoverMenuBeta 
          triggerElement={
              <IconButton priority="secondary"><Icons.More /></IconButton>
      }> 
        <PopoverMenuBeta.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenuBeta.MenuItem 
          text="Edit" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Edit/>}           
        />
        <PopoverMenuBeta.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />
    </PopoverMenuBeta>
    <PopoverMenuBeta 
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
    }> 
        <PopoverMenuBeta.MenuItem 
          text="default dark skin" 
          onClick={e => console.log(e)} 
        />     
        <PopoverMenuBeta.MenuItem 
          text="destructive skin" 
          onClick={e => console.log(e)} 
          skin="destructive"
        /> 
        <PopoverMenuBeta.MenuItem 
          text="disabled option" 
          disabled
        />         
    </PopoverMenuBeta>  
    <PopoverMenuBeta 
        triggerElement={
            <IconButton priority="secondary"><Icons.More /></IconButton>
    }> 
        <PopoverMenuBeta.MenuItem 
          text="small size"
          textSize= "small" 
          onClick={e => console.log(e)} 
        />     
        <PopoverMenuBeta.MenuItem 
          text="small size"
          textSize= "small"
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenuBeta.MenuItem 
          text="normal size" 
          onClick={e => console.log(e)}
        /> 
        <PopoverMenuBeta.MenuItem 
          text="normal size" 
          onClick={e => console.log(e)}
        />                     
    </PopoverMenuBeta>      
  </Layout>
`;
