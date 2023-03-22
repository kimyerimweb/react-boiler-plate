import { Store, applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'

export function configureStore(): Store<any> {
  const middlewares: any[] = []
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

  return store
}
