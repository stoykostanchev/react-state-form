# Thoughts

## Diagram

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

## Intro

  The problem of tangling code and structuring it is not Javascript specific - almost all languages can suffer from that. Some languages / frameworks do a really good job in preventing mess - Elm, Golang, Ruby on Rails to name a few. Tools go a long way towards producing consistent code. Things like:

* Scaffolding (components, stores, other file types)
* Using a framework that relies on conventions, rather than configurations
* Generating as much code as possible (e.g. given a model of an API, creating the files to talk to that API)
* Linting

Non-automated practices could help keep things in order, e.g. **PR's**. They work even better when programatically enforced (e.g. not being able to merge code into the master branch directly, not being able to skip PR approval etc.)

Ultimately, looking at the diagram [e.g. the solution] and the intro, I am not sure what to expect at this point.

* Why do I need to separate the state from the form data?
* What different approaches are there?
 
However, I am given a reference to **redux-form**, which might be worth reading into a bit more detail, before continuing with this post itself

Reading onwards, I understand Dan talks about a RESTful API, and ```forms``` themselves loading and submitting data. That tells me not to expect any fancy functional components - containers, providing data to the potential UX components inside of them. Fair enough - I kind of like the "all you need for this component you can find here" vs the "search for logic here, styles there and structure in that other place"