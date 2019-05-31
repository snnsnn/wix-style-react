export default `
    <Layout cols={1} gap={0} justifyItems="center">
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
        <PopoverMenuBeta.Divider/>
        <PopoverMenuBeta.MenuItem 
          text="Add" 
          onClick={e => console.log(e)} 
          prefixIcon={<Icons.Add/>}
        /> 
        <PopoverMenuBeta.MenuItem 
        text="Delete" 
        onClick={e => console.log(e)}
        prefixIcon={<Icons.Delete/>}           
        />
        <PopoverMenuBeta.MenuItem 
          text="Delete" 
          onClick={e => console.log(e)}
          prefixIcon={<Icons.Delete/>}           
        />                         
    </PopoverMenuBeta>    
  </Layout>
`;
