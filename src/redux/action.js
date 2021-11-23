export const addPerson = 'ADD_PERSON';
export const deletePerson = 'DELETE_PERSON';

//action creator (A function that RETURNS an ACTION <---- just an object)
export const peopleUpdate = (person) => {
    return { type: addPerson, payload: {person: person} }
}