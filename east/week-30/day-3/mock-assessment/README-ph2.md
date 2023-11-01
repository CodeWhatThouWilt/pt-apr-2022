# Phase 2: Remove A Report

**IMPORTANT NOTE:** This phase requires Phase 1 test specs to be passing.

On the root page of the application, `/`, clicking the `Delete` button for a
report should make an API call to `DELETE /api/reports/:reportId`. If
successful, the report should be removed from the Redux store and no longer
appear on the index page. The button click should not delete/modify anything if
the `DELETE /api/reports/:reportId` API call returns an error.

To test this last condition in the browser, you will need the server to return
an error. You can have the server always return on error for the `DELETE
/api/reports/:reportId` API call by entering this in the browser console:

```js
window.simulateDeleteError();
```

**Don't forget to turn off the error simulation when you finish testing your
error handling!** Leaving the error simulation running can cause you to waste
precious time debugging non-existent errors as you try to figure out why nothing
on your browser page is working.

To restore the normal function of the `DELETE /api/reports/:reportId` API call,
enter this in the browser console:

```js
window.removeDeleteErrorSimulation();
```

You can turn the error simulation on and off as often as you want.

Make sure the root page of the application, `/`, looks like this after the
`Delete` button next to "Report #1" is clicked:

![remove-report-screenshot]

Run the following command and pass the test specs to continue:

```sh
npm test 2-remove-report
```

[remove-report-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/remove-report-screenshot.png
