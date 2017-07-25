When you run a command in the terminal, where does BASH look for that command?

- When you run a command, BASH looks for the command in the users ```~/bin``` folder.

On a UNIX computer, how do you stop a running process?

- You can kill a running process by using the ```control-c``` (SIGINT) command, but if you want to temporarily suspend the process, you can use the command ```control-z``` (SIGSTOP).

What packages do you have installed via homebrew?

- Node / NPM
PostgreSQL
Docker

On a UNIX computer, how do you find the process id of a running process?

- In order to find the process id of a running process, you run command ```ps ax  | grep atom```, and you would replace "atom" with whichever editor/program you are using.

In a terminal, what does control-c do?

- Control-c 'politely' kills the currently running process by sending SIGINT signal.

What would be the result of typing the following commands?
The control-c command

- Control-c 'politely' kills the currently running process by sending SIGINT signal.

$ cd /Users/steve

- The cd command changes the current working directory to Steve's user directory, as directed by the path immediately following the command.

$ mkdir foo

- The mkdir command creates a new directory within the current working directory.

$ touch bar

- The touch command creates a new file, of the name that follows the command, in the current working directory (unless an alternate path is specified).

$ cd foo

- The cd command when executed without an explicit path, changes the working directory to a directory directly within the current working directory and whose name matches the text following the command (in this case, 'foo').

$ touch bar

- The touch command creates a new file(s) with the name(s) of the strings immediately following it. In this case, ```touch bar``` would create a new file named 'bar' in the current working directory.

$ pwd

- The ```pwd``` command prints the path to your current working directing to your terminal (STDOUT).

How do you set an environment variable in your shell?

- In order to set an environment variable, you simply run a command using the variable name and and the assignment operator ("=") ```PORT=3000```.

What keyboard shortcut do you use to split the screen in your editor?

- in order to split the screen in atom, hold down ```command+k```, while pressing either left/right/up/down, depending on how you wish to split the screen.

How do you create an alias in your shell?

- Declaring a BASH alias is pretty straightforward, you simply run the following command: ```alias [name]="[command]"```, like ```alias gst="git status"```.

What does your ~/.gitconfig have in it? (paste the whole file here)

- [user]
	name = DeBrayCarpenter
	email = dcarpen2@mail.ccsf.edu

What is the difference between a relative and absolute path?

- A relative path is the path to a file within the current root directory (not including the path to the directory), an absolute path is the path to the file within the entire file system.

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?

- The ```cp README.md ../README.md``` command would successfully copy the README.md file to the pinterest-for-dogs folder.

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

- The keyboard shortcut to find anything within your current project is: ```shift + command + f```, which will search the entire project, unlike ```shift + f```, which only searches the file that you are currently viewing.

What files or folders do you want all git repositories to ignore?

- Typically, you want all git repositories to ignore the node_modules folder and all of it's contents as well as passwords, sensitive information, etc., and for this reason, much of it is placed in a .gitignore file.

What is the main difference between Array.map and Array.forEach in JavaScript?

- The main difference between the Array.map and the Array.forEach methods is the implementation. They generally do the same thing, iterate through and apply code to be executed on each element in an array, however, the Array.map method is the functional implementation and rather than mutating the original array, creates a new array, which can be helpful in many cases when data should be preserved.
