import { combineReducers } from 'redux'

//import any from './any'

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combineReducer = combineReducers({
        //any
      })
      return combineReducer(state, action)
    }
  }
}

export default rootReducer
