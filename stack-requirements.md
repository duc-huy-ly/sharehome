# ShareHome Stack Requirements

## Purpose

ShareHome is a cross-platform sharehouse application for group communication, chore coordination, and common-pot finance management. The initial stack must support responsive browser access across mobile, tablet, and desktop devices while keeping the architecture suitable for future growth.

## Confirmed stack

### Application

- The product MUST be delivered as a responsive cross-platform web application.
- The application MUST support mobile, tablet, and desktop browser layouts.
- The initial release MUST use a single shared TypeScript codebase for the web experience.

### Frontend and application runtime

- The frontend MUST use **Next.js**.
- The UI MUST use **React**.
- Application code MUST use **TypeScript** with type checking enabled.
- The application SHOULD use a consistent responsive design system and reusable UI components.
- The frontend SHOULD use server-side capabilities where they improve security or performance, while keeping domain behavior independent from presentation components.

### Backend services

- The initial backend platform MUST use **Supabase**.
- Supabase PostgreSQL MUST be the source of truth for application data.
- Supabase Auth MUST support email/password authentication.
- Supabase Realtime SHOULD be used for live updates to the shared house chat.
- Supabase Storage SHOULD be used for receipt images and other approved finance-related attachments.

### Data and domain requirements

- The data model MUST represent:
  - Sharehouses
  - Members and roles
  - Invitations
  - Chat messages
  - Chores and assignments
  - Recurring chore schedules and rotations
  - Chore reminders
  - Contributions and expenses
  - Expense splits
  - Settlements and reimbursements
  - Receipt metadata
- Chat, chores, and finance MUST be organized as separate domain modules, even when deployed as one application.
- Financial amounts MUST use integer minor currency units or an equivalent exact representation; floating-point values MUST NOT be used for monetary calculations.
- Financial changes MUST be processed using database transactions where multiple records must remain consistent.
- Financial history MUST be auditable. Existing transactions MUST NOT be silently overwritten.

### Security and authorization

- Users MUST only access sharehouse data for households in which they are members.
- Owner/admin and regular-member permissions MUST be enforced at the data-access boundary, not only in the user interface.
- Supabase Row Level Security MUST be configured for protected household data before production use.
- Input validation MUST occur at application boundaries and be backed by database constraints where appropriate.
- Authentication and authorization failures MUST be reported explicitly and MUST NOT result in success-shaped responses.

## Responsive web scope

The initial release focuses on a responsive web experience:

- Responsive layouts are in scope.
- Mobile, tablet, and desktop browser support are in scope.
- Full offline synchronization is out of scope until conflict resolution and reconciliation rules are defined.
- PWA installability and push notifications are deferred product decisions.
- Native iOS and Android applications are not required for the initial release.

## Testing requirements

- Unit tests SHOULD cover domain rules such as chore recurrence, expense splitting, settlement limits, and permission checks.
- Component tests SHOULD cover important user interactions and validation states.
- Browser-level tests MUST cover the primary flows across representative responsive viewports:
  - Sign in and accept a house invitation
  - Send and read a house message
  - Create, assign, and complete a chore
  - Record and split an expense
  - Record a settlement
- Financial tests MUST verify exact totals, invalid amounts, split reconciliation, and transaction consistency.

## Deferred decisions

The following decisions remain open and must be resolved before production deployment or implementation of the affected features:

- Hosting and deployment platform
- Environment and secret management conventions
- Supported currency and locale
- Timezone handling and display rules
- Invitation expiration and reuse rules
- Notification channels and reminder delivery
- Whether regular members may edit or delete financial records
- Retention and deletion rules for receipt images
- Whether and when PWA installation, push notifications, or offline behavior should be enabled

## Architectural trade-offs

Supabase is selected for the initial version because it combines PostgreSQL, authentication, realtime updates, and object storage with limited infrastructure overhead. The application SHOULD keep domain logic and data-access boundaries clear enough that a dedicated backend can be introduced later if background workflows, financial rules, integrations, or operational requirements exceed the initial service boundary.
