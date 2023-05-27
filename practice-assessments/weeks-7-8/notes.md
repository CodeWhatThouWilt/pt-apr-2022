# Step by step for how to approach TDD

1. Check the imports in the specs
2. Create files / directories associated with the imports in the specs
   - When doing this create the variables / exports
   - Before continuing make sure all import / exports errors are gone by running `mocha`.
3. Look at the first describe to examine what your next steps will be This will familiarize you with what you'll be working on next.
4. Move to the first it within the describe.
5. Look at the code within the it to figure out what you need to do.
   - When working with a class it's important to note how it's being created within the specs.
