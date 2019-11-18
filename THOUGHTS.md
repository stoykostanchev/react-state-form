# Thoughts

Right off the bat the post starts with a nice diagram
showing the end result. Just by looking at the diagram
some questions come in mind:

* Is the form truly the one getting the data from the API? - Would expect that not to be the case, sounds like it would be rather hard to reuse requests

  Later on it becomes clear that it's actually a store action triggered by the form

* Do reducers process the response of the API? - Sounds  weird. I would expect the request to be decoded into the state object directly. Expected reducers to get triggered by actions - not sure about their role here

* Not sure which relation is one-to-one and which one is one-to-many. I would think there is a single state, and many forms, hence - multiple models

* Not sure what the API resource layer is. I would expect that to be something used by the store [if there is a notion of a store in react], and the actions there. Not quite sure why the GET requests wouldn't go through the API resource layer
  
* Really hoping the API resource are auto-scaffolded. Same for the lens and the marshal-ers

* Not quite sure what the difference is between marshaling and decoding, assuming it to be the same

