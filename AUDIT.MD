# Pre-Refactor Audit

## 1. Poor Variable Naming
- Variables like `x`, `d`, `r`, `arr`, `stuff`, `tmp`, `res2` are unclear
- These names do not describe purpose and reduce readability

## 2. God Function (handleAll)
- The function `handleAll` handles multiple responsibilities:
  - Creating confessions
  - Fetching all confessions
  - Fetching one confession
  - Filtering by category
  - Deleting confession
- This violates the Single Responsibility Principle

## 3. No Separation of Concerns
- Routes, business logic, and data storage are all inside `app.js`
- Makes the code difficult to scale and maintain

## 4. Deeply Nested Conditionals
- Multiple nested `if` statements make logic hard to follow
- Example: validation inside create flow is deeply nested

## 5. Hardcoded Values
- Port (`3000`) is hardcoded
- Delete token (`supersecret123`) is hardcoded
- Categories array is repeated in multiple places

## 6. Inconsistent Response Formats
- Some responses use `.json()`, others `.send()`
- Error messages are inconsistent

## 7. Duplicate Logic
- Category validation array appears multiple times
- Filtering logic uses unnecessary `if` + `return true`

## 8. No Input Validation Structure
- Validation logic is scattered instead of centralized

## 9. No Folder Structure
- Entire application exists in a single file
- No MVC separation (routes, controllers, services)

## 10. Unused / Misplaced Code
- Final condition:
  if (confessions.length > 500)
  is outside request lifecycle and not useful