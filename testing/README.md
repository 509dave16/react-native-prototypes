# Testing Libraries
1. Mocha
2. Enzyme
3. Jest

# Pick
**Jest**

Jest has snapshot testing which the other test library choices don't have. Snapshot testing will allow us to verify that how are components are being rendered does not stray from what we intended. However, this comes with the understanding that snapshots should be committed with corresponding code changes. And that the snapshots should be reviewed to confirm that they meet expectations. This feature will help with Interface Testing. It remains to be seen if the Unit Testing of Jest is up to snuff with the likes of Mocha however. We will revise our pick if we find that Jest is lacking enough in other areas.

The following articles are great asides in addition to Jests documentation https://facebook.github.io/jest/docs/tutorial-react-native.html:
- https://blog.callstack.io/unit-testing-react-native-with-the-new-jest-i-snapshots-come-into-play-68ba19b1b9fe#.diidqafn2
- https://blog.callstack.io/unit-testing-react-native-with-the-new-jest-ii-redux-snapshots-for-your-actions-and-reducers-8559f6f8050b#.wfsfrlcn0
- https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8

# Things TODO
- Implement  our unique prototype of Jest testing for reference purposes for when we later write legitimate project tests.
