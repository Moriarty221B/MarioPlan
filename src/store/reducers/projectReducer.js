const initState={
    projects:[
        {id:'1', title:'baabaa', content:'black sheep'},
        {id:'2', title:'have you', content:'any wool'},
        {id:'3', title:'yes sir', content:'yes sir 3 bags full'}
    ]
}

const projectReducer =(state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;

        default:
            return state;

    }
    
}

export default projectReducer;