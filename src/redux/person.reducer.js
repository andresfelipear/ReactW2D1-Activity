import * as actionType from './action'
import {v4 as uuidv4} from 'uuid'

const initState = {
    people: []
}

const personReducer = (state = initState,{type, payload}) => {
    // const { type, payload } = action

    switch(type){
        case actionType.addPerson:
            const newPerson = {
                id:uuidv4(),
                name:'John',
                age: Math.floor(Math.random()*40)
            }
            return { 
                ...state, 
                people: [...state.people, newPerson]
            }
        case actionType.deletePerson:
            return{
                ...state,
                people: state.people.filter(person => person.id !== payload)
            }
        default:
            return state
    }
}

export default personReducer