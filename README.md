<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
#

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">GitHub Issue Manager</h1>

  <p align="center">
    A Next.js 13.2 Project that manages issues of a github repository
    <br />
    <a href="https://github.com/dongdong867/github_issue_manager"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dongdong867/github_issue_manager/issues">Report Bug</a>
    ·
    <a href="https://github.com/dongdong867/github_issue_manager/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Home Page Screenshot

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

  [![Next][Next.js 13.2]][Next-url]
  [![React][React.js]][React-url]
  [![Github][Github.com]][Github-url]
  [![TailwindCSS][TailwindCSS.com]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free GitHub API Key at [https://github.com/settings/developers](https://github.com/settings/developers)
Set the redirect URI as `http://localhost:3000/login/callback`
2. Clone the repo

   ```sh
   git clone https://github.com/dongdong867/github_issue_manager.git
   ```

3. Install NPM packages

   ```sh
   npm install
   #or
   pnpm i
   #or
   yarn install
   ```

4. Enter your API in `.env`

   ```js
   NEXT_PUBLIC_GITHUB_CLIENT_ID= 'Your_GitHub_Client_Id'
   NEXT_PUBLIC_GITHUB_CLIENT_SECRET= 'Your_GitHub_Client_Secret'
   NEXT_PUBLIC_GITHUB_REDIRECT_URI= 'http://localhost:3000/login/callback/'

   NEXT_PUBLIC_GITHUB_REPOSITORY_OWNER= 'Owner_Of_The_Repository'
   NEXT_PUBLIC_GITHUB_REPOSITORY= 'Name_Of_The_Repository'
   ```

5. Run the project

   ```sh
   npm run dev
   #or
   pnpm dev
   #or
   yarn dev
   ```

6. Open `http://localhost:3000` to see the result

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Login

If the system detected that you are not logged in, system will direct you to the login page.

<div align='center'>
  <img src='/app/public/loginpage.png' height=500 />
</div>

### Display Task

Select any task in the home page to show more details about the task.

<div align='center'>
  <img src='/app/public/chooseTask.png' height=500 />
</div>

### Edit Task

Click the Edit button to start edit the current task.

<div align='center'>
  <img src='/app/public/editTask.png' height=500 />
</div>

### Finish Editing

Click on Update button and the system will auto update the task with the edit parts.

<div align='center'>
  <img src='/app/public/edited.png' height=500 />
</div>

### Creating Task

Click on the plus button on the top right of the screen, the system wll automatically open a create task frame.

<div align='center'>
  <img src='/app/public/create.png' height=500 />
</div>

### Finish Creating

Click on the Submit button and the system will reload the page to load the new task in the list.

<div align='center'>
  <img src='/app/public/created.png' height=500 />
</div>

### Task Pass Check

The system will check if the task title is empty and if the body of the task is over 30 characters.

<div align='center'>
  <img src='/app/public/notPass.png' height=500 />
</div>

### Search Tasks

Enter some query or change the label on top of the screen and click the search button to search.

<div align='center'>
  <img src='/app/public/search.png' height=500 />
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

dongdong867 @dongdong0867@gmail.com

Project Link: [https://github.com/dongdong867/github_issue_manager](https://github.com/dongdong867/github_issue_manager)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dongdong867/github_issue_manager.svg?style=for-the-badge
[contributors-url]: https://github.com/dongdong867/github_issue_manager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dongdong867/github_issue_manager.svg?style=for-the-badge
[forks-url]: https://github.com/dongdong867/github_issue_manager/network/members
[stars-shield]: https://img.shields.io/github/stars/dongdong867/github_issue_manager.svg?style=for-the-badge
[stars-url]: https://github.com/dongdong867/github_issue_manager/stargazers
[issues-shield]: https://img.shields.io/github/issues/dongdong867/github_issue_manager.svg?style=for-the-badge
[issues-url]: https://github.com/dongdong867/github_issue_manager/issues
[license-shield]: https://img.shields.io/github/license/dongdong867/github_issue_manager.svg?style=for-the-badge
[license-url]: https://github.com/dongdong867/github_issue_manager/blob/master/LICENSE.txt
[Next.js 13.2]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Github.com]: https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=ffffff
[Github-url]: https://github.com/
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com
[product-screenshot]: /app/public/homepage.png
