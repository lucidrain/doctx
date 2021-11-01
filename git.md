# GIT
## Examples
> create local repository
>
> `git init`

> link your local repository and remote repository
>
> `git remote add origin url_remote_git`

> pull code from remote
>
> `git pull origin name_branch`

> push code
>
> `git push origin branch_name`
>
> `git push --set-upstream origin branch_name` - gitLab

> create new branch
>
> `git checkout -b name_branch`

> checkout to existed branch
>
> `git checkout name_branch`

> add file to local repository
>
> `git add file_path`

> add commit
>
> `git commit -m "your_message"`

> merge branch
>
> `git merge name_branch`

> see all branch
>
> `git branch`

> check status
>
> `git status`

> delete remote branch
>
> `git push origin --delete remote_branch`

> delete local branch
>
> `git branch -d local_branch`
>
> `git branch -D local_branch` - force delete

> set remote url git
>
> `git remote set-url`

> get all branch
>
> `git fetch`

> reset to head
>
> `git reset --hard`

> set global username & email
>
> `git config --global user.name "your_github_username"`
>
> `git config --global user.email "your_github_email"`
>
> `git config -l`

> remove .git hindden file
>
> `rm -rf .git`

> open gitk
>
> `gitk`

## git merge / commit ui
**c=ctrl**
|keyboard         |description         |command          |description       |
|:----:           |:----:              |:----:           |:----:            |
|c-a              |beginning-of-line   |nul              |set-mark-command  |
|c-e              |end-of-line         |tab              |set-insert-command|
|c-b              |backward-char       |c-h              |help              |
|c-r              |move word backward  |c-m              |enter             |
|c-f              |forward-char        |c-i              |tab               |
|c-x              |go to each 2 rows   |c-s              |i-search          |
|c-d              |delete-char         |c-v              |go to bot mode    |
|c-k              |delete 1 row        |c-z              |stop merge        |
|c-w              |delete all          |c-x + c-c        |save file         |
|c-o              |create new row below|                 |                  |
|c-j              |create new row above|                 |                  |
|c-g              |keyboard-quit       |                 |                  |

## add PAT (Personal Access Token)
1. Create Personal Access Token on GitHub.
- From your GitHub account, go to Settings/ Developer Settings/ Personal Access Token
- Generate New Token (Give your password) => Fillup the form => click Generate token
- Copy the generated Token, it will be something like ghp_sFhFsSHhTzMDreGRLjmks4Tzuzgthdvfsrta

2. For Linux-based OS, you need to configure the local GIT client with a username and email address.
```
git config --global user.name "your_github_username"
git config --global user.email "your_github_email"
git config -l
```
3. Once GIT is configured, we can begin using it to access GitHub. Example:
```diff
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
Username for 'https://github.com' : username
Password for 'https://github.com' : give your personal access token here
```
Now cache the given record in your computer to remembers the token:
```diff
git config --global credential.helper cache
```
If needed, anytime you can delete the cache record by:
```diff
git config --global --unset credential.helper
git config --system --unset credential.helper
```
Now try to pull with -v to verify
```
git pull -v
```
Linux/Debian (Clone as follows):
git clone https://<tokenhere>@github.com/<user>/<repo>.git

## setup ssh on gitlab
`ssh -v`                                                    check ssh version 
`ssh-keygen -t ed25519 -c` **"<" comment ">"**              generate key ssh
`ssh-keygen -t rsa -b 2048 -c` **"email@example.com"**      generate key rsa
`ssh-keygen -p -f` **/path/to/ssh_key**                     generate ssh key pair
`xclip -sel clip <` **~/.ssh/id_ed25519.pub**               add ssh key to gitlab account
*icon top right/settings/ssh keys*                          ssh setting 
error fatal: unable to update url base from redirection {
      solve: login with private company network
in */home/cuong/.ssh/id_ed25519.pub*   add an ssh key
}