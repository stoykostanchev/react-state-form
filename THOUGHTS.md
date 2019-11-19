# Thoughts

## Diagram

Right off the bat the post starts with a nice diagram
showing the end result. Just by looking at the diagram
some questions come in mind:

* Is the form truly the one getting the data from the API? - Would expect that not to be the case, sounds like it would be rather hard to reuse requests

  Later on it becomes clear that it's actually a store action triggered by the form

* Do reducers process the response of the API? - Sounds  weird. I would expect the request to be decoded into the state object directly. Expected reducers to get triggered by actions - not sure about their role here

EDIT: Makes total sense really. There is no such thing as 'decoded into the state object directly' - a function does that. It's not 'into' the state object, it's a brand new state object. Not sure what I was thinking.

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

## Action

The following paragraph starts talking about how things happen. We are talking about a concrete form, leaving it up to the user to imagine one.

A cut from the diagram is shown
* Not sure why the Model is drawn as well at this point
- Probably to help illustrate where the lenses come in, which comes in a diagram right after this one

If one looks hard enough, one can get a definition of the problem we are trying to solve :

* *[...] the form itself should not have any knowledge of where the data was stored in the state, or in what shape it was stored in*

* *[...] The form only needs to receive the data that it needs to display and edit*

These are the juicy bits. What this means is basically that the frontend [e.g. the form] is going to have a separate data model, compared to the data model of the API. Whereas in a lot of cases we can get away from that, this post is going to define a a way for us to transition between these models in a CONSISTENT way, rather than doing it ad-hoc and all over the place. Great examples as to WHY we might want to have a separate data model can be found by googling a bit about "Making impossible states impossible". These two ( [one](https://www.youtube.com/watch?v=IcgmSRJHu_8), [two](https://www.youtube.com/watch?v=XpDsk374LDE)) great talks on the topic are 100% worth their time.

Moving on, we realise we will be solving both of the above with:
* Lens
* Marshaller

*"A marshaller is an object that describes the transformation in shape from the object that the state holds,"*.

This does make me wonder - isn't it the reducer's job to put the things into the state - shouldn't the state contain our model in the form we need it? Sounds like we will be using the state as a cache for the raw response. That might be ok, if we want to shape the response in multiple ways. Also, I've always thought about marshalling as of something that gets my code state and stores it somewhere, e.g. the hard drive.

At the moment I am not quite sure what role the setters of the lens will play.

* Isn't the state changed by dispatching actions?
* Is the setter going to be a wrapper of actions?

Similar for unmarshalling. By the sound of it I expect the form to dispatch actions with data ready for storage in the state. Would've though that belongs to a reducer. Perhaps these are just synonyms, and a curtain name we are oging to call these particular reducers.

Moving on, Flux comes into the mix. I am all for type safety, though it does make things a bit harder for the reader. Understandable though - the code snippets come almost out of the box if using the tech you use on a daily basis.


A brief definition of a lens is given -

*A lens is something that knows where the object we want is stored in the state*

So, ```const lens = ({ formData }) => formData``` would be a 'lense'? Ok, let's see where this is going

*It also makes use of the marshaller to transform this object*

So, a marshaller could look like

```const marsh = ({ name, surname }) => ({ fullname: name + ' ' + surname })```

and our lense would probably be

``` const lensNow = (st) => marsh(lens(st))```

With this we arrive at the first code snippet

## Snippet 1

The thing about this snippet is - I don't know what it's called. Had to read everything through to the end, to make an assumption that would be a `model.js` inside of a `person` folder

What's more - the file itself is not entirely valid code, though the intention is clear [Cannot resolve name `StateObject`].

Kind of wondering why
~~~
type Marshaller<T, U> = {
  unmarshal: StateObject => T,
  marshal: T => U,
};
Marshaller<Person, PersonResource>
~~~
instead of
~~~
type Marshaller<StateType, FormType, ResType> = {
  unmarshal: StateType => FormType,
  marshal: FormType => ResType,
};
Marshaller<State, Person, PersonResource>
~~~
and wondnering if the reducer(?) belongs there as well,
as a function that is (I guess?)
~~~
ResType => StateType
~~~

If we are going through the trouble of using flow here, we could look to also use it to make the property names type safe? Typescript has 'keyof', and some [libraries can add type safety](https://www.npmjs.com/package/ts-object-path). Would hope Flow has something like that as well?

Random bit of extra info - validation is also mentioned, though it has more of a philosophical place in terms of this blog post
