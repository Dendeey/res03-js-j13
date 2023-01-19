import { Nav } from "./nav.js";  

let Header = {  
    
    data(){
        
        return{
            
            titles : [
            
                {
                    li : "Acceuil"
                },
                {
                    li : "À propos"
                },
                {
                    li : "Contact"
                },
                
            ]
            
        };
        
    },
    
    
    components :{
        
        Nav
        
    },
    
    template: `  
        <header>
            <Nav :titles = "title.li"/>
        </header>
        
    `
};  
  
export { Header };