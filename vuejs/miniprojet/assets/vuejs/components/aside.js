import { Nav } from "./nav.js";  

let Sidebar = {
    
    data(){
        
        return{
          
          navContent : [
            
                {
                    title : "UTILISATEURS",
                    links : ["Liste des utilisateurs", "Ajouter un utilisateur", "Statistiques utilisateurs"]
                },
                
                {
                    title : "PRODUITS",
                    links : ["Liste des produits", "Ajouter un produit", "Statistiques des produits"]
                },
                
                {
                    title : "CATÉGORIES",
                    links : ["Liste des catégories de produits", "Ajouter une catégorie de produit"]
                },
              
            ]
          
        };
        
    },
    
    
    components :{
        
        Nav
        
    },
    
    template: 
    `  
    
        <Nav v-for="navs in navContent" :title="navs.title" :links="navs.links"/>
         
        
    `
};

export { Sidebar };