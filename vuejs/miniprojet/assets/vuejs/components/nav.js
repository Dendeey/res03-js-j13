let Nav = {
    
    data() {
        return {
            showLinks: false
        };
    },
    
    props : [
    
    "title",
    "links"
    
    ],
    
    
    
    template : 
    `
    <nav>
        <h2 @click="showLinks = !showLinks">{{ title }}</h2>
        <ul v-if="showLinks">
            <li v-for="link in links">{{ link }}</li>
        </ul>
    </nav>
    
    `
    
};

export { Nav };