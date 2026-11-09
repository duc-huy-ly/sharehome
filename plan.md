# Sharehouse Task Organization - Product Story Plan

## Problem and proposed approach

The application should give people living in the same sharehouse one place to communicate, coordinate household chores, and manage shared finances. The first planning artifact defines the product scope as three independent epics, with prioritized user stories and acceptance criteria that can guide later feature specifications and implementation planning.

The initial release is assumed to be a cross-platform web application with responsive layouts for phones, tablets, and desktop browsers. It may be installable as a progressive web app, while framework and deployment choices remain open. The application uses email/password sign-in. A sharehouse has one owner/admin role and regular member roles. Stories are written around observable user outcomes rather than implementation details.

## Scope decisions

- **Access:** An owner/admin creates or manages the sharehouse and invites members. Members participate in the house.
- **Chat:** One shared house channel with text messages; direct messages, replies, and attachments are out of scope for the first story set.
- **Chores:** One-off and recurring chores, assignment or rotation among members, due dates, completion, and reminders.
- **Common pot:** Contributions and expenses, shared-cost splits, current balance, settlement/reimbursement tracking, and receipt attachments. Payment-provider integrations are deferred.
- **Platform:** Cross-platform responsive web application for mobile, tablet, and desktop browsers.
- **Authentication:** Email/password sign-in.

## Main epics and stories

### Epic 1 - Sharehouse group chat

**CHAT-1 (P1): Join and identify the sharehouse**

As a new resident, I want to accept an invitation and see the correct sharehouse so that I know I am participating in the right household.

Acceptance criteria:

- Given a valid invitation, when the person signs in and accepts it, then they become a member of the invited sharehouse.
- Given a person who belongs to a sharehouse, when they open the app, then the house name and member list are visible.
- Given an invalid, expired, or already-used invitation, when it is opened, then the person sees an actionable error and is not added.

**CHAT-2 (P1): Send and read house messages**

As a house member, I want to send and read text messages in one shared channel so that household communication is visible to everyone.

Acceptance criteria:

- Given a member is viewing the house channel, when they send non-empty text, then the message appears with its author and timestamp.
- Given new messages exist, when a member opens the channel, then messages are shown in chronological order.
- Given an empty or whitespace-only draft, when the member tries to send it, then no message is created and the member receives clear feedback.

**CHAT-3 (P2): Manage basic channel history**

As a house member, I want to load earlier messages and recognize new messages so that I can follow conversations without losing context.

Acceptance criteria:

- Given more messages exist than fit on screen, when the member requests older history, then older messages are loaded without duplicating existing messages.
- Given a member has unread messages, when they open the channel, then the unread state is cleared after the messages are presented.

### Epic 2 - Household chores

**CHORE-1 (P1): See the household chore plan**

As a house member, I want to see upcoming chores, owners, due dates, and completion state so that I know what needs to be done.

Acceptance criteria:

- Given chores exist, when a member opens the chore list, then upcoming and overdue chores show their title, assignee, due date, recurrence (if any), and status.
- Given no chores exist, when a member opens the chore list, then the app explains how to add the first chore.

**CHORE-2 (P1): Create and assign a chore**

As an owner/admin or permitted member, I want to create a chore and assign it to a member so that responsibility is explicit.

Acceptance criteria:

- Given valid title, assignee, and due-date details, when the chore is saved, then it appears in the house chore list.
- Given required details are missing, when the chore is saved, then it is rejected with field-specific feedback.

**CHORE-3 (P1): Complete and reopen a chore**

As an assignee, I want to mark a chore complete and reopen it if it was marked incorrectly so that the list reflects reality.

Acceptance criteria:

- Given an open chore assigned to a member, when that member marks it complete, then the status and completion time are visible.
- Given a completed chore, when an authorized member reopens it, then it returns to the outstanding list.

**CHORE-4 (P2): Schedule recurring chores and rotate responsibility**

As a household organizer, I want recurring chores to repeat and rotate among members so that routine work remains fairly distributed.

Acceptance criteria:

- Given a recurrence rule and a member rotation, when a chore occurrence is completed or reaches its cycle boundary, then the next occurrence is created with the next assignee.
- Given a recurring chore is paused or edited, then future occurrences follow the updated rule without changing historical completion records.

**CHORE-5 (P2): Receive chore reminders**

As a house member, I want reminders for approaching and overdue chores so that tasks are less likely to be forgotten.

Acceptance criteria:

- Given a member has an assigned chore approaching its due time, when the reminder threshold is reached, then the member receives a reminder.
- Given a chore is completed before its reminder is sent, then no reminder is sent for that completed occurrence.

### Epic 3 - Common pot and shared finances

**FIN-1 (P1): Understand the current common-pot balance**

As a house member, I want to see the current common-pot balance and a clear transaction history so that I understand the household's shared finances.

Acceptance criteria:

- Given contributions and expenses exist, when a member opens the common pot, then the current balance and transactions are shown with dates, amounts, categories, and participants.
- Given no transactions exist, then the app explains how to record the first contribution or expense.

**FIN-2 (P1): Record a contribution or shared expense**

As a house member, I want to record money added to the pot or spent for the house so that the balance stays accurate.

Acceptance criteria:

- Given valid amount, date, description, and transaction type, when the transaction is saved, then it changes the balance and appears in history.
- Given an invalid, zero, or negative amount, when the transaction is submitted, then it is rejected with clear feedback and does not change the balance.

**FIN-3 (P1): Split an expense among members**

As a house member, I want to specify who benefited from an expense and how it is split so that each person's share is transparent.

Acceptance criteria:

- Given an expense and selected participants, when the split is saved, then each participant's share is visible and the shares total exactly to the expense amount.
- Given the split does not total the expense amount, then the app prevents saving and explains the discrepancy.

**FIN-4 (P2): Track settlements and reimbursements**

As a house member, I want to record when someone reimburses another member or the common pot so that outstanding balances can be resolved.

Acceptance criteria:

- Given an outstanding amount, when a settlement is recorded, then the relevant balance decreases and the settlement is included in history.
- Given a settlement would exceed the outstanding amount, then the app requests correction and does not create an invalid transaction.

**FIN-5 (P2): Attach a receipt**

As a house member, I want to attach a receipt to an expense so that the household can verify what was purchased.

Acceptance criteria:

- Given a supported receipt image, when it is attached to a saved expense, then members can view it from the expense details.
- Given an unsupported or failed upload, then the expense remains understandable and the app reports the upload failure without silently losing the transaction.

## Cross-cutting stories

**ACCOUNT-1 (P1): Sign in securely**

As a resident, I want to create an account and sign in with email/password so that my sharehouse data is private to me and my household.

**ACCOUNT-2 (P2): Handle role-based permissions**

As an owner/admin, I want household-management actions to be restricted to authorized roles so that membership and shared records are not changed accidentally.

## Explicitly out of scope for this planning iteration

- Multiple house memberships or cross-house dashboards.
- Direct messages, threaded replies, reactions, file attachments, or message search.
- Payments or bank integrations, automated transfers, currency conversion, and formal accounting/tax reporting.
- Advanced chore analytics, gamification, and arbitrary custom notification rules.
- Implementation choices such as frameworks, storage, deployment, and UI design system.

## Notes and follow-up

- The next artifact should turn these epics and stories into a formal feature specification with stable requirement IDs, measurable success criteria, key entities, and a requirements quality checklist.
- Product decisions still worth confirming before implementation planning include supported currency and locale, invitation lifecycle, notification channels, and whether every member may edit financial records or only the owner/admin.
