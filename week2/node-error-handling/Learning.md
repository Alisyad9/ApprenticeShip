
- [ ] `Unhandled exceptions` are very dangerous on the server. They will cause the whole Node program to crash, preventing it from responding to more requests. This is actually a good thing—attempting to continue serving requests after an unhandled exception could lead to much worse issues, like saving incorrect data to a database or serving the wrong information to users.

- [ ] This is why Node automatically stops your program on an unhandled exception. Unfortunately it does not do this for `unhandled rejections` (i.e. when a promise errors). This is why you see a warning when a promise rejects without a .catch:
``` javascript
process.on("unhandledRejection", (error) => {
  //   process.exitCode = 2;
  console.error(error);
  process.exit(1);
});

The exit code or exit status is a number returned by a process created by a 
command line indicating if there was an error or not.

0 means that there is no error
an other value means that there was an error.
This concept was expanded to other protocol and used
for instance in http with the status code. The principe is the same,
an integer is returned that has a meaning from success to all possible errors.


```