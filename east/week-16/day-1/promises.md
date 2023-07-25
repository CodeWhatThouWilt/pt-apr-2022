# Promises

## Vocabulary

- Action: What the promise is trying to accomplish (ex: sending a fetch to an API)
- States:

  - Pending: The promise has not been resolved or rejected
  - Resolved: The action for our promise has succeeded
  - Reject: The action for our promise has not succeeded

- Settled: The promise is finished and has been resolved or rejected

## Side notes

- Once a promise has been settled the CB will not be invoked again. It can only succeed or fail once.
- Once a promise has been settled it's state cannot be changed.
