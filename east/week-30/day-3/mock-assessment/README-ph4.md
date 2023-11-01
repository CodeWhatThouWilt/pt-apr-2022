# Phase 4: Create A Report

**IMPORTANT NOTE:** This phase requires Phase 1 and 3 test specs to be passing.

On the root page of the application, `/`, clicking the "New Report" link should
direct a user to the `/reports/new` route. At this route, the application should
display the form to create a new report. Form submission should trigger an API
call to `POST /api/reports`. If the API call is successful, the new report
should be added to the Redux store and the user should be redirected to the
`/reports/:reportId` route, where the `:reportId` route parameter will be
replaced by the `id` assigned to the newly created report. If the API call is
NOT successful, the form page should simply display the errors; there should be
no redirection and no report added to the Redux store.

Once again, you will need the server to return an error to test this last
condition in the browser. As in Phase 2, you can have the server always return
on error for the `CREATE /api/reports/` API call by entering this in the browser
console:

```js
window.simulateCreateError();
```

**Don't forget to turn off the error simulation when you finish testing your
error handling!** Leaving the error simulation running can cause you to waste
precious time debugging non-existent errors as you try to figure out why nothing
on your browser page is working.

To restore the normal function of the `CREATE /api/reports/` API call, enter
this in the browser console:

```js
window.removeCreateErrorSimulation();
```

You can turn the error simulation on and off as often as you want.

Fill out the create report form in the browser at `/reports/new`. Once the form
is submitted, make sure the report details page shows the input values of the
form, similarly to the page below:

![report-details-after-create-screenshot]

Run the following command and pass the test specs to continue:

```sh
npm test 4-create-report
```

[report-details-after-create-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/report-details-after-create-screenshot.png
