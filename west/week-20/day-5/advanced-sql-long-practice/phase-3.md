# Advanced Phase 3: Co-ownership Query

Now, it's time to work a different perspective of the ownership query. 
Specifically, looking for which cats are co-owned by both people (and not only 
one or the other).

Unfortunately, it is not as simple as changing `OR` to `AND` in the `WHERE`
clause. Go ahead and try it. Then think about what the conditional really means
to figure out why it is not giving the result you want.

Then, consider what operation you actually need to solve the problem...

> HINT: In the `OR` case, the overall results are the **union** of the 
> separate results for each owner. It doesn't matter if there's duplication in 
> the cat names, because `DISTINCT` automatically removes repeats. However, to
> identify cats with two owners, you instead need the **intersection** of two
> lists. In other words, the cat's id needs to be `IN` the list of ids for 
> one owner `AND` also `IN` the list of ids for the other owner.

This kind of query is one of those cases where subqueries are probably the 
easiest way to get the results you are seeking.

Go ahead and work on this query in the file _sql-practice/phase-3.sql_. If you
get stuck, you can (and should!) ask your instructor for assistance.