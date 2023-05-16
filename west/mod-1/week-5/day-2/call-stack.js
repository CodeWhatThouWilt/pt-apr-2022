// A call stack is a structure javascript uses to keep track of the 
// evaluation of function calls.

// Stacks are first in, last out (FILO)

// A stack is just like it sounds, a stack or a pile of processes

// You can add to a stack (aka push to the stack) and remove the item
// at the top of the stack (aka popping from the stack)

// Simply put, calling a function pushes to the stack, returning a function pops
// from the top of the stack

// Javascript is single threaded due to the call stack. This means that only one function
// can be processed at a time. This can be seen with something such as an infinite while
// loop that causes other processes to not run.