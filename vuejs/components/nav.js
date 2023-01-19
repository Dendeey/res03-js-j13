let Nav = {  
    
    
    props : [
      
      "titles"
        
    ], 
    
    template: `  
        <nav>
            <ul>
                <li v-for="title in titles" >{{ titles }}</li>
            </ul>
        </nav>
    `
};  
  
export { Nav };