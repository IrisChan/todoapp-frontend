import {
    ADD_TODO
} from '../constants/ActionTypes'

const initialState = [
    {
        owner: 'iris',
        description: 'Use Redux',
        isDone: false
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            {
                owner: 'iris',
                description: action.description,
                isDone: false
            }
        ]

    default:
        return state
    }
}