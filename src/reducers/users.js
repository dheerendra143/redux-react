const userReducer = (state = [], action) =>{
    switch(action.type){
        case 'ADD' :
             state.push({
                "first_name": action.user.first_name,
                "last_name": action.user.last_name,
                "email": action.user.email,
                "contact": action.user.contact
            })
            return state;
        
        default:
            return state;
    }

}
export default userReducer;