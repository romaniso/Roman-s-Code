# Roman's Code ![This is my logo!](/src/assets/images/logo-dark.png)

**[Roman's Code](https://romanscode.com/)** is a React based portfolio of a front web developer **_Roman Isopenko_**. You can browse my projects here as well as check out some info about my background. This webpage can provide you the information about my front end dev skills. The project is developed by creating several React components, mainly functional, using several React hooks such as useState for transfering info from a component to other components. For styling, I used plain CSS, but for future updates, styled components external library is going to be used.

![This is my portfolio!](/src/assets/images/projects/roman's-code.png)

> Action is the foundational key to all success.
> **Picasso**

---

## External libraries

This project is based on several external libraries that have provided some additional functionality for user interface. Since the webpage is developed with React, it allows to use external sources to elaborate the technology of a project. Here is a list of libs that I was using creating my portfolio **[Roman's Code](https://romanscode.com/)** :

- React Router Dom
- React Icons
- SwiperJS
- Uuid
- React Transition Group
- EmailJS

![My dependencies list](/src/assets/images/readme/dependencies-img.png)

---

### React Router Dom

Let's start with the first position from the abovementioned list, which is **React Router Dom**. Thanks to this library, I've managed to create a webpage that doesn't require a repeated reloading of each page which means that the client-server request is reduced.

![The example of using React Router in my project](/src/assets/images/readme/router.png)

---

### React Icons

For all my icons I have used another React-based library - **React Icons**. There is a wide range of various icons that a developer can use in any React project. Coding socials section, I have used all icons from this library. When it comes to styling, one should refer to _svg_ and also _path_ elements of React icons to attach them and, for instance, apply hover effects.

---

### SwiperJS

Since there is a projects section on my Home Page, I needed to style it in a user-friendly way, so my portfolio visitors could have a deep look into my projects instantly, without jumping from one page to another page. So, I decided to develop a swiper, and then I discover this external library which is called **SwiperJS**. This tool allowed me to create a nice-looking and plain swiper.

---

### Uuid

To keep all my projects in a single place I needed some data file, so I decided to create a projects file that contains all info about my works. But to properly map this data, I needed to attach each item with a unique key, so that' why I used **Uuid** library. This tool allowed me to generate random ids, so I could use them mapping projects object into separated elements in _virtual DOM_ generated by React environment. Here are some examples of using **Uuid** lib:

![The example of using Uuid in my project](/src/assets/images/readme/uuid.png)

---

### React Transition Group

Developing testimonials section, I came up with the idea to animate it somehow and to make it interactive with a user. I discovered another effective and plain external library **React Transition Group** that allowed me to animate the cards with testimonials and switch them with an animation.

---

### EmailJS

When I was designing the contact page, I thought about a form section which would allow a user to send me a message without leaving a page. Due to the fact that I had been learning front-end thechnologies so far, and back-end can be considered as a slightly uncharted territory for me, I decided to use a service which would allow to send a message from a user side. So, I used EmailJS:

![The example of using EmailJS in my project](/src/assets/images/readme/emailjs.png)

---

## Links

**Here are the links to my portfolio:**

You can check it out live - **<https://romanscode.com/>**
or look into the code here on GitHub - **<https://github.com/romaniso/React-Portfolio-Project>**

## To do list

- [x] navbar onscroll blur background (in future)
- [x] get resume button in navbar
- [x] onscroll animations
- [x] restyle skills section (delete ranking feature)
- [x] restyle expertise section
- [x] restyle projects cards
- [x] replace map image with google maps
- [ ] RESTYLE
- [ ] maybe try to animate character's eyes on mouse move
- [ ] maybe add a cartoonish burger icon
- [x] add a preloader
- [ ] add an onhover popup for main project image which follows a mouse
- [ ] add animated cursor
- [ ] add typewriter effect
- [ ] add framer motion scroll
