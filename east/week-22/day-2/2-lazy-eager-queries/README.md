# Choose Your Branch!

This repo contains different versions of the starter code for **aa31-lazy-eager-queries**,
with each version stored in a program-specific branch. To download or clone the
correct branch, choose a method (`tiged`, zip, or clone) and follow the
instructions for your specific program.

* [`tiged`](#tiged-the-branch)
* [Zip](#download-the-branch-as-a-zip)
* [Clone](#clone-the-branch)

## `tiged` the branch

This is the most straightforward way to clone the project into a folder named
**aa31-lazy-eager-queries**. In the directory where you want the project to appear, simply
run the following command for your program and preferred authentication method:

### Online Full-Time

To authenticate with a Personal Access Token over HTTPS, run

```sh
npx tiged https://github.com/appacademy/aa31-lazy-eager-queries#full-time aa31-lazy-eager-queries
```

To authenticate with SSH, run

```sh
npx tiged appacademy/aa31-lazy-eager-queries#full-time aa31-lazy-eager-queries
```

### Online Part-Time

To authenticate with a Personal Access Token over HTTPS, run

```sh
npx tiged https://github.com/appacademy/aa31-lazy-eager-queries#part-time aa31-lazy-eager-queries
```

To authenticate with SSH, run

```sh
npx tiged appacademy/aa31-lazy-eager-queries#part-time aa31-lazy-eager-queries
```

-----

> **Note:** The first time you run `npx tiged`, you will likely be asked if you
> want to install `tiged`. Go ahead and install it.

Unless you cloned the project into an already existing local git repo, run

```sh
cd aa31-lazy-eager-queries && git init
```

to initialize the project as a git repository that you can connect to a remote
repo in your personal GitHub account.

## Download the branch as a .zip

**READ THESE INSTRUCTIONS FULLY BEFORE IMPLEMENTING THEM AS YOU WILL LOSE ACCESS
TO THIS PAGE ONCE YOU SWITCH TO YOUR PROGRAM BRANCH.**

If you want to download your branch as a __.zip__ file, click on the branch
button to the upper-left of the file list above--the button should currently
read "main"--and select your program from the resulting dropdown menu. This will
take you to your program's branch. Once there, click the green "Code" button and
select "Download ZIP" from the bottom of the menu. Move the __.zip__ to your
desired location and unzip!

Unless you unzipped the project in an already existing local git repo, run

```sh
cd aa31-lazy-eager-queries && git init
```

to initialize the project as a git repository that you can connect to a remote
repo in your personal GitHub account.

(To return to this page in your browser, simply select the "main" branch again.)

## Clone the branch

To clone the branch, open a terminal and cd into the directory where you want
the repo to go. Then run the command specified below for your program and
preferred authentication method:

### Online Full-Time

To authenticate with a Personal Access Token over HTTPS, run

```sh
git clone --branch full-time --single-branch https://github.com/appacademy/aa31-lazy-eager-queries.git
```

To authenticate with SSH, run

```sh
git clone --branch full-time --single-branch git@github.com:appacademy/aa31-lazy-eager-queries.git
```

### Online Part-Time

To authenticate with a Personal Access Token over HTTPS, run

```sh
git clone --branch part-time --single-branch https://github.com/appacademy/aa31-lazy-eager-queries.git
```

To authenticate with SSH, run

```sh
git clone --branch part-time --single-branch git@github.com:appacademy/aa31-lazy-eager-queries.git
```

When you clone a repo, the cloned repo's remote `origin` will still point to the
original repo.

To reassign the clone to your personal GitHub account (so you can `push` and
`pull` changes), create a remote `aa31-lazy-eager-queries` repo at `https://github.com`.
Then, back in your local terminal, `cd` into the cloned repo and run the
following commands to link the cloned repo to your newly created remote and push
up the current code (replace <YOUR-GH-USERNAME> with your actual GitHub username):

```sh
git remote set-url origin https://github.com/<YOUR-GH-USERNAME>/aa31-lazy-eager-queries
git push -u origin
```

 > **Note:** The first command differs from the command GitHub tells you to use
 > to connect an existing repo: you should run `git remote set-url` (as above)
 > rather than `git remote add` (as GitHub recommends).

 If you instead clone the project into a folder already initialized as a local
 git repo, you just need to remove the clone's remote connection to the original
 repo. `cd` into the cloned repo and run

 ```sh
 rm -rf .git
 ```

**WARNING:** `rm -rf` is a dangerous command that will delete the specified
directory--here, __.git__--and all of the directory's subfolders without any
verification. **Make sure you are in the cloned repo when you run this
command.**
