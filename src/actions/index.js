export const increment = () =>{
    return {
        type: "INCREMENT"
    }
}
export const decrement = () =>{
    return {
        type: "DECREMENT"
    }
}

export const sign_in = () =>{
    return {
        type: "SIGN_IN"
    }
}

export const add_user = (user) =>{
    return {
        type: "ADD",
        user: user
    }
}

export const delete_user = (user) =>{
    return {
        type: "DELETE",
    }
}