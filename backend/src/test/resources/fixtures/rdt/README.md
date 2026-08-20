# Sanitized RDT Fixtures

No binary fixture is currently committed. This directory is reserved for
minimal RDT files created specifically for automated format tests.

Before adding a fixture:

1. Create it from a test-only CPS profile, not a personal radio backup.
2. Remove real call signs, DMR IDs, messages, private frequencies, and recovery
   settings.
3. Change one documented field per comparison fixture whenever possible.
4. Record radio model, CPS version, firmware version, region, byte length, and
   SHA-256 in a neighboring manifest.
5. Explain the expected semantic values and binary evidence in format research
   documentation.
6. Confirm the contributor has permission to publish the fixture.
7. Obtain review for sanitization before merging.

Original codeplugs and CPS exports remain outside Git. A small file is not
automatically safe to publish, and Git LFS does not provide privacy.