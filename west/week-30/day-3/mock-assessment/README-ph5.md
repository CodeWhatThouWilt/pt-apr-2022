# Phase 5: Update A Report

**IMPORTANT NOTE:** This phase requires Phase 1 and 3 test specs to be passing.

On the root page of the application, `/`, clicking the `Edit` link for a report
should direct a user to the `/reports/:reportId/edit` route, where `:reportId`
is replaced with the `id` of the report. At this route, the application should
issue an API call to `GET /api/reports/:reportId` to get the report's detailed
information and add it to the Redux store. The page should then display the form
inputs with the report's current information for editing.

Submitting the form should issue an API call to `PUT /api/reports/:reportId`. If
the API call is successful, the report should be updated in the Redux store and
the user should be redirected to the `/reports/:reportId` route, where the
`:reportId` route parameter is replaced by the `id` of the updated report. If
the API call is NOT successful, the form page should simply display the errors;
there should be no redirection and no updating of the report in the Redux store.

As in Phases 2 and 4, you will need the server to return an error to test this
last condition in the browser. To have the server always return on error for the
`PUT /api/reports/:reportId` API call, enter this in the browser console:

```js
window.simulateUpdateError();
```

**Don't forget to turn off the error simulation when you finish testing your
error handling!** Leaving the error simulation running can cause you to waste
precious time debugging non-existent errors as you try to figure out why nothing
on your browser page is working.

To restore the normal function of the `PUT /api/reports/:reportId` API call,
enter this in the browser console:

```js
window.removeUpdateErrorSimulation();
```

You can turn the error simulation on and off as often as you want.

In the browser, fill out the update report form at `/reports/1/edit`. Once the
form is submitted, make sure the report details page shows the input values of
the form, similarly to the page below:

![report-details-after-update-screenshot]

Run the following command and pass the test specs to continue:

```sh
npm test 5-update-report
```

[report-details-after-update-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/report-details-after-update-screenshot.png
