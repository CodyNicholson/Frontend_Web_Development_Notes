# What Is Redux?

A problem that we will have when we try to build a single-page application using React is that we will have a lot of components that all need to communicate with each other. This can make our code very messy and hard to deal with. **Redux** is an architecture that lets us manage many components that are all on a single-page React application.

There are seven different pieces in the **Redux** architecture. This may seem overly complex at first, but no matter how big your application gets this architecture will still support it. **Redux** scales.

### Overview Of Redux

A traditional React application is broken up into components, which are just different parts of your website. These components each come with a bit of memory called *state*. The *state* is responsible for deciding how that component is going to display. For a navigation bar, the state would be the list of option text values and the list of URL links. For a video player component, the state would be the video. So we have these different components with different JavaScript objects associated with them, and each of these JavaScript objects are separate.

Say that whenever you click the "Next Video" button in a "Video Options" component, you need to change the Id of the video in a "Video Player" component and you need to tell a "Navigation Bar" component to highlight the new video you are now playing. Now we have three components talking to each other: "Video Options", "Video Player", and "Navigation Bar". It is hard to manage the communication between all of these components. What if we could combine all of our states into one? Instead of having a bunch of separate JavaScript objects, what if we took all of the states in the entire application and combined them into one big JavaScript object? This is exactly how **Redux** works.

You might think that combining all of our data into one object would consume a ton of memory, but it actually won't take up any more memory than it did before we merged all of our states together. When we combine all of our states together, we call this new big JavaScript object a **Store**. 