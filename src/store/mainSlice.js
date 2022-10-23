import {createSlice} from '@reduxjs/toolkit'


const mainSlice = createSlice({
    name: 'app_data',
    initialState:{
        contractAddress: "",
        allUsersArray: [],
        currentAccountAddress: "",
        registredUsersArray:[]
    },

    reducers:{
        setContractAddress (state, action) {
            console.log(action.payload)
            state.contractAddress = action.payload;
        },
        setCurrentAccountAddress(state, action) {
            state.currentAccountAddress = action.payload;
        },
        setAllUsersArray (state, action) {
            console.log(action.payload)

            state.allUsersArray = action.payload;
        },
        setRegistredUsersArray(state, action) {
            console.log(action.payload)
            state.registredUsersArray = action.payload;
        },
        pushRegistredUsersArray(state, action){
            state.registredUsersArray.push(action.payload)
        }
    },
});

export const {setContractAddress,
    setCurrentAccountAddress,
    setAllUsersArray,
    setRegistredUsersArray,
    pushRegistredUsersArray} = mainSlice.actions

export default mainSlice.reducer

