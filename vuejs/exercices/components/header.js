import { Nav } from "./nav.js";  

let Header = {  
    
    data(){
        
        return{
            
            titles : [
            
        
                "Acceuil",
                "À propos",
                "Contact"
        
                
            ]
            
        };
        
    },
    
    
    components :{
        
        Nav
        
    },
    
    template: `  
        <header>
        <Nav :liTitle="this.titles"/>
        </header>
        
    `
};  
  
export { Header };