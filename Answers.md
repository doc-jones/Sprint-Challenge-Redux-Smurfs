# Answers to Study Questions

1. In your own words, describe actions, reducers and the store and their role in Redux. 
Actions, reducers and the store are the components of the application data-flow architecture of Redux.


What does each piece do
Actions:	Events that send data to an application's store clone.
Reducers:	A function that takes in the current state of an application and an action returning a new state.
Store:		Contains all of the data for an application. 

2. Why is the store known as a 'single source of truth' in a redux application?
All of the data for an application is stored in an object and that object is the store.  The store is immutable. We never write to the store, if the application needs to modify state we simply clone the store and any changes or updates use the clone.  There is only one store. It is never modified.
 
 
3. What is the difference between Application state and Component state? 
Application state is global in the context of an application and can be accessed by any component or function within the application. Component state is local to it's component and be accessed by that component and can only pass down to it's children component state as props.

When would be a good time to use one over the other?
It depends upon the complexity of the application. Smaller applications don't need the burden of Redux to manage state and don't benefit much from the lack of rerendering that Redux brings.  Larger more complex applications benefit from the abstraction of the data from the UI making an application easier to maintain.


4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
It's middleware that allows action creators to return a function instead of an action. It can be used to delay an action which is useful when we are fetching data from an external API.

comment to commit