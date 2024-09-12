import chance from 'chance'

const chancee = new chance();

export const dumydata = ( ) =>{
    console.log(chancee.name({middle: true,}));
    return chancee.name({
        middle: true})
    // dumydata();
    
}