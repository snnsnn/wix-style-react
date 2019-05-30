export default `
    <Layout  cols={2} gap={0} justifyItems="center">
      <PopoverMenuBeta 
          triggerElement={
              <IconButton priority="secondary"><Icons.More /></IconButton>
      }> 
        <PopoverMenuBeta.MenuItem 
          text="option 1" 
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenuBeta.MenuItem 
          text="option 2" 
          onClick={e => console.log(e)} 
        />
        <PopoverMenuBeta.MenuItem 
          text="option 3" 
          onClick={e => console.log(e)} 
        />

    </PopoverMenuBeta>
    <PopoverMenuBeta 
          triggerElement={
              <TextButton priority="secondary">Actions</TextButton>
      }> 
        <PopoverMenuBeta.MenuItem 
          text="option 1" 
          onClick={e => console.log(e)} 
        /> 
        <PopoverMenuBeta.MenuItem 
          text="option 2" 
          onClick={e => console.log(e)} 
        />
        <PopoverMenuBeta.MenuItem 
          text="option 3" 
          onClick={e => console.log(e)} 
        />
    </PopoverMenuBeta>  
  </Layout>
`;
