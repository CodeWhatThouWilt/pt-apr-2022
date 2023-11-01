# Phase 3: Display A Report's Details

**IMPORTANT NOTE:** This phase requires Phase 1 test specs to be passing.

On the root page of the application, `/`, clicking the report name link (e.g.,
"Report #1") should direct a user to the `/reports/:reportId` route. At this
route, you should make an API call to `GET /api/reports/:reportId` to retrieve
the report's additional information and add it to the application's Redux store.
Then, display the details of the report in the Redux store that has a matching
`id` to the `:reportId` route parameter.

Make sure the report detail page of "Report #1" at the route `/reports/1` looks
like this in the browser:

![display-report-details-screenshot]

An additional test ensures that navigating directly to URLs of
`/reports/:reportId` does not break functionality. This test ensures that the
display updates correctly when going directly from, say, Report 2 to Report 3.
The "Go to Report #" form at the bottom right of the report show page allows you
to do this. Simply enter the number of the report you wish to see and hit
`<Enter>`/`<Return>`.

**Note:** "Go to Report" will take you to a blank report if you enter the number
for a report that does not exist.

Run the following command and pass the test specs to continue:

```sh
npm test 3-display-report-details
```

[display-report-details-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/display-report-details-screenshot.png
