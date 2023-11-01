# Phase 1: Display A List Of Reports

On the root page of the application, `/`, display a list of the current reports
in the Redux store after populating the Redux store with an API call to
`GET /reports` using `fetch`.

In the browser, make sure the root page of the application (`/`) looks like
this:

![index-page-screenshot]

Run the following command and pass the test specs to continue:

```sh
npm test 1-display-report-list
```

**HINT 1:** Think about the first steps of data flow for how a component can get
access to this data.

**HINT 2:** Make sure to look through all the React components to see which
components are being rendered at the root page of the application (i.e., `/`).

Make sure you get these tests passing before moving on to Phase 2 as all of the
remaining phases require this functionality.

[index-page-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/index-page-screenshot.png
