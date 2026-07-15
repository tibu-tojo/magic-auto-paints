# Remove Temporary Operating Hours Homepage Section

## Scope

Remove the homepage section titled “Temporary Operating Hours” from `src/app/page.tsx`.

## Design

Delete the section’s JSX rather than hiding it or adding configuration. The surrounding homepage sections will remain in their existing order and use their existing spacing. The separate “Opening Hours” notice in `src/components/features/ContactSection.tsx` remains unchanged.

## Verification

- Confirm the homepage no longer renders or contains the “Temporary Operating Hours” section.
- Confirm the contact section still contains its existing opening-hours notice.
- Run the project’s relevant lint and type-check commands.
