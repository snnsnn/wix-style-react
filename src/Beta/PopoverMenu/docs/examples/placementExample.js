export default `
    <Layout cols={4} gap={0} justifyItems="center">
      <PopoverMenuBeta 
        placement="top"
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
        placement="left"
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
        placement="right"
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
  </Layout>
`;
