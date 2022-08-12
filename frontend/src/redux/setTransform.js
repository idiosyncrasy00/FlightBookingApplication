
// SetTransform.js

import { createTransform } from 'redux-persist';

//source from 
//https://stackoverflow.com/questions/57906696/redux-persist-createpersistoid-error-serializing-state-typeerror-converting-ci
 
const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert mySet to an Array.
    return { ...inboundState, mySet: [...inboundState.mySet] };
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.
    return { ...outboundState, mySet: new Set(outboundState.mySet) };
  },
  // define which reducers this transform gets called for.
  { whitelist: ['someReducer'] }
);
 
export default SetTransform;