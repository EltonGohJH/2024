### TEAMMATES

#### Overview

* Assisted in v9 migration from Datastore to SQL:
    * Actions: `StudentSearchIndexingWorkersAction`, `GetSessionResultsAction`
    * Unit tests: `AccountsRequestLogicTest`
    * Integration tests: `FeedbackResponsesDbIT`, `FeedbackResponseCommentsDbIT`, `AccountRequestsDbIT`
* Instructor Account Request Form (ARF) project:
  * Designed and created front-end UI for instructor account request form, including front-end form validation and integration with back-end.
  * Added snapshot tests for form page.
  * Created instructor request acknowledgement email.
  * Created account request rejection endpoint.
  * Migrated `AccountRequestsLogicTest` again to work with new changes.
  * Fixed bug where admin creating account still sent emails.
  * Add SQL injection tests for `AccountRequestsDb`.
  * Add reCAPTCHA to public-facing request form.
* Created 2 issues: 1 implementation bug and 1 documentation bug.

#### Achievements by Week

| Week | Achievements |
| ---- | ------------ |
| 5 | Authored PR: [Migrate StudentSearchIndexingWorkersAction #12733](https://github.com/TEAMMATES/teammates/pull/12733) |
| R | Authored PR: [Migrate GetSessionResultsAction #12719](https://github.com/TEAMMATES/teammates/pull/12719) |
| 7 | Submitted issue: [Some feedback sessions duplicated in student home page #12875](https://github.com/TEAMMATES/teammates/issues/12875) |
| 8 | Authored PR: [Add integration tests for FeedbackResponseCommentsDb #12849](https://github.com/TEAMMATES/teammates/pull/12849) |
| 8 | Authored PR: [Add integration tests for FeedbackResponsesDb #12856](https://github.com/TEAMMATES/teammates/pull/12856) |
| 8 | Created wireframe for new account request form UI |
| 9 | Reviewed PR: [Add status and comments to AccountRequest #12898](https://github.com/TEAMMATES/teammates/pull/12898#pullrequestreview-1939749544) |
| 9 | Submitted issue: [Dev docs (E2E testing): Chromedriver link broken #12909](https://github.com/TEAMMATES/teammates/issues/12909) |
| 10 | Authored PR: [Upgrade instructor request form UI #12929](https://github.com/TEAMMATES/teammates/pull/12929/) |
| 10 | Authored PR: [Add snapshot tests for instructor request form UI #12942](https://github.com/TEAMMATES/teammates/pull/12942) |
| 10 | Authored PR: [Create instructor request acknowledgement email #12944](https://github.com/TEAMMATES/teammates/pull/12944) |
| 11 | Authored PR: [Change institute length limit #12974](https://github.com/TEAMMATES/teammates/pull/12974) |
| 11 | Authored PR: [Integrate instructor request form with API #12943](https://github.com/TEAMMATES/teammates/pull/12943) |
| 12 | Reviewed PR: Add AccountRequest Rejection email generator. #12987 [[1]](https://github.com/TEAMMATES/teammates/pull/12987#pullrequestreview-1985379377) [[2]](https://github.com/TEAMMATES/teammates/pull/12987#pullrequestreview-1985425576) |
| 12 | Authored PR: [Migrate AccountRequestsLogicTest #12780](https://github.com/TEAMMATES/teammates/pull/12780) |
| 12 | Authored PR: [Create reject account request endpoint #12985](https://github.com/TEAMMATES/teammates/pull/12985) |
| 12 | Reviewed PR: [Create Rejection Modal for Account Requests #12989](https://github.com/TEAMMATES/teammates/pull/12989#pullrequestreview-1989850246) |
| 12 | Reviewed PR: [Fix flaky component test #13003](https://github.com/TEAMMATES/teammates/pull/13003#pullrequestreview-1992202918) |
| 13 | Authored PR: [Check if account request is not created by admin before sending email #13032](https://github.com/TEAMMATES/teammates/pull/13032) |
| 13 | Authored PR: [Migrate AccountRequestsLogic unit tests #13043](https://github.com/TEAMMATES/teammates/pull/13043) |
| 13 | Authored PR: [Add SQL injection tests for AccountRequestsDb #13047](https://github.com/TEAMMATES/teammates/pull/13047) |
| R | Authored PR: [Add CAPTCHA to ARF #13081](https://github.com/TEAMMATES/teammates/pull/13081) |
