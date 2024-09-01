## Commands to run for testing on dev environment

### Setup Commands

Use `npm install` to download all of the dependencies needed to run the web app

Use `npm run dev` to start the application

## List of Goals

By the end of these tasks, we will end up with something that looks like this!

<img width="714" alt="Result" src="https://github.com/user-attachments/assets/d61c5f62-a190-463d-a54f-7fd6ed21efcd">


### Task 0:

The font color for the logo is looking a bit off–- pick a new color for it. First try and find where the title is and how the color is defined.
Check out: https://tailwindcss.com/docs/installation and do a quick search to try and figure out how we can change the color.

### Task 1:

Right now the Header is hard-coded into the main App component. Let's move it into its own component. Create a new `Header.tsx` file to clean up the code a little bit.

### Task 2:

Back in `App.tsx`, it looks like the `<BirdPreview />` component is giving us errors. Based on the error messages, try and come up with a solution.

### Task 3:

It looks like we are mapping through all of the posts and displaying them in our app. However, we are missing something! Based on the [slides](https://docs.google.com/presentation/d/1zC0q7lEcCUUAb9ST-WZXE5VGU2dfR1PVJwPUFo8g8aI/edit#slide=id.g2f670ce3d1c_0_671), make a fix to the output of the `.map` function.

### Task 4:

Now that we have fixed the existing `<BirdPreview />` component and `.map` issue, let's add two more posts. Inside the same folder as the first image, there are two more images of birds: let's use those for the next posts.

### Task 5:

You may have noticed that the 👍 button in our `<BirdPreview />` component doesn't do much (it actually does nothing xD). Thinking back to
what we learned in the [slides](https://docs.google.com/presentation/d/1zC0q7lEcCUUAb9ST-WZXE5VGU2dfR1PVJwPUFo8g8aI/edit#slide=id.g2f670ce3d1c_0_671), implement a `state` variable the represents the number of times that button has been clicked.

Note: Once again, this is a simplified use of state. If we wanted to have the button represent likes, we would need
to have the user only be able to click once. Our button would also need to call an API endpoint that speaks with our database in
order for the likes to persist on reload. You will notice upon refresh of the site, the number of likes is lost. That's okay for now
since we are just focusing on getting started with react.

Some things to consider

- Where do you define the state?
- How do you display the JavaScript number (which is the state) inside the JSX?
- What event will trigger the state to be updated?
- Where can you define the function which _handles_ how the state is updated?

### Task 6:

Let's make a component from scratch!

Pretty much every Sandbox project includes a footer at the bottom of the screen. We usually call out that the project was **made by Sandbox** and include a link to the [source code](https://github.com/banushi-a/f24-frontend-workshop).

Based on everything you've learned, try to make a `Footer.tsx` component and place it at the bottom of our app.

Look at [Search](https://searchneu.com/NEU) and [Graduate](https://graduatenu.com/) for some inspiration.

Include

- that the project was made by Sandbox
- a link to the source code
  - Look up which _HTML Tag_ can allow you to link to external sites
- styles that are consistent with the rest of the website
  - Base the styles (the ones that go inside `className=""`) on the header component.
  - Change some colors around to make it distinct from the header.
- the propper _HTML Tag_ to distinguish the content as a [footer](https://www.w3schools.com/tags/tag_footer.asp)

## Sample Solution

Take a look at the `solution` branch to see what I did to complete these tasks
