# FitReal

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)

## Description



### Notable Features
* Provides a form where users can submit a trip request
* Responsively designed to ensure both desktop and mobile compatibility
* Responsibly designed to ensure accessibility for all athletes

![TravelAgency_screenShot](https://user-images.githubusercontent.com/76409536/116341032-691acc00-a79d-11eb-9c4d-0acfc7eee72d.png)

## Installation
#### Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

#### Setup

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with some `h1` text, Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

#### How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.


#### Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

#### Walkthrough

1. Once you access the page, you are immediately brought to the login page.

2. Once logged in with accurate credentials, you will see the entire dashboard with all of your trips (current, upcoming, past and pending).

3. If you click the airplane icon, an aside will pop up with a form for you to submit a trip request.

4. Once your trip request is submitted, you will see your pending trip in your pending trips display and you will be shown an estimate in the aside.


## Authors
<table>
    <tr>
        <td> Ellie Azaveda <a href="https://github.com/EllieAzaveda">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76409536?v=4" alt="E. Azaveda" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
    </tr>
    </tr>
        <td><img src="./assets/readme/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./assets/readme/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./assets/readme/css-logo.png" alt="css" width="100" height="auto" /></td>
    </tr>
</table>
