let Nav = {
    
    props : [
    
    "title",
    "links"
    
    ],
    
    template : 
    `
    <nav>
        <h2 @click="">{{ title }}</h2>
        <ul></ul>
        <template></template>
        <li v-for="link in links">{{ link }}</li>
    </nav>
    
    `
    
};

export { Nav };