# Advanced Phase 2: Replace Double `JOIN` With Nested Subqueries

Rewrite the following `JOIN` query using subqueries instead.

```sql
SELECT DISTINCT cats.name
FROM cats
JOIN cat_owners ON cats.id = cat_owners.cat_id
JOIN owners ON owners.id = cat_owners.owner_id
WHERE (owners.first_name = 'George' AND owners.last_name = 'Beatty') 
   OR (owners.first_name = 'Melynda' AND owners.last_name = 'Abshire');
```

This work should be completed in _sql-practice/phase-2.sql_. Run this file each 
time you save your changes.

> Hint: Since there are multiple joins, you will likely need multiple subqueries
> as well. Remember, you can place a subquery within another subquery, as long
> as each one is wrapped in parentheses.

If you get stuck, another approach is to rebuild the query from the ground up.
The result of this query is a list of cats which are owned by at least one of 
two people, or both of them. Specifically, George Beatty or Melynda Abshire.

Therefore, you can consider first a query to get the ids of these two owners.
Then use that to get the ids of their cats. Finally, use that list of ids to
figure out which names to display (distinctly, so there are no repeated names in
the results).